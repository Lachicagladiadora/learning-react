// import App from './App.css'

import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Clean up -> when the component is disassembled/ When dependencies change, before running the new effect
    return () => {
      console.log('cleanUp')
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  // Change body class
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])


  return (
    <main>
      <h1>Third Project</h1>
      <div style={{
          position: 'absolute',
          background: 'rgb(102 0 177 / 61%)',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={()=> setEnabled(!enabled)}>
        { enabled ? 'Deactivate ' : 'Activate '}  follow cursor
      </button>
    </main>
  )
}

export default App
