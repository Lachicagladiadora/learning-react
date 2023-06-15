import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toogleTask}:any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map((task: { content: string, done: boolean }) => (
            <TaskRow 
              task={task} 
              key={(Math.floor(Math.random() * 1000000)).toString()} 
              toogleTask={toogleTask}
            />
          ))
        }
      </tbody>
    </table>
  )
}