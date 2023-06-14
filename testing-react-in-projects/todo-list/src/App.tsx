import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

export const App=()=> {
  const [newTaskValue,setNewTaskValue]=useState(()=>{
    return window.localStorage.getItem('name') || ''
  })

  useEffect(()=>{
    window.localStorage.setItem('TASK',newTaskValue)
  },[newTaskValue])

  // const onSubmit=(e)=>{
  //   e.preventDefault()
  //   localStorage.setItem('TASK',newTaskValue)
  //   newTaskValue('')
  // }

  const onChange = (e) => setNewTaskValue(e.target.value)

  return (
    <>
      <h1>TO-DO LIST</h1>

      <form>
        <Input  value={newTaskValue} onChange={onChange} placeholder='write a new tag'></Input>
        <Button >
          Save tag
        </Button>
      </form>
    </>
  )
}

// onSubmit={onSubmit}
// onClick={()=>alert(newTaskValue)}
