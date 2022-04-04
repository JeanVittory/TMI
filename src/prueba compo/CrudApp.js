import React, {useState} from 'react';
import Form from './Form'
import Table from './Table';



const initialDb = [

    {
        id:1,
        name: 'Seiya',
        constellation: 'pegaso'
    },
    {
        id:2,
        name: 'Shiriyu',
        constellation: 'Dragón'
    },
    {
        id:3,
        name: 'Hyoga',
        constellation: 'Cisne'
    },
    {
        id:4,
        name: 'Shun',
        constellation: 'Andrómeda'
    },
    {
        id:5,
        name: 'Ikki',
        constellation: 'Fénix'
    }

];

const CrudApp = () =>{

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (form)=>{
        form.id = Date.now()
        setDb(
            [
                ...initialDb,
                form
            ]
        )
    }

    const updateData = (form) =>{
        let newData = db.map(el => el.id === form.id ? form:el)
        setDb(newData)
    }

    const deleteData = (id) =>{
        let isDelete = window.confirm(`¿Estas seguro de eliminar este dato?`)
        if(isDelete){
            let newData = db.filter(el => el.id !== id)
            setDb(newData)
        }else{
            return
        }
    }
    return(
        <>
            <h2>Crud App</h2>
            <Form createData = {createData} updateData={updateData} dataToEdit = {dataToEdit} setDataToEdit = {setDataToEdit}/>
            <Table db= {db} setDataToEdit = {setDataToEdit} deleteData = {deleteData}  />
        </>
    )
}

export default CrudApp