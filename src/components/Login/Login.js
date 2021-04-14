import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormAction from '../Forms/FormAction';
import FormField from "../Forms/FormField";

function Login(){
    
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        usernameError : "",
        passwordError : ""
    });
    

    const myOnChange = function(e){
        const{ name, value } = e.currentTarget;
        let error = null;
        if(name==="password"){
            error = (/^(?=.*\d)(?=.* A-Z)(?=.* a-z)(?=.* ^\w\d\s:)(^\s){8,32}$/).test(value) ? null : "Contrasena Invalida";
        }

        setFormData({...formData, [name]:value, [name + "Error"]: error});
    }

    return(
        <Form>
            <FormField type="text" id="username" fname="username" onChange={myOnChange} caption="Correo Electronico: " value={formData.username} error={formData.usernameError} placeholder="Tu correo"></FormField>
            <FormField type="password" id="password" fname="password" onChange={myOnChange} caption="Contraseña: " value={formData.password} error={formData.passwordError} placeholder="Tu contrasena"></FormField>
            <FormAction 
             caption="Enviar"
             onClick={
                (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                const { username, password} = formData;
                alert(`Usuario:${username} Psswd:${password}`);
                }
            }></FormAction>
        </Form>
        
    );
}

export default Login;