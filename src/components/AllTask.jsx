import React, { useState } from 'react'
import Task from './Task'
import './allTask.css'


export default function AllTask(props) {
  let user=localStorage.getItem('user')
  return (
    <div>
      <div >

      </div>
      <h2 style={{fontFamily:'Courier',color: 'white' ,display:'flex',marginLeft:'40px'}}>Welcome:{user}</h2>
{props.arr.map((val,inx)=>{
  return<Task  setDoneTasks={props.setDoneTasks} done={props.done} getDataFlag={props.getDataFlag} setTasks={props.setTasks} ditailes={val} index={inx} arr={props.arr}/>
})}
{/* <div id='div3' style={{width:'5%',backgroundColor:'beige'}}></div> */}
    </div>
  )
}
