import React from 'react'

// Native
import { Space, Button, Popconfirm, Tooltip } from 'antd'
import { useTranslation } from "react-i18next";

// Components
import { Name, Brand } from 'components/Text'

// Hooks
import { useActionItem, useMoneyFormat } from 'hooks'

// Shared
import { Cars } from 'shared/interface'

export default () => { 
  const { handleEdit, handleDelete } = useActionItem()
  const { handleMoneyFormat } = useMoneyFormat()
  const { t } = useTranslation();

  const columns = [
    { 
      title: t('name'),
      dataIndex: 'title',
      key: '_id',
      render: (text: string) => <Name>{text}</Name>,
    },
    {
      title: t('brand'),
      dataIndex: 'brand',
      key: '_id',
      render: (text: string) => <Brand>{text}</Brand>,
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
          <Tooltip title={t('tooltipEdit')}>
             <Button 
              type="link" 
              onClick={() => handleEdit(String(key._id))}>
              {t('Glossary:edit')}
            </Button>
          </Tooltip>
          
          <Tooltip title={t('tooltipDelete')}>
            <Popconfirm 
              title={t('messageSure')} 
              onConfirm={() => handleDelete(String(key._id))}
            > 
           
              <Button type="link" danger >
                {t('Glossary:delete')}
              </Button>
            </Popconfirm>
          </Tooltip>
          
        </Space>
      )
    }
  ];

  return { columns }
}