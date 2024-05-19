function LoginValidacion(values){

    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\S@]+$/
    const password_pattern = /^(?=,*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email="Nombre no puede estar vacío"
    }
    else if(!email_pattern.test(values.email)){
        error.email ="El correo no coincide"
    }
    else{
        error.email=""
    }

    if(values.password ===""){
        error.password="La contraseña no debe estar vacía"
    } 
    else if(password_pattern.test(values.password)){
        error.password ="La contraseña no coincide"
    }
    else{
        error.password=""
    }
    return error;
}

export default LoginValidacion;

    