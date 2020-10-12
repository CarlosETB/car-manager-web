import styled from "styled-components";

export const Form = styled.form.attrs({
    size: 'large'
})`
  flex: 1;
  width: 100%;
  display: flex;
  margin: 20px 0;
  padding: 20px 5%;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid var(--primary);
`;