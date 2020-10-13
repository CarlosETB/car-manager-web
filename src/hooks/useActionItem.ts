// Native
import { useHistory } from "react-router-dom";

// Hooks
import { useAPI } from 'hooks'

export default () => {
    const history = useHistory();
    const { apiDelete } = useAPI()
  
    const handleEdit = async (id?: string) => {
      history.push({
        pathname: '/editar',
        state: id
      })
    }

    const handleDelete = async (id?: string) => {
      apiDelete(String(id))
    }

    return {
      handleEdit,
      handleDelete
    }
}