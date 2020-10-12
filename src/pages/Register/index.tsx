import React, { FormEvent, useState } from 'react'

// Native
import { useTranslation } from "react-i18next";

// Components
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import { Button } from '../../components/Button'
import { Title } from '../../components/Text'
import { Form } from '../../components/Form'

// Hooks
import { useInputChange } from '../../hooks'

// Shared 
import { brandList } from '../../shared/constants'
import { Cars } from '../../shared/interface'

// Hooks
import { useAPI } from '../../hooks'

const Register = () => {
  const [ formData, setFormData ] = useState<Cars>({})
  const { handleInputChange } = useInputChange(setFormData)
  const { apiPost } = useAPI(setFormData)
   
  const { options } = brandList()

  const { t } = useTranslation("Register");
 
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, price, age, brand } = formData;

    const data = new FormData();
    
    data.append("title", String(title));
    data.append("price", String(price));
    data.append("age", String(age));
    data.append("brand", String(brand));

    apiPost(formData)
  }

  return ( 
    <PageDefault>
      <Title>{t('title')}:</Title>

      <Form onSubmit={handleSubmit}>
        <FormField  
          value={formData.title}
          name={t('Glossary:title')} 
          label={t('Glossary:name')} 
          onChange={handleInputChange}
        />  

        <FormField 
          name="price" 
          type='number'
          value={formData.price}
          label={t('Glossary:price')} 
          onChange={handleInputChange} 
        />

        <FormField 
          name="brand"  
          suggestions={options}
          value={formData.brand}
          label={t('Glossary:brand')} 
          onChange={handleInputChange} 
        />

        <FormField 
          name="age" 
          min={1940}
          max={2020}
          value={formData.age}
          label={t('Glossary:age')} 
          onChange={handleInputChange} 
        />    

        <Button type='submit'>{t('button')}</Button>
      </Form>
    </PageDefault>
  )
}

export default Register