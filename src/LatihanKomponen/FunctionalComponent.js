import React, { useState } from 'react'

export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    const [operatorChecked, setOperatorChecked] = useState(false);
    const [operator, setOperator] = useState('');

    function hitung() {
        let hasil;
        if(operator === '+') {
            hasil = input1 + input2;
        } else if(operator === '-') {
            hasil = input1 - input2;
        } else if(operator === '*') {
            hasil = input1 * input2;
        } else if(operator === '/') {
            hasil = input1 / input2;
        }
        setResult(hasil);
    }

    
    const checkOperator =()=>{
        setOperatorChecked(true);
    }
   
    return (
        <div className='style'>
            <h2>Calculator</h2>
            <div className=''>
            <input type="number"  name="input1"  id='input1' onChange={(e) => setInput1(parseInt( e.target.value))} placeholder='Masukan Angka' />
            <input type="number" name="input2"  id='input2' onChange={(e) => setInput2(parseInt(e.target.value))} placeholder='Masukan Angka' />
            <br></br>
            <br></br>
            <button onClick={() => setOperator('+')} className='btn btn-outline-success' onBlur={checkOperator}>+</button>&nbsp;
            <button onClick={() => setOperator('-')} className='btn btn-outline-danger' onBlur={checkOperator}>-</button>&nbsp;
            <button onClick={() => setOperator('*')} className='btn btn-outline-info' onBlur={checkOperator}>*</button>&nbsp;
            <button onClick={() => setOperator('/')} className='btn btn-outline-warning' onBlur={checkOperator}>/</button>&nbsp;
            {/* <br></br> */}
            </div>
            <div className='mt-3'>
                    
            {operatorChecked && operator !==''? 
                <button type='button' onClick={hitung} className='btn btn-outline-primary btn-lg'>hitung</button>
                : 
                <p>Silahkan pilih operator dan isi kedua input field</p>
            }
            </div>
            <br></br>
            <div className=''>
            <input type="number" name="result"  id='result'value={result} placeholder='Hasil' readonly/>
            </div>
        </div>
    )
}
