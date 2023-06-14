import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"

export const AddNewTask = () => {
  const [newTaskValue,setNewTaskValue]=useState('')

  const onSubmit=(_event: { preventDefault: () => void })=>{
    _event.preventDefault()
    window.localStorage.setItem('TASK',newTaskValue)
    setNewTaskValue('')
  }

  return(
    <form onSubmit={onSubmit} >
        <Input  value={newTaskValue} onChange={(event) => setNewTaskValue((event.target as HTMLInputElement).value)} placeholder='write a new tag'></Input>
        <Button >
          Save tag
        </Button>
      </form>
  )
}