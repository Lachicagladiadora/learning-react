import { CSSProperties, ReactNode } from "react"

type ButtonProps={
  children:ReactNode,
  onClick?:()=>void,
  type?:string,
  id?:string,
  style?:CSSProperties
}
export const Button=({children, onClick, type, id,style}:ButtonProps)=>{
  return(
    <button 
      id={id} 
      onClick={onClick}
      type='submit'
      style={{
        border:'solid 2px green', 
        background:'#2DC626',
        ...style
      }}
    >
      {children}
    </button>
  )
}