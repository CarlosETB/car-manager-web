import { ChangeEvent, useEffect, useState } from 'react'

export default (setData?: any) => {
 
    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
  
      setData((data: any) => { return { ...data, [name]: value } });
    }

    return {
        handleInputChange,
    }
}