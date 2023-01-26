import React, { useState } from 'react'

const KirimNamaChild = (props)=>
{
    return(
        <div>
            <h2>Employee is : {props.data.firstName}</h2>
            <h2>Employee is : {props.data.lastname}</h2>
        </div>
    )

}
export default KirimNamaChild