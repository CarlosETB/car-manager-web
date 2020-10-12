import React, { useEffect, useState, ChangeEvent } from 'react'

// Native
import { Space, Button } from 'antd'

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
  
  const [data, setData] = useState([])
  const [dataSource, setDataSource] = useState([])

  const { handleMoneyFormat } = useMoneyFormat()

  const columns = [
      {
        title: 'Nome',
        dataIndex: 'title',
        key: '_id',
        editable: true
      },
      {
        title: 'Marca',
        dataIndex: 'brand',
        key: '_id',
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: '_id',
        render: (text: string) => handleMoneyFormat(Number(text)),
      },
      {
        title: 'Ano',
        dataIndex: 'age',
        key: '_id',
      },
      {
        title: "Ações",
        key: "_id",
        render: (key: Cars) => (
          <Space size="middle">
            <Button 
              type="link" 
              danger 
              onClick={() => handleDelete(String(key._id))}>
              Deletar
            </Button>
          </Space>
        )
      }
  ];

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

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    const filtered = data.filter((item: Cars) => { 
      return item.title?.toLowerCase().match( value.toLowerCase() )
    });
    setDataSource(filtered)
  }

  const handleDelete = async (id: string) => {
    await api.delete(`cars/${id}`).then(() => {
      alert('Veículo deletado com sucesso')
      window.location.reload()
    })
    .catch((e) => {
      alert(e)
    }) 
  }

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