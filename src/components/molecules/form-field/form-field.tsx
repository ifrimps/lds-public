import React from 'react';
import { Label } from '../../atoms/label/label';
import { Input } from '../../atoms/input/input';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="mb-4">
      <Label text={label} htmlFor={label} />
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export { FormField };
