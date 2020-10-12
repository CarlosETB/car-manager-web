import React, { FormEvent, useEffect, useState } from 'react'

// Native
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import PageDefault from 'components/PageDefault'
import FormField from 'components/FormField'
import { Button } from 'components/Button'
import { Title } from 'components/Text'
import { Form } from 'components/Form'
 
// Hooks
import { useAPI, useInputChange } from 'hooks'

// Shared
import { brandList } from 'shared/constants'
import { Cars } from 'shared/interface'

const Edit: React.FC = () => {
  const { t } = useTranslation("Edit");

  const [ formData, setFormData ] = useState<Cars>({})
  const [ titleError, setTitleError ] = useState('')
  const [ priceError, setPriceError ] = useState('')
  const [ ageError, setAgeError ] = useState('')
  const [ brandError, setBrandError ] = useState('')
    
  const { handleInputChange } = useInputChange(setFormData)
  const { apiGetID, apiPut } = useAPI(setFormData)
  const location = useLocation()
    
  const { options } = brandList()

  const id = location.state

  useEffect(() => {
    apiGetID(String(id))
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, price, age, brand } = formData;
    
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
    else apiPut(formData)
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
          name="brand"  
          error={brandError}
          suggestions={options}
          value={formData.brand}
          label={t('Glossary:brand')}
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

export default Edit