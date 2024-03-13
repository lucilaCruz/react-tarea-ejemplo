import CardTarea from "./CardTarea";
import { useContext } from "react";
import { TareaContext } from "../context/TareaContext";
function TareaLista() {
  const { tareas } = useContext(TareaContext);
  if (tareas.length == 0) {
    return <h1 className="text-lg text-white">No tiene tareas registradas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2  ">
      {tareas.map((tarea) => (
        <div key={tarea.id}  >
          <CardTarea tarea={tarea} />
        </div>
      ))}
    </div>
  );
}

export default TareaLista;
