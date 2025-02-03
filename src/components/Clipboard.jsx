import '../App.css'
import { useState, useEffect } from 'react';
import { PiCopyLight } from "react-icons/pi";

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('1234 Address Street');
  const [textToCopy, setTextToCopy] = useState('defaultText');
  const [isEditable, setIsEditable] = useState(false);

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => (console.log('copied text')));
  }
  const handleEdit = () => {
    setIsEditable(!isEditable);
  }
  const handleChange = (e) => {
    setAddress(e.target.value)
  }
  //handle edit toggles ability to edit field
  //passed as onclick function via edit button
  // when in edit mode, readOnly is false
  // input field can be edited
  //  edit button becomes save button
  //
  return (
    <>
      <div className="flex">
        <input
          type="text"
          value={address}
          readOnly={!isEditable}
          onChange={handleChange}
        />
        <PiCopyLight className="align-bottom mt-2 font-bold text-2xl" onClick={() => handleCopy(address)} />
        <button
          onClick={handleEdit}
          className={`${isEditable ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
            } px-2 ml-4`}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default Clipboard;