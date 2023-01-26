import React, { useState } from 'react'
import KirimNamaChild from './KirimNamaChild'
const KirimDataNama = (props)=>{
    const[data,setFM]=useState({
        firstName:'pasya',
        lastname:'winda'
    })
return(
    <div>
        <KirimNamaChild data={data}/>
    </div>
)
}

export default KirimDataNama