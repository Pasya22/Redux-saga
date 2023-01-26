import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Hero = styled.div`
    background: url("./strom.gif") no-repeat center right;

    background-size: cover;
    color: #fff;
    font-size : 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows : .5fr 1fr 20px;
    grid-gap: 20px;

    img{
        margin:auto;
        padding-top: 1rem;
        grid-column: 2/3;
        grid-row: 1/2;
        height: 165px;
    }

    article{
      grid-column: 2/3;
      grid-row: 2/3;
    }
    button {
        background-color: #fff;
        border-radius: 4px;
        border: #fff;
        color: #2abadf;
        font-size: 1rem;
        padding: 5px 10px;
        margin: 0.75rem auto 0;
        cursor: pointer;
      }
`
export default function Headers(){
    return (
        <Hero>
            
        {/* <h2>Rineghan</h2> */}
        {/* <p>Shinrai Tensei Jutshu</p> */}
        <img src="./zyro-image.png"/>
        <article>
        <h2>Welcome to Rineghan</h2>
        <p>Make your life easir, just stay Akatshuki, pick your Styles in The world.</p>
        <button type="button"> Getting started <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
      </article>
        </Hero>
    )
}