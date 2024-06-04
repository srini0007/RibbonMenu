import React from 'react';

interface IRibbonCustomCheckbox {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function RibbonCustomCheckbox({ label, checked, onChange }:IRibbonCustomCheckbox) {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default RibbonCustomCheckbox;
