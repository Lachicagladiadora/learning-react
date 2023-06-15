import { useEffect, useState } from 'react'
import './App.css'

import { AddNewTask } from './components/AddNewTask'
import { TaskTable } from './components/TaskTable'


export const App = () => {
  const [taskItems, setTaskItems] = useState<{ content: string; done: boolean; }[]>([])
  // {name: 'sd', done: false}
  const createNewTask = (taskContent: string): void => {
    if (!taskItems.find((task) => task.content === taskContent)) {
      setTaskItems([...taskItems, { content: taskContent, done: false }])
      console.log(taskContent)
    }
  }

  const toogleTask=(task:any)=>{
    setTaskItems(
      taskItems.map((t)=>(t.content === task.content ? {...t, done : !t.done} : t))
    )
  }

  useEffect(() => {
    const data = localStorage.getItem('TasksList')
    if (data) {
      // console.log(JSON.parse(data))
      // console.log(setTaskItems(JSON.parse(data)))
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    console.log('change')
    localStorage.setItem('TasksList', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <>
      <h1>TO-DO LIST</h1>

      <AddNewTask createNewTask={createNewTask} />

      <TaskTable tasks={taskItems} toogleTask={toogleTask}/>


    </>
  )
}

