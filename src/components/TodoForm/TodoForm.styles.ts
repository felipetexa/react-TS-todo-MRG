import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import AddTaskIcon from '@mui/icons-material/AddTask';


export const CustomAddIcon = muiStyled(AddTaskIcon)({
  fontSize: '5rem',
  color: '#D8D8D8'
})

export const InputTask = styled.input`
  border-radius: 3rem;
  border: 1px solid #d8d8d8;
  padding: 1rem 2rem;
  width: 70rem;
  font-size: 3rem;
  color: #d8d8d8;
  margin-right: 2rem;
  margin-bottom: 3rem;
  background: #072e61;
`


