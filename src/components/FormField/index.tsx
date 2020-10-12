import React from "react";

// Private
import { 
  FormFieldWrapper, 
  LabelText, 
  Input, 
  Label, 
  Text 
} from "./styles";

interface LayoutProps {
  value?: any;
  min?: number;
  max?: number;
  name?: string;
  label?: string;
  onChange?: any;
  error?: string;
  suggestions?: any[];
  type?: 'string' | 'number' | 'age'
}

const FormField: React.FC<LayoutProps> = (props) => {
  const {  
    max, 
    min, 
    name, 
    type,
    error,  
    value,
    label, 
    onChange,
    suggestions,
  } = props;

  const id = `id_${name}`; 
  const hasError = Boolean(error === '')
  const hasValue = Boolean(value === '')

  const settings = {
    id,
    max, 
    name,
    type,
    onChange,
    min: min || 0,
    value: value || '',
    autoComplete: "off",
    list: `suggestionFor_${id}`,
    error: hasValue && !hasError,
  };

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        <Input {...settings} />

        <LabelText>{`${label} :`}</LabelText>
        
        {hasValue && (<Text>{error}</Text>)}

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