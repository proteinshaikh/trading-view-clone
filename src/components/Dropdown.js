import React, { useState } from "react";

const Dropdown = ({ options, onSelect}) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);

        if(onSelect) {
            onSelect(option);
        }
    };

    return (
        <div>
            <label>Select an option:</label>
            <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
            >
                <option value="" disabled>
                    choose an option
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                {option}
                    </option>
                ))}
            </select>
            {selectedOption && <p>You Selected: {selectedOption}</p>}
        </div>
    );
};

export default Dropdown;