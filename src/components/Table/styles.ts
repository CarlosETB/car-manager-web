import { Table as  TableComponent} from 'antd'
import styled from "styled-components";

export const Table = styled(TableComponent).attrs({
  bordered: true,
  pagination: { pageSize: 5 }
})`
  width: 100%;
`;