import { useState } from 'react';
import { PiCopyLight } from "react-icons/pi";
import '../App.css'

const Field = ({ label, value, onChange, multiline=false }) => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="flex items-center space-x-3 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {multiline ? 
      <textarea
      type="text"
      value={value}
      readOnly={!isEditable}
      onChange={(e) => onChange(e.target.value)}
      className="w-1/2 flex-col h-40 border rounded-lg"
        />
        :
        <input
          type="text"
          value={value}
          readOnly={!isEditable}
          onChange={(e) => onChange(e.target.value)}
          className="w-1/2 flex-col h-40 border rounded-lg"
        />
    }
      <PiCopyLight
        className="align-bottom mt-2 font-bold text-2xl size-20"
        onClick={() => handleCopy(text)}
      />

      <button
        onClick={() => setIsEditable(!isEditable)}
        className={`${isEditable ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
          } px-2 ml-4 h-1/4 align-center`}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
    </div>
  )
}

export default Field;