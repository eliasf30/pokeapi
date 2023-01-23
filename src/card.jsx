import './card.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WhatPokemon from "./images/pokemon.PNG"








export  function Card(props){

const [data,setdata] = useState({})
const [stats,setstats] = useState({})
const [abilities,setabilities] = useState({})
const names = []



const pokeurl ="https://pokeapi.co/api/v2/pokemon/"

const pokemon = props.nombre
const poke = Object.values(pokemon)





const getpokemon = async() => {
    
    const {data} = await axios.get(`${pokeurl}${poke}`)
    const {stats} = await data?.stats
    const {abilities} = await data?.abilities
    setdata({type2:""})
    setdata({image: data.sprites.front_default ,ID: data.id, nombre: data.name, weight: (data.weight / 10) + " kilos", height: ((data.height) / 10) + " metros", type: (data.types[0].type.name),
    type2: (data.types[1]?.type.name)   })
    setstats({hp:  "hp: " + data.stats[0].base_stat, ataque: "ataque: " + data.stats[1].base_stat, defensa: "defensa: " + data.stats[2].base_stat, ataqueEspecial: "atq especial: " + data.stats[3].base_stat, 
    defensaEspecial: "Def especial: " + data.stats[4].base_stat, speed: "Velocidad: " + data.stats[5].base_stat})
    setabilities({ability1: data.abilities[0].ability.name, ability2: data.abilities[1].ability.name, ability3: data.abilities[2]?.ability.name })
    
    
}


useEffect(() => {
    getpokemon()
    
    
},[props])





  

    

    return ( <div className="card">
                <div>
                  {(data.image)? <img className="pokeImage" src={data.image}/> : <img className="pokeImage" src={WhatPokemon}/> }  
                </div>
                <div>
                    <h3>Nombre:</h3>
                    <p>{data.ID} - {data.nombre}</p>
                    <h4>Altura:</h4>
                    {(data.weight)? <p>{data.height}</p> : <p></p>}
                    
                    <h4>Peso</h4>
                    <p>{data.weight}</p>  
                </div>
                <div>
                    <h3>Tipo:</h3>
                    <ul className='type_ul'>
                        <li >{data.type}</li>
                        <li >{data.type2}</li>
                    </ul>
                </div>
                <div>
                    <h3>Stats:</h3>
                    <ul>
                        <li>{stats.hp}</li>
                        <li>{stats.ataque}</li>
                        <li>{stats.defensa}</li>
                        <li>{stats.ataqueEspecial}</li>
                        <li>{stats.defensaEspecial}</li>
                        <li>{stats.speed}</li>
                    </ul>
                </div>
                <div>
                    <h3>Habilidades:</h3>
                    <ul>
                        <li>{abilities.ability1}</li>
                        <li>{abilities.ability2}</li>
                        <li>{abilities.ability3}</li>
                        
                    </ul>
                </div>
            </div>
        
        )
} 