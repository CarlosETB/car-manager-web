import React from 'react'

// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// Components
import PageDefault from 'components/PageDefault'
import { Button } from 'components/Button'

// Private
import { Container, Text } from './styles'

const PageError = () => {
    const { t } = useTranslation("PageError");

    const history = useHistory();

    const handleSubmit = async () => {
        history.push("/");
      };

    return (
        <PageDefault>
            <Container>
                <h1>{t('title')}</h1>

                <Text>{t('text')}</Text>
                <Button onClick={handleSubmit}>{t('button')}</Button>
            </Container>
        </PageDefault>
    )
}

export default PageError