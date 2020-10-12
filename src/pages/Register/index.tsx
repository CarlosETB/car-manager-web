import React, { useState } from 'react'

// Native
import { useTranslation } from "react-i18next";

// Components
import PageDefault from 'components/PageDefault'
import FormField from 'components/FormField'
import { Button } from 'components/Button'
import { Title } from 'components/Text'
import { Form } from 'components/Form'

// Hooks
import { useInputChange, useFormSubmit } from 'hooks'

// Shared 
import { brandList } from 'shared/constants'
import { Cars } from 'shared/interface'

// Hooks
import { useAPI } from 'hooks'
 
const Register: React.FC  = () => {
  const { t } = useTranslation("Register");

  const [ formData, setFormData ] = useState<Cars>({})
  const { handleInputChange } = useInputChange(setFormData)
  const { apiPost } = useAPI(setFormData)
  const { 
    handleSubmit, 
    ageError, 
    brandError, 
    priceError, 
    titleError 
  } = useFormSubmit(formData, apiPost)
   
  const { options } = brandList()

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

export default Register