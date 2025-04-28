import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './assets/components/FirstComponent'
import SecondComponent from './assets/components/SecondComponent'
import TemplateExpression from './assets/components/TemplateExpression'
import Events from './assets/components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Fundamento do React</h1>
      <FirstComponent/>
      <SecondComponent/>
      <TemplateExpression/>
      <Events/>
    </>
  )
}

export default App
