import styled from "styled-components";
import { Form as FormComponent } from 'antd'

export const Form = styled(FormComponent).attrs({
    size: 'large'
})`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 0 5%;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid var(--primary);
`;