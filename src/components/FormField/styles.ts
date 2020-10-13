import styled, { css } from "styled-components";

export const FormFieldWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label``;

export const LabelText = styled.span`
  color: var(--black);
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;

interface InputProps {
  value: string;
  error: boolean;
}

export const Input = styled.input<InputProps>`
  border: 0;
  outline: 0;
  width: 100%;
  height: 57px;
  resize: none;
  display: block;
  font-size: 18px;
  color: var(--black);
  padding: 16px 16px;
  border-radius: 4px;
  background: var(--grayLight);
  transition: border-color 0.3s;
  border: 1px solid var(--blackLighter);
  border-color: ${(props: InputProps) => props.error && 'var(--dangerColor)'};
  &:focus {
    border-bottom: 4px solid var(--primary);
  }
  ${({ value }) => {
    const hasValue = value !== "";
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export const Text = styled.span`
  padding: 10px;
  font-size: 15px;
  color: var(--dangerColor);
`;
