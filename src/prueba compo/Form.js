import React, {useState, useEffect} from 'react'

const initialForm = {
    name:'',
    constellation: '',
    id: null
}

const Form = ({createData, updateData, dataToEdit, setDataToEdit}) =>{
    
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) =>{
        setForm({
                ...form,
                [e.target.name] : e.target.value 
            }
        )
    }

    const handleReset = () =>{
        setForm(initialForm)
        setDataToEdit(null)
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!form.name || !form.constellation){
            window.alert('Datos incompletos')
            return;
        }

        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }

    }
    return(
        <>
            <p>Agregar</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name= 'name' placeholder="Nombre" value={form.name} onChange={handleChange} ></input>
                <input type='text' name= 'constellation' placeholder='Constelacion' value={form.constellation} onChange= {handleChange}></input>
                <input type= 'submit' value= 'Enviar'/>
                <input type= 'reset' value= 'Limpiar' onReset={handleReset}/>
            </form>
        </>
    )
}

export default Form