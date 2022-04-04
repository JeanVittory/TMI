import React from 'react'
import TableRow from './TableRow'

const Table = ({db, setDataToEdit, deleteData}) =>{
    return(
        <>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Constelacion
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {db.length === 0 ? 'No hay datos para mostrar': db.map(el => <TableRow key = {el.id} el = {el} setDataToEdit = {setDataToEdit} deleteData= {deleteData} />)}
                </tbody>
            </table>
        </>
    )
}

export default Table;