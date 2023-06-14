import {  CSSProperties, DetailedHTMLProps, FormEvent, InputHTMLAttributes } from "react"

type InputProps = {
  value?: string,
  // setValue?: (newValue: string) => void
  // id?: string,
  placeholder?: string,
  style?: CSSProperties,
  onChange:(event: FormEvent<HTMLInputElement>) => void | DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
}

export const Input = ({  placeholder, value, onChange, style }: InputProps) => {
  return (
    <input
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