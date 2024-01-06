import React, { useState } from 'react'
import "./index.scss"
const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='toggle__container'>
      <label htmlFor="toggle" className="toggle">
        <input
          type="checkbox"
          id="toggle"
          className="input"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="toggle-wrapper">
          <span className={`inactive-text ${!isChecked ? "active" : ""}`}>
            Active
          </span>
          <span className={`active-text ${isChecked ? "active" : ""}`}>
            Inactive
          </span>
          <span className="selector"></span>
        </div>
      </label>
    </div>
  )
}

export default ToggleButton
