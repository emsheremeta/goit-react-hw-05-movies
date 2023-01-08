import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Input = styled.input`
border-radius: 50px;
padding: 10px 15px;
width: 300px;
outline: lightcoral;
`;

export const Button = styled.input`
 color:black;
 border-radius: 50px;
padding: 10px 15px;
`;
export const List =styled.li`
color: black;
text-decoration: none;


 &.active {
       color: white;
       
     }

`
export const Wrap = styled.div`
position: absolute;
left: 40%;
transform: translate(-50px, 50px);
`;
export const Movies = styled(NavLink)`
color:white;
text-decoration: none;
font-size: 20px;
`;