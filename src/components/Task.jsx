import React, { useState } from 'react'
import TaskDitailes from './TaskDitailes'


export default function Task(props) {
    const[flag,setFlag]=useState(false)
    const change=()=>{
        if(flag==true){
            return<TaskDitailes deleteTask={deleteTask} setDoneTasks={props.setDoneTasks} done={props.done} setFlag2={props.setFlag} ditailes={props.ditailes} getDataFlag={props.getDataFlag} setTasks={props.setTasks} arr={props.arr} index={props.index}  setFlag={setFlag} task={props.ditailes.task} desc={props.ditailes.description}/>
        }
    }
    const deleteTask=()=>{
      fetch('/delete',{
        headers:{'Content-type': 'application/json'},
        method:'delete',
        body:JSON.stringify({taskId: props.ditailes._id })
      }).then((res)=>{return res.json()}).then((data)=>{
        if(data.message=='ok'){
          let newOne = props.arr.splice(props.index,1)
          console.log(newOne)
          console.log(props.arr)
          props.setDoneTasks([...props.done,newOne[0]])
          // props.setFlag2(!props.getDataFlag)
          props.setTasks([...props.arr])
          props.setFlag(false)
        }
      })
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
