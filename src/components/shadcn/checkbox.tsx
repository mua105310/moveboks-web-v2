"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ShadcnCheckboxProps {
  onClick?: (checked: boolean) => void;
  label: string;
}

export function ShadcnCheckbox({ onClick, label }: ShadcnCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (isChecked: boolean) => {
    setChecked(isChecked);
    onClick?.(isChecked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked={checked} onCheckedChange={handleChange} />
      <Label htmlFor="terms">{label}</Label>
    </div>
  );
}
