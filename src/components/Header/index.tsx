import React from "react";

// Native
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import { Button } from "../Button";

// Shared
import { Logo } from "../../shared/images";

// Private
import { Container, Image } from "./styles";

const Header = () => {
  const history = useHistory();

  const { t } = useTranslation("Header");

  const handleCreate = async () => {
    history.push("/cadastrar");
  };

  return (
    <Container>
      <Link to="/">
        <Image src={Logo} />
      </Link>

      <Button onClick={handleCreate}>{t('button')}</Button>
    </Container>
  );
};

export default Header;