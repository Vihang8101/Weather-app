import logo from './logo.svg';
import './App.css';
import Api from "./services/Api"
import Api1 from "./services/Apiservices"
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Home/>
  <Api/>
    </div>
  );
}

export default App;
