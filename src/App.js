import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Topo from './components/Topo';
import './components/TopoStyle.css'

function App() {
  return (
    <div className="App backgroundTop">
      <Header/>
      <Topo/>
      <Form/>
    </div>
  );
}

export default App;
