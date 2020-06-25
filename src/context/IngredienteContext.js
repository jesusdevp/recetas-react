import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Creando Context

export const IngredientesContext = createContext();

//Provider (funciones y state)
const CategoriasProvider = (props) => {
  //state del context
  const [ingredientes, guardarIngredientes] = useState([]);

  //Llamado a la API
  useEffect(() => {
    const obtenerIngredientes = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

      const ingredientes = await axios.get(url);
      guardarIngredientes(ingredientes.data.drinks);
    };
    obtenerIngredientes();
  }, []);

  return (
    <IngredientesContext.Provider
      value={{
        ingredientes,
      }}
    >
      {props.children}
    </IngredientesContext.Provider>
  );
};

export default CategoriasProvider;
