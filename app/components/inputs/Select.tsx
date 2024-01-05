"use client";
import React from 'react';
import ReactSelect from "react-select"

interface SelectProps {
    label: string;
    value?: Record<string, any>;
    onChange: (value: Record<string, any>) => void;
    options: Record<string, any>[];
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, disabled }) => {
  return (
    <div className='z-[100]'>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <ReactSelect isDisabled={disabled} value={value} onChange={onChange} isMulti options={options} menuPortalTarget={document.body} styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }} classNames={{
            control: () => 'text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        }}/>
      </div>
    </div>
  )
}

export default Select
