import '../App.css'
import { useState, useEffect } from 'react';

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('');
  const [textToCopy, setTextToCopy] = useState('defaultText');

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(()=> (console.log('copied text')))
  }
  return (
    <>
      <button onClick={()=> handleCopy('Text')}>Copy Text</button>
    </>
  )
}

export default Clipboard;