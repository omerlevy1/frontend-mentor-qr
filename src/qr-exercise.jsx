import React from "react";
import styled from 'styled-components';
import image from "./image-qr-code.png"
const QrComponent= ()=>{
return(
    <div>
      <Wrapper>
<Wrapperr>
<Img src={image} alt="qr"  />
<Title>Improve your front-end<br/>skills by building projects</Title>
<P>Scan the QR code to visit frontend<br/>mentor and take your coding skills to<br/>the next level</P>
</Wrapperr>
        </Wrapper>  
    </div>
)
}



const Wrapper = styled.section`
  padding: 4em;
  background: hsl(212, 45%, 89%);
  width: 1152.1px;
  height: 473px;
  display: flex;
  justify-content: center;
`;


const Wrapperr = styled.section`
  font-size: 2.2em;
  text-align: start;
  background-color: hsl(0, 0%, 100%);
 width: 192px;
 height: 320px;
 border-radius: 6%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Img = styled.img`
  border-radius: 4%;
  width:170px ;
  height:170px;
`;

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
  color: hsl(218, 44%, 22%);
  font-weight:700;
  font-family: 'Outfit', sans-serif;
`;

const P =styled.p`
    font-size: 10px;
    font-weight:400;
    font-family: 'Outfit', sans-serif;
    text-align: center;
    color: hsl(220, 15%, 55%);
`

export default QrComponent