import '../App.css'
import { useState, useEffect } from 'react';
import { PiCopyLight } from "react-icons/pi";

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('1234 Address Street');
  const [textToCopy, setTextToCopy] = useState('defaultText');

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(()=> (console.log('copied text')))
  }
  return (
    <>
      <div className="flex">
        
        <input
          type="text"
          value={address}
          readOnly
        />
        <PiCopyLight className="align-bottom mt-2 font-bold text-2xl" onClick={() => handleCopy(address)} />
        <button className="bg-yellow-400 text-black px-2 ml-4">Edit</button>
      </div>
    </>
  )
}

export default Clipboard;