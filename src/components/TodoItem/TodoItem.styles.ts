import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export const TodoItemContainer = styled.div`
   margin-bottom: 2rem;
   padding-left: 1rem;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 2rem;
   width: 80rem;
   overflow: hidden;

   @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 37.5rem;
    gap: 0rem;
    padding-left: 0rem;
  }
 `;

export const EditingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  flex-grow: 1; 
  max-width: 100%; 

  @media screen and (max-width: 900px) {
    width: 15%; 
  }
`

export const CustomInput = styled.input`
border-radius: 3rem;
border: 1px solid #d8d8d8;
padding: 1rem 2rem;
flex-grow: 1;
width: 50rem;
font-size: 2rem;
color: #d8d8d8;
margin-right: 6rem;
background: #072e61;
@media screen and (max-width: 900px) {
    width: 10%; 
    margin-right: 0;
    margin-bottom: 1rem; 
  }
`

export const TodoItemText = styled.span`
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
  flex-grow: 1;
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