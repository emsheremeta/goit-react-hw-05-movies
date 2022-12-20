import styled from "styled-components";
import { Link } from "react-router-dom";

 export const Image = styled.img`
 position: relative;
 bottom: 40%;
 height: 50%;
 box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
 `
 export const Wrapper = styled.div` 
position: absolute;
width: 100%;
height: 100%;

 `;
 

 export const Title = styled.p`
 position: relative;
 padding: 25px;
 left: 35%;
 top: 5%;
 margin-bottom:20px;

 font-weight: bold;
 font-size: large;
 border-bottom: 1px solid black;
 width: 20%;
 font-family: inherit;


 `
 export const Score = styled.p`
position: relative;
      padding: 25px;
      left: 35%;
     
 `
 export const Article = styled.article`
 position: relative;
 left:350px;
 text-align: justify;
 width:50%;
 padding: 25px;


 `
 export const Genres = styled.p`
 position: relative;
 left: 5%;
 bottom: 45%;
 padding: 25px;
display: inline-block;

 `
 export const Button = styled(Link)`
 color: black;
 text-decoration : none;
 `
 export const Information  = styled.div`
 position: relative;
 bottom:40%;
 left:15px;
 `
 