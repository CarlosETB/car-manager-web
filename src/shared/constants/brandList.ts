import { useState } from 'react'

// Services
import api from "../../services/api";

export default () => {
    const [ data, setData ] = useState([])

    api.get('cars').then((response) => {
        if(response.status === 200){
          setData(response.data)
        } 
        else {
          alert('Houve algum erro com o requerimento de dados')
        }
    });

    const itemBrand = data.map(({ brand }) => brand)

    const options = itemBrand.filter(function(index, id) {
      return itemBrand.indexOf(index) === id;
    });

    return { options }
}