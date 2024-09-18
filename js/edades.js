/* --------------------------------------------------------------------
* - ARRAY VACIO PARA ALMACENAR VALORES Y VALIDACIONES
* -------------------------------------------------------------------- */
let edades = [];

function agregarEdad() {
    const input = document.getElementById('edad_input');
    const valor = input.value;
    const edad = parseInt(valor);

    if (isNaN(edad) || edad < 1 || edad > 120) {
        Swal.fire({
            title: "Espera",
            text: "Debes ingresar edades entre 1 y 120",
            icon: "error"
        });
        input.value = '';
        return;
    }
/* --------------------------------------------------------------------
* - LONGITUD DEL ARRAY EN 10 CAMPOS
* -------------------------------------------------------------------- */

    if (edades.length < 10) {
        edades.push(edad);
        input.value = '';
        if (edades.length === 10) {
            Swal.fire({
                title: "Perfecto",
                text: " Ya has ingresado las 10 edades",
                text: "Ya puedes generar las estadisticas",
                icon: "success"
            });
        }
    } else {
        alert('Ya has ingresado las 10 edades.');
    }
}
/* --------------------------------------------------------------------
* - SE PROCESAN LOS VALORES INGRESADOS PARA GENERAR LAS ESTADISTICAS
* -------------------------------------------------------------------- */

function procesarEdades() {
    if (edades.length < 10) {
        Swal.fire({
            title: "Espera",
            text: "Debes ingresar 10 edades para generar las estadisticas",
            icon: "success"
        });
        return;
    }

    const menores = edades.filter(edad => edad < 18).length;
    const mayores = edades.filter(edad => edad >= 18 && edad < 60).length;
    const adultosMayores = edades.filter(edad => edad >= 60).length;
    const edadMinima = Math.min(...edades);
    const edadMaxima = Math.max(...edades);
    const promedioEdades = (edades.reduce((sum, edad) => sum + edad, 0) / edades.length).toFixed(2);

    Swal.fire({
        title: "Las estadisticas",
        html:  "<p>Personas menores de edad: " + menores + "</p>" +
               "<p>Personas mayores de edad: " + mayores + "</p>" +
               "<p>Personas adulto mayor: " + adultosMayores + "</p>" +
               "<p>La edad más baja ingresada es: " + edadMinima + "</p>" +
               "<p>La edad más alta ingresada es: " + edadMaxima + "</p>" +
               "<p>El promedio de edad es de: " + promedioEdades + "</p>"+
               "<p>El Las edades ingresadas son: " + edades + "</p>",
        icon: "success"
    });    
}
