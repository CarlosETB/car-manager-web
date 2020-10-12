// Native
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// Services
import api from "../services/api";

export default () => {
    const history = useHistory();
    const { t } = useTranslation("");
  

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

    return {
        handleEdit,
        handleDelete
    }
}