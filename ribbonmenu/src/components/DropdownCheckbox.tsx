import React, { useState, useRef, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface IDropdownRadioProps {
  options: Option[];
  defaultLabel: string;
  onSelectionChange: (selectedValue: string) => void;
}
function DropdownCheckbox({ options, defaultLabel, onSelectionChange }:IDropdownRadioProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value: string) => {
    setSelectedValue(value);
    onSelectionChange(value);
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleToggle}
      >
        {selectedValue ? options.find(option => option.value === selectedValue)?.label : defaultLabel}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name="dropdown-radio"
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="form-radio h-4 w-4 text-indigo-600 "
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckbox;
