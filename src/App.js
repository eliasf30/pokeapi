import { Card } from './card.jsx';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const ref = useRef()
  const [pokemon, setpokemon] = useState("")



  const handlepokemon = () => {
    const pokemonSelected = ref.current.value
    
     setpokemon({pokemonSelected})
  }
  
  return (
    <div className="App">
      <input  placeholder='ingresa el nombre' ref={ref} className='input'></input>
      <button onClick={handlepokemon}>busca un pokemon!</button>
      <Card  nombre ={pokemon} />
    </div>
  );
}

export default App;

