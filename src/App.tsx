import { useState } from 'react'
import WelcomePage from './pages/Welcome'

function App() {
  const [_clientName, setClientName] = useState('')

  const handleClientName = (name: string) => {
    setClientName(name)
  }

  return <WelcomePage questionsNumber={8} onClientName={handleClientName} />
}

export default App
