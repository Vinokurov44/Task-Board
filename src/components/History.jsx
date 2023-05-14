import React from 'react'
import DoneTasks from './DoneTasks'
import Task from './Task'

export default function History(props) {
  return (
    <div>
      <h2 style={{fontFamily:'Courier',color: 'white',display:'flex',marginLeft:'40px'}}>All finished tasks</h2>
      {props.done.map((val)=>{
        return<DoneTasks ditailes={val}/>
      })}
    </div>
  )
}
