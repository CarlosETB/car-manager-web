import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--white);
  border-bottom: 2px solid var(--primary);
`;

export const Image = styled.img`
  max-width: 170px;
`;