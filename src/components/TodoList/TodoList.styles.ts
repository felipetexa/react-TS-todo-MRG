import styled from "styled-components";

export const TodoListContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   gap: 2rem;
   width: 100%;
   max-width: 80rem;
   @media screen and (max-width: 600px) {
    max-width: 90%;
  }
 `;