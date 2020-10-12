import React from "react";

// Native
import { Link, useHistory } from "react-router-dom";

// Components
import { Button } from "../Button";

// Shared
import { Logo } from "../../shared/images";

// Private
import { Container, Image } from "./styles";

const Header = () => {
  const history = useHistory();

  const handleCreate = async () => {
    history.push("/cadastrar");
  };

  return (
    <Container>
      <Link to="/">
        <Image src={Logo} />
      </Link>

      <Button onClick={handleCreate}>Cadastrar Veículo</Button>
    </Container>
  );
};

export default Header;