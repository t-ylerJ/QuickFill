import '../App.css'
import { useState, useEffect } from 'react';
import { PiCopyLight } from "react-icons/pi";
import Field from './Field';

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('1234 Address Street');
  const [jobDescription1, setJobDescription1] = useState("Performed Duty 1\n Performed Duty 2");
  const [isEditable, setIsEditable] = useState(false);

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => (console.log('copied text')));
  }
  
  //handle edit toggles ability to edit field
  //passed as onclick function via edit button
  // when in edit mode, readOnly is false
  // input field can be edited
  //  edit button becomes save button
  //
  return (
    <div className="space-y-6 p-4">
      <Field label="Address" value={address} onChange={setAddress} multiline />
      <Field label="Job Description 1" value={jobDescription1} onChange={setJobDescription1} multiline/>
    </div>
  );
};

export default Clipboard;