import styled from "styled-components";


export const Input = styled.input`
  padding: 5px 30px 5px 5px;
  border-radius: 4px;
  font: inherit;
`;
 export const Button =styled.button`
 color: orangered;
 font-size:inherit;
 margin: 5px;
 padding:5px 30px 5px ;
 border: 2px solid orangered;
 border-radius: 4px;
 `
 export const List =styled.li`
 color: black;
 font-size:inherit;
 text-decoration: none;
 font-weight: inherit;
 
  &.active {
        color: white;
        background-color: orangered;
      }

 `