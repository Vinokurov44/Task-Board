import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Menu(props) {

    const change=()=>{
        props.setMenuFlag(false)
    }
  return (
    <div style={{height:'1.3cm',width:'100%',backgroundColor:'beige',display:'flex',justifyContent:'center',alignItems:'center'}} >
<Link style={{textDecoration:'none'}} to={'/allTasks'}><Button style={{backgroundColor:'tan',fontFamily:'Courier'}} variant="contained">All Tasks</Button></Link>
<Link style={{textDecoration:'none'}} to={'/myTask'}><Button style={{backgroundColor:'tan',fontFamily:'Courier',marginRight:'35px',marginLeft:'35px'}} variant="contained">My Tasks</Button></Link>
<Link style={{textDecoration:'none'}} to={'/history'}><Button style={{backgroundColor:'tan',fontFamily:'Courier',marginRight:'35px'}} variant="contained">History</Button></Link>
<Link style={{textDecoration:'none'}} to={'/newTasks'}><Button style={{backgroundColor:'tan',fontFamily:'Courier',marginRight:'35px'}} variant="contained">New Task</Button></Link>
<Link style={{textDecoration:'none'}} to={'/'}><Button style={{backgroundColor:'tan',fontFamily:'Courier'}} onClick={change} variant="contained">Exit</Button></Link>    
    </div>
  )
}
