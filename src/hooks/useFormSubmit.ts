import { FormEvent, useState } from 'react'

// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default (formData?: any, apiAction?: any) => {
  const { t } = useTranslation("");
  const history = useHistory();

  const [ titleError, setTitleError ] = useState('')
  const [ priceError, setPriceError ] = useState('')
  const [ ageError, setAgeError ] = useState('')
  const [ brandError, setBrandError ] = useState('')

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
    else {
      apiAction(formData)
      history.push("/");
    }
  }

  return {
    handleSubmit,
    titleError,
    priceError,
    ageError,
    brandError
  }
  
}