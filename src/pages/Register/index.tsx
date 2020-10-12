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
  const { t } = useTranslation("Register");

  const [ formData, setFormData ] = useState<Cars>({})
  const [ titleError, setTitleError ] = useState('')
  const [ priceError, setPriceError ] = useState('')
  const [ ageError, setAgeError ] = useState('')
  const [ brandError, setBrandError ] = useState('')

  const { handleInputChange } = useInputChange(setFormData)
  const { apiPost } = useAPI(setFormData)
   
  const { options } = brandList()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, price, age, brand } = formData;

    const data = new FormData();
    
    data.append("title", String(title));
    data.append("price", String(price));
    data.append("age", String(age));
    data.append("brand", String(brand));
    
    if(title === '') {
      setTitleError(t('Glossary:errorInput'))
    }
    else if(price === '') {
      setPriceError(t('Glossary:errorInput'))
    }
    else if(String(age) === '') {
      setAgeError(t('Glossary:errorInput'))
    }
    else if(brand === '') {
      setBrandError(t('Glossary:errorInput'))
    }
    else apiPost(formData)
  }

  return ( 
    <PageDefault>
      <Title>{t('title')}:</Title>

      <Form onSubmit={handleSubmit}>
        <FormField 
          name="title"  
          error={titleError}
          value={formData.title}
          label={t('Glossary:name')}
          onChange={handleInputChange} 
        />  

        <FormField  
          name="price"  
          type='number'
          error={priceError}
          value={formData.price}
          label={t('Glossary:price')}
          onChange={handleInputChange}
        />

        <FormField 
          name="brand"  
          error={brandError}
          suggestions={options}
          value={formData.brand}
          label={t('Glossary:brand')}
          onChange={handleInputChange} 
        />

        <FormField 
          name="age"  
          min={1940}
          max={2020}
          error={ageError}
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