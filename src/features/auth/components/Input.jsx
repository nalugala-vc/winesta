import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'
          } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors bg-background text-text`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
