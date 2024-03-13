import React, { useState,useContext } from "react";
import {TareaContext} from '../context/TareaContext'

function TareaFormulario() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {guardarTarea} = useContext(TareaContext);

  function obtenerTarea(e) {
    e.preventDefault();
    const nuevaTarea={
        titulo:titulo,
        descripcion:descripcion
    }
    guardarTarea(nuevaTarea);
    setTitulo('');
    setDescripcion('');
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={obtenerTarea} className="bg-sky-800 mb-4 p-10" >
        <h1 className="text-2xl text-white mb-3 font-bold">Registro de Tareas</h1>
        <input
          placeholder="Escribir Tarea"
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
          autoFocus
          value={titulo}
          className="p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribir Descripción"
          onChange={(e) => {setDescripcion(e.target.value)}}
          value={descripcion}
          className="p-3 w-full mb-2"
        ></textarea>
        <button
        className="bg-blue-500 px-2 py-1 w-full text-white" 
        >Guardar</button>
      </form>
    </div>
  );
}

export default TareaFormulario;
