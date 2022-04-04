import React from 'react'

const TableRow = ({el, setDataToEdit, deleteData}) =>{
    let {name, constellation, id} = el
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                <td>
                    <button onClick={()=> setDataToEdit(id)}>Modificar</button>
                    <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </>
    )
}

export default TableRow