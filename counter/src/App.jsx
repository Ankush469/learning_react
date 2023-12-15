import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {


  return (
    <>
      <h1 className='bg-red-400 text-black p-4
      rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="Ankush yadav" btnText="click me"/>
      <Card userName="Raunak" btnText="Visit me"/>
     
    </>
  )
}

export default App
