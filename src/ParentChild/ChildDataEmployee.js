import React from 'react'
// import Search from 'react-search-input'
// import DataTable from 'react-data-table-component'
const  ChildDataEmployee =(props)=>{
    return(
        <div>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Data Employee</h5>
                <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastname</th>
                    <th scope="col">pekerjaan</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                {


<tbody>
{
    props.data.map((key) => {
    return(
            <tr>
                <th scope="row">{key.id}</th>
                <td>{key.firstName} </td>
                <td>{key.lastName}</td>
                <td>{key.pekerjaan}</td>
                <td>{key.status}</td>
            </tr>
    )
    })
}
</tbody>

}

</table>
                </div>
                </div>
                </div>

)

 }     


    

export default ChildDataEmployee
