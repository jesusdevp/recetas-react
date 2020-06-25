import React, { useContext, useState } from "react";
import { IngredientesContext } from "../context/IngredienteContext";

import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    ingrediente: "",
  });

  const { ingredientes } = useContext(IngredientesContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  //Leer valores del usuario
  const getDateRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <select
            className="form-control"
            name="ingrediente"
            onChange={getDateRecetas}
          >
            {/* <option>--Selecciona Ingrediente--</option> */}
            {ingredientes.map((ingrediente) => (
              <option
                key={ingrediente.strIngredient1}
                value={ingrediente.strIngredient1}
              >
                {ingrediente.strIngredient1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 ">
          <input
            type="submit"
            className="btn btn-block btn-primary  "
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
