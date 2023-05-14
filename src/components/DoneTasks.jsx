import React from 'react'

export default function DoneTasks(props) {
  return (
    
    <div style={{marginLeft:'24%',display:'flex',justifyContent:'space-evenly',  backgroundColor:'beige', width:'50%',borderRadius:'8px',marginTop:'1.6cm'}} >

<h1 style={{fontFamily:'Courier'}}>{props.ditailes.worker}</h1>
<h1 style={{fontFamily:'Courier'}}>{props.ditailes.task}</h1>
    </div>
  )
}
