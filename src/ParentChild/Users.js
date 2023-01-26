import React, { useState } from 'react'
import ChildDataEmployee from './ChildDataEmployee'

const Users =(props)=>{
    const Employee = [
        {id:1, firstName: 'pasya', lastName: 'Sholeh', pekerjaan: 'Web Developer', status: 'Married' },
        {id:2, firstName: 'john', lastName: 'doe', pekerjaan: 'Web Developer', status: 'Married' },
        {id:3, firstName: 'jane', lastName: 'doe', pekerjaan: 'Designer', status: 'Single' }
    ]
      const [data] = useState(Employee)
    return (
        <div>
        {/* <button onClick={handleSort}>Sort</button> */}
        <ChildDataEmployee data={data} />
        </div>


    )
}
export default Users
