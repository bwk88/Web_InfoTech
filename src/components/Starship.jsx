//TASK 2

import { useEffect, useState } from "react"
import axios from 'axios'
import CardList from "./CardList";

const Starship = () => {
    const [ships,setShips] = useState([]);
    console.log(ships)

    const handleData = async() =>{
        const { data } = await axios('https://swapi.dev/api/starships')

        // console.log(data.results)
        if(data){
            setShips(data.results);
        }
    } 

    useEffect(()=>{
     handleData();   
    },[]);

  return (
    <div>
        {/* {ships && ships.results[0]} */}
        {/* {ships && ships[0].name} */}
        {ships.map((item)=>(
            <CardList 
            key={item.url}
            item={item}
            />
  
        ))}
    </div>
  )
}

export default Starship