const Login = () => {
}

function enviarFormulario (e) {
    e.proventDefault();
    let email = formElement.usuario.value;
    let password = formElement.contraseña.value;

    iniciarSesion(email, password);
}

async function iniciarSesion(nombre,password){
    let respuesta = await new SesionDAO().iniciarSesion(nombre,password);
    if(respuesta.estado){
        let respuesta = await new SesionDAO().iniciarSesion(nombre,password);
        console.log(respuesta);
    }else{
        alert(respuesta.mensaje);
    }
    
}

    return (
        <form class="login" id="login">
        <img src="../../../assets/Logo/RedVerdeClaro.png" alt="Logo">
        <h2>LOGIN</h2>
        <input type="text" name="usuario"  placeholder="Nombre">
        <input type="password" name="contraseña" placeholder="Contraseña">
        <input type="submit" class="btn" value="INICIAR SECION">
        <a href="../Registro/registro.html" class="button">REGISTRO</a>
        </form>
    );

export default Login;