import "./App.css";
import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faXmark, faCheck} from '@fortawesome/free-solid-svg-icons'

function App() {

  const [timer,setTimer] = useState("")



  const initState={
    id:Math.random(),
    taskName:"",
    taskstatus:false
  }

  const [task,setTask] = useState(initState)

  const [taskList,setTaskList] = useState([])

  
  const handleChange = (event) => {
     setTask({...task, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {

    setTaskList([...taskList,task])
    setTask(initState)
  }

  

  useEffect(()=>{
    
    setInterval(()=>{
      setTimer(new Date().toLocaleDateString())
    },1000)

  },[])

  const handleStatus=(val)=>{

    const newarr =taskList.map((item)=>{
      if(item.id===val){
        return {...item,taskstatus:!item.taskstatus} 
      }
      return item
  
  })

  setTaskList(newarr)
  
  }

  const handleDelete =(id)=>{

    const newarr= taskList.filter((e)=> e.id!==id)
    
    setTaskList(newarr)
  }





  

  return (
    <div className="App" >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#BBE9FF" ,fontSize:"25px"}}>
          <h1>Just Do It</h1>
        </div>
        <div style={{display:"flex" , alignItems:"center" , gap:"10px"}}>
          <input
            style={{ width: "auto", padding: "10px", borderRadius: "5px" }}
            type="text"
            placeholder="Enter your task" value={task.taskName} name="taskName" onChange={(event)=>handleChange(event)}
          />
          <button style={{padding:"10px"}} onClick={handleSubmit}>
            
              Add Task
          
          </button>
        </div>


        <div style={{color:"#BBE9FF" , marginTop:"20px"}}>
         {timer}
        </div>

         
         <div>
          {taskList.map((e,index)=> <div key={e.id} style={{display:"flex" , alignItems:"center" , background:"#686D76" ,color:"#BBE9FF"  , width:"auto" , marginTop:"20px" , borderRadius:"20px", justifyContent:"space-between", padding:"10px", gap:"10px" , textWrap:"wrap", height:"auto"}}>
                  
                  <div style={{maxWidth:"auto" , textWrap:"wrap" }}>
                     <h4>{e.taskName}</h4>
                  </div>
                  <div style={{width:"auto" , display:"flex" , alignItems:"center" ,gap:"5px", color:"white"}}>
                      <button onClick={()=>handleStatus(e.id)}>{e.taskstatus? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</button>
                      <button onClick={()=>handleDelete(e.id)}> <FontAwesomeIcon icon={faTrash} /> </button>
                  </div>
              

          </div>)}
         </div>


      </div>
    </div>
    
  )
}

export default App;
