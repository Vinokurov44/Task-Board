import React from 'react'
import Button from '@mui/material/Button';

export default function InsideMyTaskDitailes(props) {
  return (
    
            <div style={{width:'18%',height:'4.8cm',border:'3px solid beige',borderRadius:'15px',marginLeft:'40%',marginTop:'0.6cm'}}>
<Button style={{fontFamily:'Courier',backgroundColor:'beige',width:'0.5%',height:'0.8cm',marginTop:'8px'}} onClick={(e)=>{props.setFlag(false)}} variant="contained"><h3 style={{color: 'rgb(203, 68, 11)'}}>X</h3></Button>
<h3 style={{fontFamily:'Courier', color:'white'}}> Task name:{props.task}</h3>
<h3 style={{fontFamily:'Courier', color:'white'}}>Task description:{props.desc}</h3>
    </div>
 
  )
}
