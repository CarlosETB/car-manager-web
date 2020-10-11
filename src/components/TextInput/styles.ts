import styled from "styled-components";
import { Input as InputComponent} from 'antd'

const { Search } = InputComponent;

export const InputSearch = styled(Search).attrs({
    size: 'large'
})`
    width: 100%;
`;

export const Input = styled(InputComponent).attrs({
    size: 'large'
})`
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--blackLighter);
`;