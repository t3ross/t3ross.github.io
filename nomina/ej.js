document
        .getElementById("calcularBtn")
        .addEventListener("click", function () {
          let salarioBase = parseFloat(
            document.getElementById("salarioBase").value
          );
          let horasExtrasDiurnas = parseInt(
            document.getElementById("horasExtrasDiurnas").value
          );
          let horasExtrasNocturnas = parseInt(
            document.getElementById("horasExtrasNocturnas").value
          );
          let horasExtrasFestivas = parseInt(
            document.getElementById("horasExtrasFestivas").value
          );
          let horasExtrasDominicales = parseInt(
            document.getElementById("horasExtrasDominicales").value
          );
          let diasFaltados = parseInt(
            document.getElementById("diasFaltados").value
          );

          const horasNormalesPorDia = 8;
          const diasTrabajoPorMes = 30;

          let valorHoraNormal =
            salarioBase / (diasTrabajoPorMes * horasNormalesPorDia);
          let descuentoSalud = salarioBase * 0.04;
          let descuentoPension = salarioBase * 0.04;

          let salarioPorHorasExtrasDiurnas =
            horasExtrasDiurnas * valorHoraNormal * 1.25;
          let salarioPorHorasExtrasNocturnas =
            horasExtrasNocturnas * valorHoraNormal * 1.35;
          let salarioPorHorasExtrasFestivas =
            horasExtrasFestivas * valorHoraNormal * 1.75;
          let salarioPorHorasExtrasDominicales =
            horasExtrasDominicales * valorHoraNormal * 2;

          let totalHorasExtras =
            salarioPorHorasExtrasDiurnas +
            salarioPorHorasExtrasNocturnas +
            salarioPorHorasExtrasFestivas +
            salarioPorHorasExtrasDominicales;

          let descuentoFaltas =
            (salarioBase / diasTrabajoPorMes) * diasFaltados;

          let salarioFinal =
            salarioBase -
            descuentoSalud -
            descuentoPension -
            descuentoFaltas +
            totalHorasExtras;

          document.querySelector("#salarioBasico .valor").textContent =
            "$" + salarioBase.toFixed(2);
          document.querySelector("#ingresosExtras .valor").textContent =
            "$" + totalHorasExtras.toFixed(2);
          document.querySelector("#descuentoSalud .valor").textContent =
            "$" + descuentoSalud.toFixed(2);
          document.querySelector("#descuentoPension .valor").textContent =
            "$" + descuentoPension.toFixed(2);
          document.querySelector("#descuentoFaltas .valor").textContent =
            "$" + descuentoFaltas.toFixed(2);
          document.querySelector("#totalPagar .valor").textContent =
            "$" + salarioFinal.toFixed(2);
        });