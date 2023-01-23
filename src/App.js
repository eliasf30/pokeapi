import { Card } from './card.jsx';
import './App.css';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { BsTrashFill } from 'react-icons/bs';


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


  
  
  return (
    <div className="App">
      <label className='label'></label>
      <div>
      <input list='names' type="text" placeholder='Ingresa el nombre' ref={ref} className='input'></input>
      <button onClick={() => {window.location.replace('')}} className='delete_button' disabled={pokemon === ""}><BsTrashFill  /></button>
      </div>
      <datalist id='names' className='datalist'>
        {
         truearray?.map((name) => 
         <option key={name} value={name}></option>)
        }
       
      </datalist>
      <button className='button' onClick={handlepokemon} >Busca un pokemon!</button>
      <Card  nombre ={pokemon} />
    </div>
  );
}

export default App;

