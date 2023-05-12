import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.Fragment>
//     <button>
//       <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
//       Hi Button
//     </button>
//     <button>
//       <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
//       Hi Button
//     </button>
//     <button>
//       <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
//       Hi Button
//     </button>
//   </React.Fragment>
// )


// const createButton = ({text}) => {
//   return(
//     <button>
//       <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 16H0V6h4V0h6v4h6v12H4zM6 2v12h8v-1h-2v-2h2v-1h-2V8h2V6H8V2H6zM2 8v6h2V8H2z" fill-rule="evenodd"></path> </g></svg>
//       {text}
//     </button>
//   )
// }

// root.render(
//   <React.Fragment>
//     {createButton({text: 'Button 1'})}
//     {createButton({text: 'Button 2'})}
//     {createButton({text: 'Button 3'})}
//   </React.Fragment>
// )

// PascalCase 
// camelCase 
// snake_case 
// kebab-case 
// FIRST COMPONENT
const Button = ({text}) => {
  return(
    <button>
      <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 16H0V6h4V0h6v4h6v12H4zM6 2v12h8v-1h-2v-2h2v-1h-2V8h2V6H8V2H6zM2 8v6h2V8H2z" fill-rule="evenodd"></path> </g></svg>
      {text}
    </button>
  )
}

root.render(
  <React.Fragment>
    <Button text = "Button 1"/>
    <Button text = "Button 2"/>
    <Button text = "Button 3"/>
  </React.Fragment>
)