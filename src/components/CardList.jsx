// import React from 'react'
import { useState } from 'react'
import '../components/cards.css'

const CardList = ({item,key}) => {
    const [selected,setSelected] = useState();

    const handleClick = ({id}) =>{
        console.log(id.name)
    }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <div style={{ display:"flex", justifyContent:"center",
    alignItems:"center", background:"pink", margin:"5px",width:"40%"}}>
        <div key={item.url} 
        style={{display:"flex" ,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"}}
        onClick={()=>handleClick(item)}
        >

            <h1>{item.name}</h1>
            <h2>{ item.model}</h2>

        </div>

    </div>

    </div>
  )
}

export default CardList