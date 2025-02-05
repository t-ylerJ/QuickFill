import '../App.css'
import { useState, useEffect } from 'react';
import { PiCopyLight } from "react-icons/pi";
import Field from './Field';
import { useAppContext } from '../context/AppContext';

const Clipboard = () => {
  const [fullName, setFullName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const { formData, setFormData } = useAppContext();
  const [editStates, setEditStates] = useState({
    address: false,
    jobDescription1: false,
    jobDescription2: false,
    jobDescription3: false,
    jobDescription4: false,
    jobDescription5: false
  })
  //Load data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  //Save data to localStorage when form changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => (console.log('Copied text:', textToCopy)));
  }

  const toggleEdit = (fieldKey) => {
    setEditStates((prev) => ({...prev, [fieldKey]: !prev[fieldKey] }))
  }
  

  return (
    <div className="space-y-6 p-4">
      {Object.keys(editStates).map((key) => (
        <Field
          key={key}
          handleCopy={handleCopy}
          label={key.replace(/([A-Z])/g, ' $1')} // Format label
          value={formData[key] || ""}
          onChange={(newValue) => setFormData({ ...formData, [key]: newValue })}
          isEditable={editStates[key]}
          toggleEdit={() => toggleEdit(key)}
          multiline={key.startsWith("jobDescription")}
        />
      ))}
    
    </div>
  );
};

export default Clipboard;