import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

export const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  gap: 2rem;
  max-width: 80rem;
  width: 100%;
  padding-inline: 2rem;
  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }
`;

export const TitleFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 70rem;
  }
`;


export const CustomAddIcon = muiStyled(AddTaskIcon)({
  fontSize: '5rem',
  color: '#D8D8D8'
})

export const CustomFilterIcon = muiStyled(TuneOutlinedIcon)({
  fontSize: '3rem',
  color: '#D8D8D8'
})

export const InputTask = styled.input`
flex: 1;
  border-radius: 3rem;
  border: 1px solid #d8d8d8;
  padding: 1rem 2rem;
  width: 70rem;
  font-size: 3rem;
  color: #d8d8d8;
  margin-right: 2rem;
  background: #072e61;
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    width: 100%;
  }
`


