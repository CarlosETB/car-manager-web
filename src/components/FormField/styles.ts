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
  value: string[];
}

export const Input = styled.input<InputProps>`
  background: var(--grayLight);
  color: var(--black);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border: 1px solid var(--blackLighter);
  padding: 16px 16px;
  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-bottom: 4px solid var(--secondary);
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
