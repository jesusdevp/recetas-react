import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);

  const [busqueda, buscarRecetas] = useState({
    ingrediente: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ingrediente } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;

        const resultado = await axios.get(url);

        guardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda, consultar, ingrediente]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        guardarConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
