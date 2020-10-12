import React, { FormEvent, useEffect, useState } from 'react'

// Native
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import { Button } from '../../components/Button'
import { Title } from '../../components/Text'
import { Form } from '../../components/Form'
 
// Hooks
import { useAPI, useInputChange } from '../../hooks'

// Shared
import { brandList } from '../../shared/constants'
import { Cars } from '../../shared/interface'

const Edit = () => {
    const [ formData, setFormData ] = useState<Cars>({})
    const { apiGetID, apiPut } = useAPI(setFormData)
    const { handleInputChange } = useInputChange(setFormData)

    const { t } = useTranslation("Edit");
    
    const location = useLocation()

    const { options } = brandList()

    const idItem = location.state

    useEffect(() => {
      apiGetID(String(idItem))
    }, []);

    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
  
      const { title, price, age, brand } = formData;
  
      const data = new FormData();
      
      data.append("title", String(title));
      data.append("price", String(price));
      data.append("age", String(age));
      data.append("brand", String(brand));
  
      apiPut(formData)
    }

    return (
        <PageDefault>
            <Title>{t('title')}:</Title>

            <Form onSubmit={handleSubmit}>
                <FormField 
                  onChange={handleInputChange} 
                  name="title" 
                  label={t('Glossary:name')} 
                  value={formData.title}
                />  

                <FormField 
                  onChange={handleInputChange} 
                  name="price" 
                  label={t('Glossary:price')} 
                  type='number'
                  value={formData.price}
                />

                <FormField 
                  onChange={handleInputChange} 
                  name="brand" 
                  label={t('Glossary:brand')} 
                  suggestions={options}
                  value={formData.brand}
                />

                <FormField 
                  onChange={handleInputChange} 
                  name="age" 
                  label={t('Glossary:age')} 
                  min={1940}
                  max={2020}
                  value={formData.age}
                />    

                <Button type='submit'>{t('button')} </Button>
            </Form>
        </PageDefault>
    )
}

export default Edit