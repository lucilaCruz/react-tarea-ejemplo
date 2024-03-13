import { TareaContext } from "../context/TareaContext";
import { useContext } from "react";
function CardTarea({ tarea }) {
  const { eliminarTarea } = useContext(TareaContext);
  return (
    <div className="bg-sky-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.titulo}</h1>
      <p className="text-gray-900 "  >{tarea.descripcion}</p>
      <button className="bg-red-700 px-2 py-1 rounded-md mt-3 hover:bg-red-500 " 
        onClick={(e) => {
          eliminarTarea(tarea.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CardTarea;
