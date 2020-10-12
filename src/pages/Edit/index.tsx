import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// Native
import { useHistory, useLocation } from "react-router-dom";

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

const Edit = (props: any) => {
    const [ formData, setFormData ] = useState<Cars>({})

    const history = useHistory();
    const location = useLocation()

    const id = location.state;

    const { options } = brandList()

    useEffect(() => {
      console.log('ID', id)
        api.get(`cars/${id}`).then((response) => {
          if(response.status === 200){
            setFormData(response.data)
          } 
          else {
            alert('Houve algum erro com o requerimento de dados')
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

        console.log(formData)
    
        await api.put(`cars/${id}`, formData).then(() => {
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
                  value={formData.title}
                />  

                <FormField 
                  onChange={handleInputChange} 
                  name="price" 
                  label='Preço' 
                  type='number'
                  value={formData.price}
                />

                <FormField 
                  onChange={handleInputChange} 
                  name="brand" 
                  label='Marca' 
                  suggestions={options}
                  value={formData.brand}
                />

                <FormField 
                  onChange={handleInputChange} 
                  name="age" 
                  label='Ano' 
                  min={1940}
                  max={2020}
                  value={formData.age}
                />    

                <Button type='submit'>Cadastrar</Button>
            </Form>
        </PageDefault>
    )
}

export default Edit