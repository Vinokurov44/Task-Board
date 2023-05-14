import React from 'react'
import InsideMyTaskDitailes from './InsideMyTaskDitailes'
import { useState } from 'react'

export default function InsideMyTasks(props) {
    const[flag,setFlag]=useState(false)
    const change=()=>{
        if(flag==true){
            return<InsideMyTaskDitailes    ditailes={props.ditailes}    setFlag={setFlag} task={props.ditailes.task} desc={props.ditailes.description}/>
        }
    }
  return (
    <div style={{marginTop:'1.6cm'}}>
    <div onClick={(e)=>{setFlag(true)}} style={{marginLeft:'24%',display:'flex',justifyContent:'space-evenly',  backgroundColor:'beige', width:'50%',borderRadius:'8px',marginTop:'0.3cm'}}>
<h1 style={{fontFamily:'Courier'}}>{props.ditailes.worker}</h1>
<h1 style={{fontFamily:'Courier'}}>{props.ditailes.task}</h1>
</div>
{change()}
</div>
  )
}
