/* Juego de preguntas */

let respuesta1 = prompt("¿Colón descubrió América? (si/no)");
if (respuesta1.toLowerCase() === "si") {
    let respuesta2 = prompt("¿La independencia de México fue en el año 1810? (si/no)");
    if (respuesta2.toLowerCase() === "si") {
        let respuesta3 = prompt("¿The Doors fue un grupo de rock americano? (si/no)");
        if (respuesta3.toLowerCase() === "si") {
            document.write("¡Has ganado el juego!");
        } else {
            document.write("Has perdido el juego.");
        }
    } else {
        document.write("Has perdido el juego.");
    }
} else {
    document.write("Has perdido el juego.");
}

/* hecho */
