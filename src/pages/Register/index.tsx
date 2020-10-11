import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// Native
import { Alert } from 'antd'
import axios from 'axios';

// Components
import FormField from '../../components/FormField'
import PageDefault from '../../components/PageDefault'
import { Title } from '../../components/Text'
import { Button } from '../../components/Button'

import { useMoneyFormat } from '../../hooks'

// Services
import api from "../../services/api";

// Shared
import { Cars } from '../../shared/interface'

// Private
import { Form } from './styles'

const Register = () => {
  const [ data, setData ] = useState([])
  const [ formData, setFormData ] = useState<Cars>({})
  const itemBrand = data.map(({ brand }) => brand)

  const { handleMoneyFormat } = useMoneyFormat()

  const options = itemBrand.filter(function(index, id) {
    return itemBrand.indexOf(index) === id;
  });

  useEffect(() => {
    try {
      api.get('cars').then((response) => {
        if(response.status === 200){
          setData(response.data)
        } 
        else {
          alert('Houve algum erro com o requerimento de dados')
        }
      });
    } catch (e) {
      console.log(e)
    } 
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, price, age, brand } = formData;

    const data = new FormData();
    
    data.append("title", String(title));
    data.append("price", String(price));
    data.append("age", String(age));
    data.append("brand", String(brand));

    await api.post('cars', formData).then(() => {
      alert('Veículo cadastrado com sucesso')
    })
    .catch((e) => {
      alert(e)
    }) 
  }

  return ( 
    <PageDefault>
      <Title>Cadastrar veículo:</Title>

      <Form onSubmit={handleSubmit}>
        <FormField 
          onChange={handleInputChange} 
          name="title" 
          label='Nome' 
        />  

        <FormField 
          onChange={handleInputChange} 
          name="price" 
          label='Preço' 
          type='number'
        />

        <FormField 
          onChange={handleInputChange} 
          name="brand" 
          label='Marca' 
          suggestions={options}
        />

        <FormField 
          onChange={handleInputChange} 
          name="age" 
          label='Ano' 
          min={1940}
          max={2020}
        />    

        <Button type='submit'>Cadastrar</Button>
      </Form>
    </PageDefault>
  )
}

export default Register