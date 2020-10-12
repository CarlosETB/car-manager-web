import React from 'react'

// Native
import { useHistory } from "react-router-dom";

// Components
import PageDefault from '../../components/PageDefault'
import { Button } from '../../components/Button'

// Private
import { Container, Text } from './styles'

const PageError = () => {
    const history = useHistory();

    const handleSubmit = async () => {
        history.push("/");
      };

    return (
        <PageDefault>
            <Container>
                <h1>Você se perdeu?</h1>

                <Text>
                    Infelizmente, não localizamos essa página. Você encontra muitos outros títulos na página inicial.
                </Text>
                <Button onClick={handleSubmit}>Voltar a tela inical</Button>
            </Container>
        </PageDefault>
    )
}

export default PageError