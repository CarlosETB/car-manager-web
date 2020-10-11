import React, { useEffect, useState, ChangeEvent } from 'react'

// Native
import { Space, Input } from 'antd'

// Components
import { InputSearch } from '../../components/TextInput'
import PageDefault from '../../components/PageDefault'
import { Table } from '../../components/Table'
import { Title } from '../../components/Text'

// Hooks
import { useMoneyFormat } from '../../hooks'

// Services
import api from "../../services/api";

// Shared
import { Cars } from '../../shared/interface'

const Home = () => {
    const { Search } = Input;
    const [data, setData] = useState([])
    const [dataSource, setDataSource] = useState([])

    const { handleMoneyFormat } = useMoneyFormat()

    const columns = [
      {
        title: 'Nome',
        dataIndex: 'title',
        key: 'id',
      },
      {
        title: 'Marca',
        dataIndex: 'brand',
        key: 'id',
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'id',
        render: (text: string) => handleMoneyFormat(Number(text)),
      },
      {
        title: 'Ano',
        dataIndex: 'age',
        key: 'id',
      },
      {
        title: "Action",
        dataIndex: 'action',
        key: "id",
        render: () => (
          <Space size="middle">
            <a>Editar</a>
            <a>Deletar</a>
          </Space>
        )
      }
    ];

    const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
    
      const filtered = data.filter((item: Cars) => { 
        return item.title?.toLowerCase().match( value.toLowerCase() )
      });

      setDataSource(filtered)
    }

    useEffect(() => {
      try {
        api.get('cars').then((response) => {
          if(response.status === 200){
            setData(response.data) 
            setDataSource(response.data) 
          } 
          else {
            alert('Houve algum erro com o requerimento de dados')
          }
        });
      } catch (e) {
        console.log(e)
      }
        
    }, []);

    return (
      <PageDefault>
        <Title>Lista de veículos:</Title>
        
        <InputSearch
          onChange={handleSearch}
          placeholder="Pesquisar carro"
        />
         
        <Table 
          columns={columns} 
          dataSource={dataSource} 
        />
      </PageDefault>
    )
}

export default Home