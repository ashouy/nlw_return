import { useState } from 'react'

interface ButtonProps {
    text: string;
}


function Button(props : ButtonProps) {
    return <button className='bg-emerald-700 p-2'>{props.text}</button>
} 

function App() {


  return (
    <div >
        <Button text="Hello" />
    </div>
  )
}

export default App
