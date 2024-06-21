import "./App.css";
import React, { useState ,useEffect} from "react";

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
      setTimer(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date())
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
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white" ,fontSize:"25px"}}>
          <h1>Just Do It</h1>
        </div>
        <div style={{display:"flex" , alignItems:"center" , gap:"10px"}}>
          <input
            style={{ width: "400px", padding: "16px", borderRadius: "5px" }}
            type="text"
            placeholder="Enter your task" value={task.taskName} name="taskName" onChange={(event)=>handleChange(event)}
          />
          <button onClick={handleSubmit}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>{" "}
              Add Task
            </span>
          </button>
        </div>


        <div style={{color:"white" , marginTop:"20px"}}>
         {timer}
        </div>

         
         <div>
          {taskList.map((e,index)=> <div key={e.id} style={{display:"flex" , alignItems:"center" , background:"#686D76" ,color:"white"  , width:"500px" , marginTop:"20px" , borderRadius:"20px"}}>
                  
                  <div style={{width:"50%"}}>
                     <h2>{e.taskName}</h2>
                  </div>
                  <div style={{width:"30%" , display:"flex" , alignItems:"center" ,textWrap:"nowrap", gap:"10px", color:"white"}}>
                      <button onClick={()=>handleStatus(e.id)}>{e.taskstatus? "Completed" : "Not Completed"}</button>
                      <button onClick={()=>handleDelete(e.id)}>Delete</button>
                  </div>
              

          </div>)}
         </div>


      </div>
    </div>
    
  )
}

export default App;
