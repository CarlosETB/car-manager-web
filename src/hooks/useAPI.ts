// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// Services
import api from "../services/api";

// Shared
import { Cars } from '../shared/interface'

export default (setData: any) => {
    const { t } = useTranslation("");
    const history = useHistory();

    const apiGet = async () => {
      await api.get('cars').then((response) => {
        if(response.status === 200) {
          return setData(response.data)
        } 
      }).catch((e) => alert(e))
    }

    const apiGetID = async (id: string) => {
      await api.get(`cars/${id}`)
        .then((response) => {
          if(response.status === 200) {
            return setData(response.data)
          } 
          else alert(t('Glossary:alertFail'))
        })
        .catch((e) => alert(e));
    }

    const apiPut = async (formData: Cars) => {
      await api.put(`cars/${formData._id}`, formData)
        .then(() => {
          alert(t('Glossary:alertSuccess'))
          history.push('/')
        })
        .catch((e) =>  alert(e)) 
    }

    const apiPost = async (formData: Cars) => {
      await api.post('cars', formData)
      .then(() => {
        alert(t('Glossary:alertSuccess'))
        history.push('/')
      })
      .catch((e) => alert(e))
    }
  
    return {
      apiGet,
      apiGetID,
      apiPost,
      apiPut
    }
}