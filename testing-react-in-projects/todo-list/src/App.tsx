import { useState } from 'react'
import './App.css'

import { AddNewTask } from './components/AddNewTask'


export const App = () => {
  const [allTaskItems, setAllTaskItems] = useState([
    { name: 'first task', done: false },
    { name: 'second task', done: false },
    { name: 'third task', done: false },
    { name: 'quarter task', done: false },
    { name: 'fifth task', done: false },
  ])

  const createNewTask = (taskName: string) => {
    if (!allTaskItems.find(task => task.name === taskName)) {
      setAllTaskItems([...allTaskItems, { name: taskName, done: false }])
    }

  }

  return (
    <>
      <h1>TO-DO LIST</h1>

      <AddNewTask createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            allTaskItems.map((task) => (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>



    </>
  )
}

