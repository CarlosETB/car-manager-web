import React from 'react'

// Native
import { Button } from 'antd'

// Components
import PageDefault from '../../components/PageDefault'
import { Input } from '../../components/TextInput'
import { Title } from '../../components/Text'

// Private
import { Form } from './styles'

const Register = () => {
  return (
    <PageDefault>
      <Title>Cadastrar veículo:</Title>

      <Form>
        <Input placeholder='Nome' />
        <Input placeholder='Marca' />
        <Input placeholder='Preço' />
        <Input placeholder='Ano' />

        <Button type="primary">Cadastrar</Button>
      </Form>
    </PageDefault>
  )
}

export default Register