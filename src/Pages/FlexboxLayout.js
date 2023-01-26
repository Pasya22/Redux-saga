import React from 'react';
import styled from 'styled-components';

const FlexLayout = styled.div`
        display:flex; 
        gap :100vh;
        flex-direction:column;

        header{
            background-color :white;
            font-size:3em;
            text-align:center;
        }
        main{
            dsiplay:flex;
            flex-direction:column;
            flex:1;
        }
        main article{
            background-color :blue;
            flex:1;
        }
        main aside{
            background-color :pink;
            flex:1;
        }
        footer{
            background-color :red;
            text-align:center;
        }

        @media(min-width:760px){
            main{
                display:80%;
                margin:0 auto;
                flex-direction:row;
            }
            main aside {
                flex:0 0 20%;
            }
            leftSideBar{
                orders:-1;
            }
        }
        ;`


export default function FlexBoxLayot()
{
    return(
       <FlexLayout>
        <header>Header</header>
            <main>
               <article>main</article>
                <aside >Right SideBar</aside>
                <aside className='leftSideBar'>Left Sidear</aside>
            </main>
                <footer>footer</footer> 
       </FlexLayout>
    )
}