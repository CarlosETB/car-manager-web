import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--white);
  border-bottom: 2px solid var(--black);
`;

export const Image = styled.img`
  max-width: 170px;
`;