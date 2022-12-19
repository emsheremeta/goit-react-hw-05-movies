import styled from "styled-components";
import { Link,NavLink } from "react-router-dom";

 export const Image = styled.img`
position: relative;
top: -200px;
right: 10px;
transform: translate(10px, 10px);
 `
 export const Wrapper = styled.div`
 position: absolute;
 justify-content:center;
 margin:0 auto;
 `;

 export const Title = styled.p`

 position: relative;
 left: 350px;
 bottom: -25px;
 font-weight: bolder;
 font-size: large;
 border-bottom: 1px solid black;
 width: 20%;
 font-family: inherit;

 `
 export const Score = styled.p`

 position: relative;
 left: 350px;
 bottom: -25px;

 `
 export const Article = styled.article`
 position: relative;
 left:350px;
 bottom: -25px;
 text-align: justify;
 width:40%;


 `
 export const Genres = styled.p`
 position: relative;
 left: 350px;
 bottom:425px;
 `
 export const Button = styled(Link)`
 color: black;
 text-decoration : none;
 `
 export const Information  = styled.div`
 position: relative;
 bottom:215px;
 left:15px;
 `
 