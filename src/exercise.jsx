import React, { useState } from "react";
import styled from 'styled-components';

const Exercise =()=>{
    const {dark,setDark}=useState(false)
    return( 
        <div>
            <Title>hello world</Title>

            <div> <Wrapper><h1>hello</h1> bhvdfgvdffghd <p>gvghcghcgh</p> <p moshecolor="yellow">moshe</p></Wrapper></div>
       
            <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>

    <hr></hr>
<Button onClick={()=>setDark(!dark)}>dark</Button>

        </div>
    )
}

const Title = styled.h1`
  font-size: 2.2em;
  text-align: start;
  color:#e61158;
  border-radius: 4px;
  border-color: #161414;
  border: 2px solid;
`;

const Wrapper= styled.div`
  display  :flex ;
align-items: center;
justify-content: center;
color: aliceblue;

h1{
    color: red;
}

p{
    color: green;
}
`;



const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;




export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  cursor: pointer;
`;



export default Exercise