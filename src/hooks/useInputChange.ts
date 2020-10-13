import { ChangeEvent, useEffect, useState } from 'react'

// Hooks
import { useAPI } from 'hooks'

// Shared
import { Cars } from 'shared/interface'

export default (setData?: any) => {
    const [apiItem, setApiItem] = useState([])
    const { apiGet } = useAPI(setApiItem)

    useEffect(() => {
      apiGet()
    }, [apiGet]);

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