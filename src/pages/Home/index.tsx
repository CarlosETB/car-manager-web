import React, {useEffect, useState} from 'react'
import api from "../../services/api";
import { Table } from 'antd'

import {Container } from './styles'

const Home = () => {
    const [data, setData ] = useState([])

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
      },
      {
        title: 'Ano',
        dataIndex: 'age',
        key: 'age',
      },
    ];

    useEffect(() => {
        api.get(`/cars`).then((response) => {
          setData(response.data);
        });
    }, []);

    return (
      <Container>Home:
        <Table columns={columns} dataSource={data} />
      </Container>
    )
}

export default Home