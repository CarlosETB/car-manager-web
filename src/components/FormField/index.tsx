import React from "react";

// Private
import { FormFieldWrapper, LabelText, Input, Label } from "./styles";

interface LayoutProps {
  value?: any;
  min?: number;
  max?: number;
  name?: string;
  label?: string;
  onChange?: any;
  suggestions?: any[];
  type?: 'string' | 'number' | 'age'
}

const FormField: React.FC<LayoutProps> = (props) => {
  const { name, type, label, max, min, suggestions, onChange, value } = props;

  const id = `id_${name}`;

  const settings = {
    id,
    max, 
    name,
    type,
    value,
    onChange,
    min: min || 0,
    autoComplete: "off",
    list: `suggestionFor_${id}`,
  };

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        <Input {...settings} />

        <LabelText>{`${label} :`}</LabelText>

        <datalist id={`suggestionFor_${id}`}>
          {suggestions?.map((suggestion) => (
            <option
              value={suggestion}
              key={`suggestionFor_${id}_option_${suggestion}`}
            />
          ))}
        </datalist>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;