
export const TaskRow = ({ task, toogleTask }: any) => {
  return (
    <tr>
      <td>
        <input 
          type="checkbox" 
          checked={task.done} 
          onChange={() => toogleTask(task)} 
        />
        {task.content}
      </td>
    </tr>
  )
}