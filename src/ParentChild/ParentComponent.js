import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent =()=>{
    const [message,setAnswer] = useState("")
    const setQuis =(quiz) =>{
        if (quiz === 'react') {
            setAnswer(`your answer ${quiz} is true`)
        }else{
            setAnswer(`your answer ${quiz} is false`)
        }
    }
    return (
        <div>
            <ChildComponent
            youAnswer = {message}
            OnQuis = {setQuis}
            />
        </div>
    )
}
export default ParentComponent