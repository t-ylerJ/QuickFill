import { useState } from 'react';
import './App.css';
import Clipboard from './components/Clipboard';


function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState('clipboard')

  
  return (
    <>
      <div>
        {mode === 'clipboard' && 
          <Clipboard />
        }
      </div>
      
    </>
  )
}

export default App
