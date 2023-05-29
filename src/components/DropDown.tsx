import React, { useState, ChangeEvent } from 'react';

function DropDown() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setSelectedOption(e.target.value);
    }

    return (
        <div
          style={{
            display: 'inline-block',
            padding: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p>You are a:</p>
          <select
            style={{
              width: '300px',
              padding: '12px',
              fontSize: '20px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: 'white',
              outline: 'none',
              appearance: 'none',
            }}
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
        </div>
    );
}

export default DropDown;