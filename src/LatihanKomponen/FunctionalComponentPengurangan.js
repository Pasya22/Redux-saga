import React, { useState } from 'react'

export default function Pengurangan() {
    // const [count,set]=useState(0)
    // let increment =()=>{
    //     set(count+1)
    // }
    // let dicrement =()=>{
    //     set(count-1)
    // }
        const [input1, setInput1] = useState(0);
        const [input2, setInput2] = useState(0);
        const [result, setResult] = useState(0);
    function Pengurangan() {
        const result = parseInt(input1 - input2);
        setResult(result);
    }
   
    
    return (
        <div className='style'>
            <h2>Pengurangan</h2>
            <div className=''>
            <input type="number"  name="name1"  id='input1' onChange={(e) => setInput1(parseInt( e.target.value))} placeholder='Masukan Angka' />
            &nbsp; - &nbsp; 
            <input type="number" name="name2"  id='input2' onChange={(e) => setInput2(parseInt(e.target.value))} placeholder='Masukan Angka'/>
            </div>
            <div className='mt-3'>
            <button type='button' onClick={Pengurangan} className='btn btn-outline-primary btn-lg'>Jumlahkan</button>
            </div>
            <br></br>
            {/* <h3>Hasil:{result}</h3> */}
            <div className=''>
            <input type="number" name="name3"  id='input2'value={result} placeholder='Masukan Angka'/>
            </div>
        </div>
    )
}
