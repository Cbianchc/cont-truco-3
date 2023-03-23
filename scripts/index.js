import { Contador } from "./contador.js";

//Variables y selectores
const partidaEnMemoria = JSON.parse(localStorage.getItem("truco"));
const p1Nombre= "Yo/Nos";
const p2Nombre= "Vos/Ell";
const modal= document.querySelector("dialog");

//Intanciamiento de contadores
const p1 = new Contador(
  p1Nombre,
  document.getElementById("jugador1Container"),
  partidaEnMemoria && partidaEnMemoria[p1Nombre] ? partidaEnMemoria[p1Nombre] : 0
);
const p2 = new Contador(
    p2Nombre,
    document.getElementById("jugador2Container"),
    partidaEnMemoria && partidaEnMemoria[p2Nombre] ? partidaEnMemoria[p2Nombre] : 0
);

//Funciones del reset y modal
document.querySelector("#reset").addEventListener("click", ()=> {

    //modal.showModal())
 
      
      swal.fire({
        text: "¿Seguro queres reiniciar todo?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar todo',
        cancelButtonText: 'Seguir jugando!',
        confirmButtonColor: '#dd6b55',
        cancelButtonColor: '#3085d6',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
             p1.reset();
             p2.reset();
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          console.log("seguimmos jugando..")
          
        }
      })
        
});
    




// document.querySelector("#volver").addEventListener("click", ()=> modal.close())
// document.querySelector("#aceptar").addEventListener("click", ()=> {
//     p1.reset();
//     p2.reset();
//     modal.close()
// })

//Guardado de partida
document.querySelectorAll("button").forEach(boton => boton.addEventListener("click", guardarPartida))
function guardarPartida(){
    const partidaAGuardar = {
        [p1Nombre]: p1.numero,
        [p2Nombre]: p2.numero,
    }
    localStorage.setItem("truco",JSON.stringify(partidaAGuardar))
}

// let boton_reglas = document.getElementById('.boton-reglas');
// function reglasTruco(){
//     Swal.fire({
//         imageUrl: "/imagenes/fosforo.png",
//         imageHeight: 1500,
//         imageAlt: 'A tall image'
//       })
// }

//===================================================== boton reglas
document.querySelector("#boton-reglas").addEventListener("click", ()=> 
Swal.fire({
    text: "Acá tenes las reglas",
    imageUrl: './img/foto-viejo.jpg',
    imageWidth: 200,
    imageHeight: 270,
    confirmButtonText: "Ok, gracias",
}))

