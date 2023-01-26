import React from 'react'
import styled from 'styled-components'

const NavigatorBar = styled.div`
    .logo {
    max-width: 30px;
    padding: 1px;
  }

  position: sticky;
  top: 0;
  z-index: 1000;
  height: 48px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e0e5eb;
  box-shadow: 0px 1px 5px #223055;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input#navToggle {
    display: none;
  }

  input#navToggle ~ label {
    position: relative;
    padding: 0.25rem;
    width: 2rem;
    height: 1.25rem;
    height: 2rem;
  }

  input#navToggle ~ label > span,
  input#navToggle ~ label > span::before,
  input#navToggle ~ label > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 0.75rem;
    height: 0.125rem;
    width: 1.75rem;
    opacity: 1;
    background: #212f54;
    transition: 0.45 ease-in-out;
  }

  input#navToggle ~ label > span::before {
    top: -0.5rem;
  }

  input#navToggle ~ label > span::after {
    top: 0.5rem;
  }

  #navToggle:checked ~ label > span {
    width: 0;
    background: rgba(18, 18, 18, 0);
  }

  #navToggle:checked ~ label > span::before {
    transform: rotateZ(45deg);
    top: 0;
  }

  #navToggle:checked ~ label > span::after {
    transform: rotateZ(-45deg);
    top: 0;
  }

  #navToggle:checked ~ nav {
    left: 0;
  }

  nav {
    position: absolute;
    z-index: -1;
    top: 3rem;
    left: -110%;
    width: 100%;
    transition: 0.22s ease-in-out;
  }

  nav::after {
    content: "";
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100vh;
    width: 95vw;
    background-color: #fff;
    background-size: cover;
  }

  nav ul {
    list-style-type: none;
  }

  nav ul li a {
    display: inline-block;
    text-decoration: none;
    width: 100%;
    padding: 0.75rem 1rem;
    color: #212f54;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    transition: 0.22s ease-in-out;
  }

  nav ul li a:hover {
    color: #36bae6;
    background: #e0e5eb;
  }

  nav ul li:last-of-type::before {
    content: "";
    display: block;
    padding: .5rem;
  }

  nav .btn{
    background: #fff;
    border-bottom: none;
    border-radius: 4px;
    box-shadow: inset 0 0 5px #eeb80c;
    color: #223054;
    width: 40%;
    padding: 0.25rem .6rem;
    letter-spacing: 1px;
    text-shadow: 0 0 1px rgb(19, 177, 231);
    text-align: center;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  nav .btn:hover{
    background-color: #223054;
    box-shadow: inset 0 0 5px #13b1e7;
    color: #fff;
  }

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 100px minmax(auto, 1100px);
    justify-content: center;
    height: auto;

    .navToggleLabel{
        display: none;
    }

    nav{
        position: initial;
    }

    nav ul{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav ul li a{
        border-bottom: none;
    }

    nav ul li a:hover{
        background: transparent;
    }

    nav::after, nav ul li:last-of-type::before{
        display: none;
        padding : initial;
    }

    nav .btn{
        width: auto;
        background: #13b1e7;
        color: #fff;
        letter-spacing: normal;
        text-shadow: none;
        box-shadow: none;
    }

    nav .btn:hover{
        box-shadow: inset 0 0 5px #13b1e7;
        background-color: #223054;
    }

  }


`

export default function NavBars() {
  return (
    <NavigatorBar>
      <img src='./logo192.png' className='logo' />
      <input type="checkbox" id='navToggle' className='navToggle' />
            <label for="navToggle" className='navToggleLabel'><span></span></label>           
        <nav>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#signin' className='btn'>Signin</a>
                </li>
            </ul>
        </nav>
    </NavigatorBar>
  )
}
