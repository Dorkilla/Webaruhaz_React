import './App.css';
import { useState } from 'react';
import { LISTA } from './components/Adat.js';
import Jatekter from './components/Jatekter.js';

function App() {
  const [lista, setLista] = useState(LISTA);
  const [kosar, setKosar] = useState([]);

  function kosarbarak(termek) {
    setKosar([...kosar, termek]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <Jatekter lista={lista} kosarbarak={kosarbarak} />
      <div>
        <h2>Kosár tartalma:</h2>
      </div>
    </div>
  );
}

export default App;
