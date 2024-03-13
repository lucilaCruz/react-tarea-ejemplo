import { createContext } from "react";
import { tareas as data } from "../data/tareas";
import { useState, useEffect } from "react";

export const TareaContext = createContext();
export function TareaContextProvider(props) {
  const [tareas, setTareas] = useState([]);

  function guardarTarea(tarea) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
      },
    ]);
  }
  function eliminarTarea(id) {
    setTareas(tareas.filter((n) => n.id !== id));
  }

  useEffect(() => {
    setTareas(data);
  }, []);
  return (
    <TareaContext.Provider value={{ tareas, guardarTarea, eliminarTarea }}>
      {props.children}
    </TareaContext.Provider>
  );
}
