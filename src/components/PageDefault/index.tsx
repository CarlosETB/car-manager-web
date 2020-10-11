  
import React, { ReactNode } from "react";

// Components
import Header from "../Header";

// Private
import { Main } from "./styles";

interface LayoutProps {
  children?: ReactNode;
}

const PageDefault: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default PageDefault;