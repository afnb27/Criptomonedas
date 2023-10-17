import React, { useState} from "react";
import 

function StarCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={`star-checkbox ${isChecked ? 'checked' : ''}`}>
        <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        />
        <span className= "star">&#9733;</span>
        </label>
    );
}

export default StarCheckbox; 