import { Card } from './card.jsx';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const ref = useRef()
  const [pokemon, setpokemon] = useState("")
 
  

  const [names,setNames] = useState([])

  const getnames = async() =>{
    const pokeurlnames ="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const getnames = await axios.get(`${pokeurlnames}`)
    getnames.data.results.map(element => names.push(element.name))
        
        return setNames({names})
    
    
}



useEffect(() => {
  
  getnames()
  
  
  
},[])



const handlepokemon = () => {
  const pokemonSelected = ref.current.value
  
   setpokemon({pokemonSelected})
}


const arraynames = Object.values(names)

const truearray = arraynames[0]

console.log(truearray)
  
  
  return (
    <div className="App">
      <label className='label'></label>
      <input list='names' type="text" placeholder='Ingresa el nombre' ref={ref} className='input'></input>
      <datalist id='names'>
        {
         truearray?.map((name) => 
         <option key={name} value={name}></option>)
        }
       
      </datalist>
      <button onClick={handlepokemon}>Busca un pokemon!</button>
      <Card  nombre ={pokemon} />
    </div>
  );
}

export default App;

