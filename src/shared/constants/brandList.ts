import { useState } from 'react'

// Hooks
import { useAPI } from 'hooks'

export default () => {
    const [ data, setData ] = useState([])
    const { apiGet } = useAPI(setData)

    apiGet()

    const itemBrand = data.map(({ brand }) => String(brand).toUpperCase())
    

    const options = itemBrand.filter(function(index, id) {
      return itemBrand.indexOf(index) === id;
    });

    return { options }
}