alert("alerta")
console.log(logica conectada);

const usuario = "admin"
const clave = "1234"

function pruebaBoton (){

   let user = document.getElementById("user").value
   let pw = document.getElementById("pw").value 

   if (usuario==user&&clave==pw){
    window.open("Calculadora.html")
    console.log("Ingreso correcto")
   }else{
    console.log("Error de credenciales")
   }

  

}