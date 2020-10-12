import { Input } from 'antd'
import styled from "styled-components";

const { Search } = Input;

export const InputSearch = styled(Search).attrs({
    size: 'large',
    enterButton: true
})`
    width: 100%;
    margin-bottom: 5px;
`;

