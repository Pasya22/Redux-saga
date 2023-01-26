import React from 'react'


const ChildComponent = (props) => {
    return (
        <div>
            <h1>
                Quis Programming
            </h1>
            <p>What Programming For Build Cross-Platform App?</p>
            <button onClick={()=>props.OnQuis('react')}>React</button>
            <button onClick={()=>props.OnQuis('Pyhton')}>Python</button>
            <button onClick={()=>props.OnQuis('PHP')}>PHP</button>
            <h2>{props.youAnswer}</h2>
        </div>
    )
}



export default ChildComponent