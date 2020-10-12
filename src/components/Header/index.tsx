import React from "react";

// Native
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "components/Button";

// Shared
import { Logo } from "shared/images";

// Private
import { Container, Image } from "./styles";

const Header = () => {
  const history = useHistory();

  const { t } = useTranslation("Header");

  const handleHome = async () => {
    history.push("/");
  };

  const handleCreate = async () => {
    history.push("/cadastrar");
  };

  return (
    <Container>
      <Image src={Logo} onClick={handleHome}/>
      

      <Button onClick={handleCreate}>{t('button')}</Button>
    </Container>
  );
};

export default Header;