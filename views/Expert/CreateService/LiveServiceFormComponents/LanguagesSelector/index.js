import React from 'react'

const Languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
]

const LanguagesSelector = ({ onLanguageChanged }) => {
  return (
    <div className="w-full">
      <p className="text-lg font-medium">Languages</p>
      <select
        className="bg-lightGrey text-md w-full mt-2 p-3"
        onChange={(e) => onLanguageChanged(e.target.value)}
      >
        {Languages.map((day, index) => (
          <option key={index} value={day.value}>
            {day.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguagesSelector
