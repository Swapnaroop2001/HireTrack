import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent } from 'react';

interface InputWithLabelProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  value: string; // Add value prop
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
}

export function InputWithLabel({ label, id, type, placeholder, value, onChange }: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
}
