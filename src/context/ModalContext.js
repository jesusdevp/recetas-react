import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [receta, guardarReceta] = useState({});

  //Llamar API cuando tenemos el id de unareceta
  useEffect(() => {
    const getReceta = async () => {
      if (!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

      const resultado = await axios.get(url);

      guardarReceta(resultado.data.drinks[0]);
    };
    getReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{
        guardarIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
