import { useState } from 'react';
import '../App.css'

const Input = (props) =>{

    const {label, errorMessage, onChange, id, ...inputsProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () =>{
        setFocused(true);
    }
    return(
        <div className = 'formInput'>
            <label htmlFor="">{label}</label>
            <input className='inputs-form' onChange={onChange} {...inputsProps} onFocus={() => inputsProps.name === "confirmPassword" && setFocused(true)} onBlur={handleFocus} focused = {focused.toString()}/>
            <span className='errorMessage'>{errorMessage}</span>
        </div>
    )
};

export default Input;