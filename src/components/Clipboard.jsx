import '../App.css'
import { useState, useEffect } from 'react';

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <button onClick={() => { navigator.clipboard.writeText(this.state.textToCopy) }}>Copy Text</button>
    </>
  )
}

export default Clipboard;