import { FormImc } from "./components/form-imc/form";
import './App.css';
import { Result } from "./components/result-imc/result";
function App() {
  
  console.log(localStorage.getItem('valor'));

  return (
    <div className="App">
      <Result/>
      <FormImc />
    </div>
  );
}

export default App;
