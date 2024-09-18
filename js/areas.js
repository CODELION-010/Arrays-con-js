/* --------------------------------------------------------------------
* - FUNCIÓN CALCULAR AREAS
* -------------------------------------------------------------------- */
function calcularArea() {
    var figura = document.getElementById("figura").value;
    var area = 0;

    if (figura === "triangulo") {
        var a = parseFloat(document.getElementById("a").value);
        var b = parseFloat(document.getElementById("b").value);
        area = (a *b) / 2;
    } else if (figura === "rectangulo") {
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);
        area = base * altura;
    } else if (figura === "cuadrado") {
        var lado = parseFloat(document.getElementById("lado").value);
        area = lado * lado;
    } else if (figura === "circulo") {
        var radio = parseFloat(document.getElementById("radio").value);
        area = Math.PI * radio * radio;
    }

    Swal.fire('Perfecto', 'El valor del área del ' + figura + ' es ' + area, 'success');}
/* --------------------------------------------------------------------
* - FUNCIÓN PARA OCULAR IMPUTS DE CADA CLASE
* -------------------------------------------------------------------- */

function mostrarCampos() {
    var figura = document.getElementById("figura").value;
    document.getElementById("trianguloCampos").style.display = "none";
    document.getElementById("rectanguloCampos").style.display = "none";
    document.getElementById("cuadradoCampos").style.display = "none";
    document.getElementById("circuloCampos").style.display = "none";
    
   /* --------------------------------------------------------------------
* - FUNCIÓN MOSTRAR LOS IMPUTS DEPENDIENDO DE LA OPCIÓN SELECCIONADA
* -------------------------------------------------------------------- */
    if (figura === "triangulo") {
        document.getElementById("trianguloCampos").style.display = "block";
    } else if (figura === "rectangulo") {
        document.getElementById("rectanguloCampos").style.display = "block";
    } else if (figura === "cuadrado") {
        document.getElementById("cuadradoCampos").style.display = "block";
    } else if (figura === "circulo") {
        document.getElementById("circuloCampos").style.display = "block";
    }
}

