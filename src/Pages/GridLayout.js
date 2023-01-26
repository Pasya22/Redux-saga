import React from "react"
import styled from "styled-components"
// import style from "styled-components"

// const Grid1 = styled.div`
// display : grid;
// grid-teamplate-column :200px 200px 200px;

// `
const Grid2 = styled.div`
display : grid;
grid-teamplate-areas:
"header header header"
"aside main main"
"footer footer footer"
"me me me";

`

const GridLayout =()=>
{
    return(
       <Grid2>
        <div style={{gridArea:"header",background:'blue'}}> 
        <div style={{ color:'white'}}>
            Header
        </div>
        </div>
        <div style={{gridArea:"aside",background:'green'}}> 
        <div style={{color:'black'}}>
            SideBar
        </div>
        </div>
        <div style={{gridArea:"main",background:'black'}}> 
        <div style={{color:'white'}}>
            Main
        </div>
        </div>
        <div style={{gridArea:"footer",background:'purple'}}> 
        <div style={{color:'white'}}>
            Footer
        </div>
        </div>
        <div style={{gridRowStart:4,gridColumnStart:2,gridColumnEnd:4,background:'orange'}}> 
        <div style={{color:'white'}}>
            Footer
        </div>
        </div>
       </Grid2>
    )
}
export default GridLayout