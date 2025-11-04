import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <Label text={label} />
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
