import React, { useEffect, useState, ChangeEvent } from 'react'

// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
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
  const { t } = useTranslation("Home");

  const [data, setData] = useState([])
  const [dataSource, setDataSource] = useState([])

  const { handleMoneyFormat } = useMoneyFormat()
  const history = useHistory();

  const columns = [
      { 
        title: t('name'),
        dataIndex: 'title',
        key: '_id',
        editable: true
      },
      {
        title: t('brand'),
        dataIndex: 'brand',
        key: '_id',
      },
      {
        title: t('price'),
        dataIndex: 'price',
        key: '_id',
        render: (text: string) => handleMoneyFormat(Number(text)),
      },
      {
        title: t('age'),
        dataIndex: 'age',
        key: '_id',
      },
      {
        title: t('action'),
        key: "_id",
        render: (key: Cars) => (
          <Space size="middle">
             <Button 
              type="link" 
              onClick={() => handleEdit(String(key._id))}>
              {t('edit')}
            </Button>

            <Button 
              type="link" 
              danger 
              onClick={() => handleDelete(String(key._id))}>
              {t('delete')}
            </Button>
          </Space>
        )
      }
  ];

  useEffect(() => {
    api.get('cars').then((response) => {
      if(response.status === 200){
        setData(response.data)
        setDataSource(response.data)
      } 
      else {
        alert(t('alertFail'))
      }
    });
  }, []);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    const filtered = data.filter((item: Cars) => { 
      return item.title?.toLowerCase().match( value.toLowerCase() )
    });
    setDataSource(filtered)
  }

  const handleEdit = async (id: string) => {
    history.push({
      pathname: '/editar',
      state: id
    })
  }

  const handleDelete = async (id: string) => {
    await api.delete(`cars/${id}`).then(() => {
      alert(t('alertSuccess'))
      window.location.reload()
    })
    .catch((e) => {
      alert(e)
    }) 
  }

  return (
    <PageDefault>
      <Title>{t('title')}:</Title>

      <InputSearch
        onChange={handleSearch}
        placeholder={t('placeholder')}
      />
       
      <Table 
        columns={columns} 
        dataSource={dataSource} 
      />

    </PageDefault>
  )
}

export default Home