import { useState } from 'react';
import '../App.css'

const Input = (props) =>{

    const {label, errorMessage, onChange, id, ...inputsProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = () =>{
        setFocused(true);
    }
    return(
        <div className = {`formInput ${inputsProps.divition && 'mb-4 border-b py-4'}`}>
            <label className='italic text-xs'>{label}</label>
            <input className='inputs-form' onChange={onChange} {...inputsProps} onFocus={() => inputsProps.name === "phone" && setFocused(true)} onBlur={handleFocus} focused = {focused.toString()}/>
            <span className='errorMessage'>{errorMessage}</span>
        </div>
    )
};

export default Input;