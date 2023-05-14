import React from 'react'
import Task from './Task'
import InsideMyTasks from './InsideMyTasks'

export default function MyTasks(props) {
  let user=localStorage.getItem('user')
  const userTask=props.arr.filter(task=>task.worker===user)
  return (
    <div>
      <h2 style={{fontFamily:'Courier',color: 'white',display:'flex',marginLeft:'40px'}} >Tasks for worker:{user}</h2>
{userTask.map((val,inx)=>{
  return<InsideMyTasks ditailes={val}/>
})}
    </div>
  )
}
