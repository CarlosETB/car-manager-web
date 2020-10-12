import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// Native
import { useTranslation } from "react-i18next";

// Components
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import { Button } from '../../components/Button'
import { Title } from '../../components/Text'
import { Form } from '../../components/Form'

// Services
import api from "../../services/api";

// Shared
import { brandList } from '../../shared/constants'
import { Cars } from '../../shared/interface'

const Register = () => {
  const [ formData, setFormData ] = useState<Cars>({})
  
  const { options } = brandList()

  const { t } = useTranslation("Register");

  useEffect(() => {
    api.get('cars').then((response) => {
      if(response.status === 200){
        setFormData(response.data)
      } 
      else {
        alert(t('alertFail'))
      }
    });
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
      alert(t('alertSuccess'))
    })
    .catch((e) => {
      alert(e)
    }) 
  }

  return ( 
    <PageDefault>
      <Title>{t('title')}:</Title>

      <Form onSubmit={handleSubmit}>
        <FormField 
          onChange={handleInputChange} 
          name="title" 
          label={t('name')} 
        />  

        <FormField 
          onChange={handleInputChange} 
          name="price" 
          label={t('price')} 
          type='number'
        />

        <FormField 
          onChange={handleInputChange} 
          name="brand" 
          label={t('brand')}  
          suggestions={options}
        />

        <FormField 
          onChange={handleInputChange} 
          name="age" 
          label={t('age')} 
          min={1940}
          max={2020}
        />    

        <Button type='submit'>{t('button')}</Button>
      </Form>
    </PageDefault>
  )
}

export default Register