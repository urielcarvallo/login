var btn = document.getElementById('ingresar');
var clave = document.getElementById('password');
var usuario = document.getElementById('user');


btn.addEventListener('click', function(evt){
    if(clave.value === '' || usuario.value === ''){
        alert('Ingrese los valores correspondientes')
        evt.preventDefault();
        return false;
    }else{
        validar(usuario);
    }  
});

function validar( email ) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(email.value)) {
      alert("Usuario valido"); valido.innerText = "válido";
    } else {
        alert("Ingrese un usuario valido");
    }
}