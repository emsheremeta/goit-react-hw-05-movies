
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
width: 100%;
heigth:50%;

`;

export const Header = styled.header`


 height:100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding: 8px 0;
  margin-bottom: 16px;
  

 
  
  `;
  export const Logo = styled.span`
  
  font-weight: 700;
  margin-left: 5px;
`;
export const Link = styled(NavLink)`
font-family: 'Brush Script MT', cursive;
  padding: 15px 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 40px;
  margin-right:10px;

  &.active {
    color: white;
    background-color: orangered;
    border-radius:15px;
  }
`;
export const Title = styled.span`
font-family: 'Brush Script MT', cursive;
font-weight: bold;
font-size: 50px;
padding: 15px 15px;
`;