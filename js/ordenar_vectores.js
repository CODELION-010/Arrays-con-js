let vector1 = [];
let vector2 = [];

function agregarNumero(vectorId) {
    const input = document.getElementById(`vector${vectorId}_input`);
    const valor = parseInt(input.value);

    if (isNaN(valor)) {
        swal('Espera', 'Por favor, ingrese un número entero válido.', 'info');
        input.value = '';
        return;
    }

    const vector = vectorId === 1 ? vector1 : vector2;
    
    if (vector.length > 0 && valor < vector[vector.length - 1]) {
        swal('Espera', 'Por favor, ingrese números en orden ascendente.', 'info');
        input.value = '';
        return;
    }

    if (vector.length < 5) {
        vector.push(valor);
        input.value = '';
        document.getElementById(`vector${vectorId}_display`).textContent = `Vector ${vectorId}: ${vector.join(', ')}`;
        if (vector.length === 5) {
            swal('Información', `Has alcanzado el máximo de 5 números para el Vector ${vectorId}.`, 'info');
        }
    } else {
        swal('Información', `Ya has ingresado los 5 números para el Vector ${vectorId}.`, 'info');
    }
}

function fusionar_array() {
    if (vector1.length < 5 || vector2.length < 5) {
        swal('Espera', 'Debes ingresar 5 números en ambos vectores antes de mezclar y ordenar.', 'info');
        return;
    }

    const mezcla = [...vector1, ...vector2];
    console.log(mezcla);
    mezcla.sort((a, b) => a - b);
    document.getElementById('resultado').textContent = `Vectores ordenados: ${mezcla.join(', ')}`;

    //otro metodo de ordenamiento de los vectores
/*    let fusion = [];
    while (vector1.length && vector2.length) {
        let primerelemento
        if (vector1[0] < vector2[0]) {
            primerelemento = vector1.shift();
        }else{
            primerelemento = vector2.shift();
        }
        fusion.push(primerelemento)
    }
    fusion=fusion.concat(vector1).concat(vector2);
    swal('Perfecto', 'El orden de los vectores es: ' + fusion, 'info');
    */
}