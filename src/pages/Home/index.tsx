import React, {useEffect, useState} from 'react'

// Native
import { Table, Space } from 'antd'

// Components
import PageDefault from '../../components/PageDefault'
import { Title } from '../../components/Text'

// Hooks
import { useMoneyFormat } from '../../hooks'

// Services
import api from "../../services/api";

const Home = () => {
    const [data, setData] = useState([])

    const { handleMoneyFormat } = useMoneyFormat()

    const columns = [
      {
        title: 'Nome',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Marca',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (text: string) => handleMoneyFormat(Number(text)),
      },
      {
        title: 'Ano',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: "Action",
        key: "action",
        render: () => (
          <Space size="middle">
            <a>Editar</a>
            <a>Deletar</a>
          </Space>
        )
      }
    ];

    useEffect(() => {
        api.get(`/cars`).then((response) => {
          response.status === 200 && setData(response.data);
        });
    }, []);

    return (
      <PageDefault>
        <Title>Lista de veículos:</Title>
        <Table columns={columns} dataSource={data} bordered />
      </PageDefault>
    )
}

export default Home