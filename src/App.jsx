import TareaLista from "./componentes/TareaLista";
import TareaFormulario from "./componentes/TareaFormulario";
//console.log(tareas);
function App() {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg mt-10">
        <TareaFormulario />
        <TareaLista />
      </div>
    </>
  );
}

export default App;
