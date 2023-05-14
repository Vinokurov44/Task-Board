import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function NewTasks(props) {
const[task,setTask]=useState('');
const[desc,setDesc]=useState('');
const[worker,setWorker]=useState('');
 
const nev=useNavigate()

const validate=()=>{
  if(worker=='Leonardo'|| worker=='Stiv'|| worker=='Joni'|| worker=='Bred'|| worker=='Tom'){
    props.add(worker,task,desc)
    nev('/allTasks')
  }
  else{
    alert('there is not employee with this name in the company')
  }
}
  return (
    <div style={{display:'flex'}}>
      <div style={{marginLeft:'7%' ,width:'40px',height:'100vh',backgroundColor:'beige'}}>

      </div>
      <div style={{border:'5px solid beige',height:'10cm',marginTop:'2.5cm',width:'45%',marginLeft:'18%'}}>
      <h1 style={{color:'beige', fontFamily:'Courier'}}>Add New Task</h1>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <input style={{width:'220px',borderRadius:'4px',borderColor:'beige'}}  onChange={(e)=>{setTask(e.target.value)}}   type="text" class="form__input" id="name" placeholder="Task Name" required="" />
  <label style={{color:'beige'}} for="name" class="form__label">Task Name</label>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <input style={{width:'220px',borderRadius:'4px',borderColor:'beige'}}   onChange={(e)=>{setDesc(e.target.value)}}  type="text" class="form__input" id="name" placeholder="Task Description" required="" />
  <label style={{color:'beige'}} for="name" class="form__label">Task Description</label>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <input style={{width:'220px',borderRadius:'4px',borderColor:'beige'}}  onChange={(e)=>{setWorker(e.target.value)}}  type="text" class="form__input" id="name" placeholder="Worker Name" required="" />
  <label style={{color:'beige'}} for="name" class="form__label">Worker Name</label>
  <Button style={{backgroundColor:'beige',fontFamily:'Courier',color:'tan'}} onClick={validate} variant="contained">Create</Button>
     </div>
    </div>
  )
}
