import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './signin.css'

export default function Signin(props) {

  const[user,setUser]=useState('');
  const[password,setPassword]=useState('');

    const nev=useNavigate()
    const checkValid=()=>{
fetch('/signin',{
  headers:{
    'Content-type': 'application/json'
 },
 method:'post',
 body:JSON.stringify({
    user,
    password
 })
}).then((res)=>{return res.json()}).then((data)=>{
  if(data.message=='error'){
    alert('invalid user')
  }
  if(data.message=='ok'){
    localStorage.setItem('user',user)
    props.setMenuFlag(true)
    nev('/allTasks')
  }
})
    }
  return (
    <div  >
    <div style={{marginTop:'3cm', backgroundColor:'beige',width:'55%',marginLeft:'22%',height:'12cm',borderRadius:'15px'}}>
    <div style={{display:'flex',flexDirection:'column',alignContent:'center'}}>
      <h2 style={{marginTop:'2cm', color:'tan', fontFamily:'Courier',fontSize:'30px'}}>SignIn to your Task Board </h2>
     
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <input onChange={(e)=>{setUser(e.target.value)}} type="text" class="form__input" id="name" placeholder="Name" required="" />
  <label for="name" class="form__label">Name</label>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
  <input onChange={(e)=>{setPassword(e.target.value)}} type="text" class="form__input" id="name" placeholder="Password" required="" />
  <label for="name" class="form__label">Password</label>
<Button style={{backgroundColor:'tan',  marginTop:'0.7cm',fontFamily:'Courier',width:'20%',marginLeft:'40%'}} onClick={checkValid} variant="contained">Enter</Button>
</div>
</div> 



    </div>
  )
}
