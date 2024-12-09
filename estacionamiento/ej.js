document
        .getElementById("formulario")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          let horasEstacionado = parseInt(
            document.getElementById("horas").value
          );
          let minutosEstacionado = parseInt(
            document.getElementById("minutos").value
          );

          let tarifaPorHora = 1500;
          let costoTotal = horasEstacionado * tarifaPorHora;

          if (minutosEstacionado > 0) {
            costoTotal += tarifaPorHora;
          }

          document.getElementById("resultado").style.display = "block";
          document.getElementById(
            "tiempoEstacionado"
          ).textContent = `Tiempo estacionado: ${horasEstacionado} horas y ${minutosEstacionado} minutos`;
          document.getElementById(
            "costoTotal"
          ).textContent = `Costo Total: ${costoTotal.toLocaleString()} pesos`;
        });