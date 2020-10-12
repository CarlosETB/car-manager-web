import { ChangeEvent, useEffect, useState } from 'react'

// Services
import api from "../services/api";

// Shared
import { Cars } from '../shared/interface'

export default (setData: any) => {
    const [apiItem, setApiItem] = useState([])

    useEffect(() => {
        api.get('cars').then((response) => {
          if(response.status === 200){
            setApiItem(response.data)
          } 
        }).catch((e) => alert(e))
      }, []);

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setData((data: any) => { return { ...data, [name]: value } });
    }

    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
      
        const filtered = apiItem.filter((item: Cars) => { 
          return item.title?.toLowerCase().match( value.toLowerCase() )
        });

        setData(filtered)
    }

    return {
        handleInputChange,
        handleSearchChange,
    }
}