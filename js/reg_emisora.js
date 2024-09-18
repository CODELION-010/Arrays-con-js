window.basedatos = [];
/* --------------------------------------------------------------------
* - CRECIÓN DE BASE DE DATOS LOCAL USANDO LOCALSTORAGE
* -------------------------------------------------------------------- */
if (localStorage.getItem("datos")) {
  window.basedatos = JSON.parse(localStorage.getItem("datos"));
}
/* --------------------------------------------------------------------
* - Constructor DE INSTANCIAS PARA EL LOCAL STORAGE
* -------------------------------------------------------------------- */
function usuario(nombre, cc, fecha, email, ciudad_o, ciudad_r, artista, canciones_fav) {
  this.nombre = nombre;
  this.cc = cc;
  this.fecha = fecha;
  this.email = email;
  this.ciudad_o = ciudad_o;
  this.ciudad_r = ciudad_r;
  this.artista = artista;
  this.canciones_fav = canciones_fav;
}
/* --------------------------------------------------------------------
* - CAPTURA DE VALORES DEL FORMULARIO Y AGREGACION EN EL VECTOR
* -------------------------------------------------------------------- */
function agregar(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cc = document.getElementById("cc").value;
  const fecha = document.getElementById("fecha").value;
  const email = document.getElementById("email").value;
  const ciudad_o = document.getElementById("ciudad_o").value;
  const ciudad_r = document.getElementById("ciudad_r").value;
  const artista = document.getElementById("artista").value;
  const canciones_fav = document.getElementById("canciones_fav").value;

  const newUser = new usuario(nombre, cc, fecha, email, ciudad_o, ciudad_r, artista, canciones_fav);
  basedatos.push(newUser);

  localStorage.setItem("datos", JSON.stringify(basedatos));
  Swal.fire({
    title: 'Perfecto',
    text: 'Usuario Registrado Exitosamente',
    icon: 'success',
    customClass: {
      popup: 'mi-popup-clase'
    }
  });
  document.getElementById("registroForm").reset();
}

const addButton = document.getElementById("agregar");
addButton.onclick = agregar;

/* --------------------------------------------------------------------
* - SE RECORRE EL VECTOR CON UN IF SE MUESTA LA INFORMACIÓN EN PANTALLA
* -------------------------------------------------------------------- */
function mostrarPersona() {
  const posicion = parseInt(document.getElementById('posicion').value);

  if (posicion >= 0 && posicion < basedatos.length) {
    const persona = basedatos[posicion];
    let info = `<p>Nombre: ${persona.nombre}</p>
                  <p>Cédula: ${persona.cc}</p>
                  <p>Fecha de Nacimiento: ${persona.fecha}</p>
                  <p>Correo electrónico: ${persona.email}</p>
                  <p>Ciudad de origen: ${persona.ciudad_o}</p>
                  <p>Ciudad de residencia: ${persona.ciudad_r}</p>
                  <p>Cantante favorito: ${persona.artista}</p>
                  <p>Canciones favoritas: ${persona.canciones_fav}</p>`;
    document.getElementById('infoPersona').innerHTML = info;
  } else {
    Swal.fire({
      title: 'Espera',
      text: 'No existe ese campo en el vector',
      icon: 'error',
      customClass: {
        popup: 'mi-popup-clase'
      }
    });
  }
  document.getElementById("mostrarform").reset();
}
/* --------------------------------------------------------------------
* - SE ELIMINA POSICION EN EL VECTOR USANDO SPLICE
* -------------------------------------------------------------------- */
function eliminarPorPosicion() {
  const posicion = parseInt(document.getElementById('posicionEliminar').value);

  if (posicion >= 0 && posicion < basedatos.length) {
    basedatos.splice(posicion, 1);
    localStorage.setItem("datos", JSON.stringify(basedatos));
    Swal.fire({
      title: `Usuario en la posición ${posicion} eliminado`,
      icon: 'success',
      customClass: {
        popup: 'mi-popup-clase'
      }
    });
  } else {
    Swal.fire({
      title: 'Espera!',
      text: 'Posición incorrecta o no existe',
      icon: 'error',
      customClass: {
        popup: 'mi-popup-clase'
      }
    });
  }
  document.getElementById("eliminarFormPosicion").reset();
}

console.log(basedatos);
console.log(basedatos[1], [1]);
