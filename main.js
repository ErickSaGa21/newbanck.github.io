//REGISTRO, INICIO Y VALIDACION DE DATOS 'LOGIN'
const formregister = document.querySelector('.login')
const formlogin = document.querySelector('.usuario')
function mostrar(){
    formregister.classList.add('hide');
    formlogin.classList.remove("hide")
}
var cuentaencontrada;
const cuentas = [
    {
    nombre: "Ana Villanueva",
    correo: "Ana@123.com",
    contraseña: "ana123456",
    saldo: 200
},
 {
    nombre: "Miguel Monterroso",
    correo: "Miguel@123.com",
    contraseña: "miguel123456",
    saldo: 150
},
{
    nombre: "Erick Santiago",
    correo: "erick@123.com",
    contraseña: "erick123456",
    saldo: 100
}
]
function registrarCuenta() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let contraseña = document.getElementById('contraseña').value;

    if (!nombre || nombre ==='' && !correo || correo ==='' && !contraseña || contraseña ==='') {
        alert('Por favor, completa todos los campos.');
        return;
      }
  else{
     // Crear un objeto de usuario
     const nuevacuenta = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña,
        saldo: 0
      };
      cuentas.push(nuevacuenta);
      console.log(cuentas);
      alert('Registro exitoso. Puedes iniciar sesión ahora.');
  }
   
  }
  
    // Inicio de Sesión
    
    function iniciarSesion() 
{
        let correo = document.getElementById('correoInicio').value;
        let contraseña = document.getElementById('contraseñaInicio').value;
        if ( !correo && !contraseña) {
            alert('Por favor, completa todos los campos.');
            return;
          }
      else{
        cuentaencontrada = cuentas.find(user => user.correo === correo && user.contraseña === contraseña);

        if (cuentaencontrada) 
        {
                alert('Inicio de sesión exitoso.');
                mostrar()
                document.getElementById('nombreUsuario').textContent =  cuentaencontrada.nombre;
                document.getElementById('correoUsuario').textContent = 'Correo: ' + cuentaencontrada.correo;
                document.getElementById('saldoUsuario').textContent = 'Saldo: $' + cuentaencontrada.saldo;
         } 
        else 
        {
          alert('Usuario y contraseña no válidos. Ingresa correctamente tus datos.');
        }     
      }
          
    
}
//Funciones para retiro, deposito y transferencia

function depositar() {

    let monto = parseFloat(prompt('Ingrese el monto a depositar:'));
    if (isNaN(monto) || monto <= 0) {
        alert('Monto inválido.');
        return;
    }
 
    // Suma el monto al saldo actual

    cuentaencontrada.saldo += monto;

    if(cuentaencontrada.saldo > 990)
{
    alert('Lo siento excediste el monto maximo de $990')
}
else{
    // Muestra un mensaje con el nuevo saldo
    alert(`Depósito exitoso de ${monto}. Nuevo saldo de ${cuentaencontrada.nombre} : ${cuentaencontrada.saldo}`);

    // Muestra el nuevo saldo en la consola
    console.log(cuentaencontrada.saldo);

    // Actualiza el contenido HTML
    document.getElementById('saldoUsuario').innerHTML = `Saldo: $ ${cuentaencontrada.saldo}`;
}
}

function retirar() {
    let monto = parseFloat(prompt('Ingrese el monto a retirar:'));
    if (isNaN(monto) || monto <= 0) {
        alert('Monto inválido.');
        return;
    }
    
    if (monto > cuentas.saldo) {
        alert('Fondos insuficientes.');
        return;
    }
   //  cuenta actual
   cuentaencontrada.saldo -= monto;
   
   if(cuentaencontrada.saldo <= 10)
{
    alert('Lo siento tu cuenta necesita como minimo $10 para funcionar')
}
else{
    // Muestra un mensaje con el nuevo saldo
    alert(`Retiro exitoso de ${monto}. Nuevo saldo de ${cuentaencontrada.nombre} : ${cuentaencontrada.saldo}`);
    console.log(cuentaencontrada.saldo);
    // Actualiza el contenido HTML
    document.getElementById('saldoUsuario').innerHTML = `Saldo: $ ${cuentaencontrada.saldo}`;

}

function transferir() {
    let monto = parseFloat(prompt('Ingrese el monto a transferir:'));
    if (isNaN(monto) || monto <= 0) {
        alert('Monto inválido.');
        return;
    }

    let destinatarioCorreo = prompt('Ingrese el correo del destinatario:');
    let destinatario = cuentas.find(cuentas => cuentas.correo === destinatarioCorreo);

    if (!destinatario) {
        alert('Destinatario no encontrado.');
        return;
    }

    else if (monto > saldo1) {
        alert('Fondos insuficientes para realizar la transferencia.');
        return;
    }
    saldo1 -= monto;
    destinatario.saldo += monto;
    actualizarLocalStorage();
    alert(`Transferencia exitosa. Nuevo saldo de ${cuentas.nombre}: ${cuentas.saldo}`);
     
}
}
