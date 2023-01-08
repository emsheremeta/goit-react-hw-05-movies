import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TrendingMovies = styled.div`
color:black;
font-family: 'Brush Script MT', cursive;
font-weight: bold;
font-size: 40px;
margin-bottom:20px;

`;

export const Wrapper = styled.div`
    position: absolute;
    left: 45%;
    transform: translate(-50px, 50px);


`;
export const Link = styled(NavLink)`
color:white;
text-decoration: none;
font-size: 20px;
`;