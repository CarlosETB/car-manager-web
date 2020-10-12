import { Table as  TableComponent} from 'antd'
import styled from "styled-components";

export const Table = styled(TableComponent).attrs({
  bordered: true,
  tableLayout: 'fixed',
  pagination: { pageSize: 5 }
})`
  flex: 1;
  width: 100%;
  display: flex;
`;