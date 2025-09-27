import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid'
import Title from "./components/ComponentsElements/Title";

function App(){ 
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    async function fecthTasks(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const datas = await response.json()
      
      setTasks(datas)
    }

    fecthTasks();
  }, [])

  function onTaskClick(taskId){
    const newTasks = tasks.map((t) => {
      if(t.id === taskId){
        return {...t, isCompleted: !t.isCompleted}
      }

      return t;
    })

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((t) => t.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="max-w-[80%] h-screen bg-slate-500 flex justify-center p-6">
      <div className="min-w-[100] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}
export default App;