import React, { useEffect, useState } from 'react'

// Native
import { useTranslation } from "react-i18next"
 
// Components
import { InputSearch } from '../../components/TextInput'
import PageDefault from '../../components/PageDefault'
import { Table } from '../../components/Table'
import { Title } from '../../components/Text'

// Hooks
import {  useAPI, useInputChange } from '../../hooks'

// Shared
import { columnList } from '../../shared/constants'

const Home = () => {
  const { t } = useTranslation("Home");

  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)
  const { columns } = columnList()

  const { apiGet } = useAPI(setDataSource)
  const { handleSearchChange } = useInputChange(setDataSource)

  const isLoading = Boolean(dataSource.length > 0)

  useEffect(() => {
    apiGet()
    setLoading(isLoading)
  }, []);

  return (
    <PageDefault>
      <Title>{t('title')}:</Title>

      <InputSearch
        onChange={handleSearchChange}
        placeholder={t('placeholder')}
      />
       
      <Table
        loading={loading}       
        columns={columns} 
        dataSource={dataSource} 
      />
    </PageDefault>
  )
}

export default Home