document.getElementById("formulario-alquiler").addEventListener("submit", function (event) {
    event.preventDefault();

    const vehiculos = document.getElementsByClassName("vehiculo");
    const seguros = document.getElementsByClassName("seguro");
    const dias = parseInt(document.getElementById("dias").value);

    let vehiculoSeleccionado = "";
    let seguroSeleccionado = "";

    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].checked) {
            vehiculoSeleccionado = vehiculos[i].value;
            break;
        }
    }

    for (let i = 0; i < seguros.length; i++) {
        if (seguros[i].checked) {
            seguroSeleccionado = seguros[i].value;
            break;
        }
    }

    let costoPorDia = 0;

    if (vehiculoSeleccionado === "BMW") costoPorDia = 650000;
    if (vehiculoSeleccionado === "MAGANE") costoPorDia = 120000;
    if (vehiculoSeleccionado === "MERCEDES") costoPorDia = 700000;
    if (vehiculoSeleccionado === "TWINGO") costoPorDia = 100000;
    if (vehiculoSeleccionado === "CHEVROLET AVEO") costoPorDia = 150000;

    let total = dias * costoPorDia;

    if (seguroSeleccionado === "si") {
        total += total * 0.05;
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = `El costo total del alquiler es: ${total.toLocaleString()} pesos`;

    if (dias <= 2) {
        resultado.className = "fondo-naranja";
    } else if (dias >= 3 && dias <= 5) {
        resultado.className = "fondo-amarillo";
    } else if (dias >= 6 && dias <= 10) {
        resultado.className = "fondo-verde";
    } else if (dias > 10) {
        resultado.className = "fondo-azul";
    }
    
    
});
