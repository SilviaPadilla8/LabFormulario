window.addEventListener('load', ()=> {
    const form = document.getElementById('form')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const pass2 = document.getElementById('pass2')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = ()=> {
        // capturar valores
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const pass2Valor = pass2.value.trim()

        //validacion nombre
        if(!nombreValor){
            validaError(nombre, 'Rellene este campo')
        }else if(!validaNombre(nombreValor)){
            validaError(nombre, 'Nombre inválido')
        }else{
            validaAcierto(nombre)
        }

        //validacion email
        if(!emailValor){
            validaError(email, 'Rellene este campo')
        }else if(!validaEmail(emailValor)){
            validaError(email, 'Email inválido')
        }else{
            validaAcierto(email)
        }

        if(!passValor){
            validaError(pass, 'Rellene este campo')
        }else if(passValor.length > 8){
            validaError(pass, 'No debe tener más de 8 caracteres')
        }else{
            validaAcierto(pass)
        }

        //confirmar password
        if(!pass2Valor){
            validaError(pass2, 'Rellene este campo')
        }else if(passValor !== pass2Valor){
            validaError(pass2, 'Las contraseñas no coinciden')
        }else{
            validaAcierto(pass2)
        }
    }

        //mensaje error más la clase
        const validaError = (input, msje) => {
        const gform = input.parentElement
        const aviso = gform.querySelector('p')
        aviso.innerText = msje

        gform.className = 'form-error'
    }

        //clase validacion
        const validaAcierto = (input, msje) => {
        const gform = input.parentElement
        gform.className = 'form-success'
    }

    const validaNombre = (nombre) => {
        return /^[a-zA-Z]{1,20}$/.test(nombre);
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})