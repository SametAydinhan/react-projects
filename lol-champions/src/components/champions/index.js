import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './index.css'

function Champions() {
   const [champions,setChampions] = useState([]);
   useEffect(() => {
           axios("https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json")
            .then(data => data.data)
            .then((data) => {
                console.log(data.data);
                setChampions(Object.keys(data.data));
            })
            .catch(eror => console.log(eror))
   }, [])
   
   return (
    <div className='container'>
        
        {
            champions.map((champion,index) => (
                <div className='foto'key={index}><img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={champion} /><div className='name'>{champion}</div></div>
            ))
        }
        
    </div>
);
}

export default Champions