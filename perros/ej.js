document
        .getElementById("calcularBtn")
        .addEventListener("click", function () {
          let puestoUno = document
            .getElementById("puestoUno")
            .value.trim()
            .toUpperCase();
          let puestoDos = document
            .getElementById("puestoDos")
            .value.trim()
            .toUpperCase();
          let puestoTres = document
            .getElementById("puestoTres")
            .value.trim()
            .toUpperCase();

          const perros = {
            PITBULL: 6000000,
            BULY: 6500000,
            ROTTWHILLER: 4000000,
            "LABRADOR RETRIEVER": 3500000,
            "GOLDEN RETRIEVER": 3500000,
            DOBERMAN: 5000000,
            "DOGO ARGENTINO": 5500000,
          };

          let resultadosHTML = "";
          let perrosSeleccionados = [
            { raza: puestoUno, puesto: 1 },
            { raza: puestoDos, puesto: 2 },
            { raza: puestoTres, puesto: 3 },
          ];

          perrosSeleccionados.forEach(function (perro) {
            let raza = perro.raza;
            let puesto = perro.puesto;
            let costoPerro = perros[raza];
            let nuevoValor;

            if (!costoPerro) {
              resultadosHTML += `<p>La raza ${raza} no está registrada.</p>`;
            } else {
              if (puesto === 1) {
                nuevoValor = costoPerro * 2;
              } else if (puesto === 2) {
                nuevoValor = costoPerro + 800000;
              } else if (puesto === 3) {
                nuevoValor = costoPerro + 200000;
              } else {
                resultadosHTML += `<p>El puesto no es válido para la raza ${raza}.</p>`;
              }

              let colorFondo;
              if (puesto === 1) colorFondo = "primero";
              else if (puesto === 2) colorFondo = "segundo";
              else if (puesto === 3) colorFondo = "tercero";

              let divPerro = document.createElement("div");
              divPerro.classList.add("competencia-perro", colorFondo);

              let imgPerro = document.createElement("img");
              imgPerro.src = "https://preview.redd.it/breaking-this-random-ass-dog-will-be-the-majn-antagonist-in-v0-fmr48ul75b1e1.png?auto=webp&s=f5840620f4e874e48555822da09e491c5121dda8";
              imgPerro.alt = "Imagen de perro";

              let divInfo = document.createElement("div");

              let pPuesto = document.createElement("p");
              pPuesto.innerHTML = `Puesto ${puesto}`;
              let pRaza = document.createElement("p");
              pRaza.innerText = `Raza: ${raza}`;
              let pPrecio = document.createElement("p");
              pPrecio.innerText = `Nuevo valor: $${nuevoValor.toLocaleString()}`;

              divInfo.appendChild(pPuesto);
              divInfo.appendChild(pRaza);
              divInfo.appendChild(pPrecio);

              divPerro.appendChild(imgPerro);
              divPerro.appendChild(divInfo);

              // Añadir el div de cada perro al resultado final
              document.getElementById("resultados").appendChild(divPerro);
            }
          });
        });