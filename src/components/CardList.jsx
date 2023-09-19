// import React from 'react'
import { useState } from 'react'
import '../components/cards.css'
import AdbIcon from '@mui/icons-material/Adb';

const CardList = ({item,key}) => {
    const [selected,setSelected] = useState();

    const handleClick = (id) =>{
        console.log(id.name)
        setSelected(id.name);
    }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <div
    className='cards' style={{ display:"flex", justifyContent:"center",
    alignItems:"center", margin:"5px",width:"40%"}}>
        <div key={item.url} 
        
        style={{display:"flex" ,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"}}
        onClick={()=>handleClick(item)}
        >
            <AdbIcon />
            <h1>{item.name}</h1>
            <h2>{ item.model}</h2>

        </div>

    </div>

    </div>
  )
}

export default CardList