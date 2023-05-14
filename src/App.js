import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './components/Menu';
import Signin from './components/Signin';
import AllTask from './components/AllTask';
import NewTasks from './components/NewTasks';
import { useEffect, useState } from 'react';
import MyTasks from './components/MyTasks';
import History from './components/History';


function App() {
  const [menuflag,setMenuFlag]=useState(false)
  const [tasks ,setTasks]=useState([]);
  const[getDataFlag,setFlag]=useState(false);
  const[doneTasks,setDoneTasks]=useState([]);


useEffect(()=>{
  fetch('/task').then((res)=>{return res.json()}).then((data)=>{
    setTasks(data)
  })
},[getDataFlag])

useEffect(()=>{
  fetch('/history').then((res)=>{return res.json()}).then((data)=>{
    setDoneTasks(data)
  })
},[getDataFlag])

const newTask=(w,t,d)=>{
// setTasks([...tasks,{worker:w,task:t,description:d}])
fetch('/add',{
  headers:{'Content-type': 'application/json'},
  method:'post',
  body:JSON.stringify({
    worker:w,
    task:t,
    description:d
  })
}).then((res)=>{return res.json()}).then((data)=>{
  setFlag(!getDataFlag);
})

}


const showMenu=()=>{
  if(menuflag==true){
    return<Menu setMenuFlag={setMenuFlag}/>
  }
}





  return (
    <div className="App">
  <BrowserRouter>
 {showMenu()}
  <Routes>
<Route path='/' element={<Signin setMenuFlag={setMenuFlag}/>}/>
<Route path='/allTasks' element={<AllTask setFlag={setFlag} setTasks={setTasks} arr={tasks} getDataFlag={getDataFlag} setDoneTasks={setDoneTasks} done={doneTasks}/>}/>
<Route path='/newTasks' element={<NewTasks add={newTask}/>}/>
<Route path='/myTask' element={<MyTasks arr={tasks}/>}/>
<Route path='/history' element={<History done={doneTasks}/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
