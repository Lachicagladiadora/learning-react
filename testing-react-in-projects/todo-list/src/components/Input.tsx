import { CSSProperties, ChangeEventHandler, InputHTMLAttributes } from "react"

type InputProps = {
  value?: string,
  // setValue?: (newValue: string) => void
  id?: string,
  placeholder?: string,
  onChange: ChangeEventHandler ,
  style?: CSSProperties,
}

export const Input = ({ id, placeholder, value, onChange, style }: InputProps) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        borderRadius: '35px',
        borderStyle: 'none',
        padding: '10px 20px',
        border: 'solid 2px green',
        background: 'black',
        color: '#e6e6e6',
        fontWeight: '700',
        ...style
      }}
    />
  )
}