import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export const TodoItemContainer = styled.div`
   margin-bottom: 2rem;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
   gap: 2rem;
   width: 80rem;
   overflow: hidden;
 `;

export const EditingContainer = styled.div`
  display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

export const CustomInput = styled.input`
border-radius: 3rem;
border: 1px solid #d8d8d8;
padding: 1rem 2rem;
width: 50rem;
font-size: 2rem;
color: #d8d8d8;
margin-right: 6rem;
background: #072e61;
`

export const TodoItemText = styled.span`
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
`;

 export const CustomDeleteOutlineIcon = muiStyled(DeleteOutlineIcon)({
  fontSize: '3rem',
  color: '#D8D8D8'
})

 export const CustomDriveFileRenameOutlineIcon = muiStyled(DriveFileRenameOutlineIcon)({
  fontSize: '3rem',
  color: '#D8D8D8'
})

export const CustomSaveOutlinedIcon = muiStyled(SaveOutlinedIcon)({
  fontSize: '3rem',
  color: '#D8D8D8'
})