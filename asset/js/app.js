var listado = [];

function Entrada(estado, desercion) {
    listado.push({ estado, desercion });
}

var tablero = (estado) => {
    var arrg = [0, 0, 0, 0];
    for (let i = 0; i < listado.length; i++) {
        let index = 2;
        if (listado[i].estado.includes(estado)) index -= 2;
        if (!listado[i].desercion) index += 1;
        arrg[index]++;
    }
    return arrg;
}

var boton1 = document.getElementById("boton-llenado");

boton1.onclick = function (evt) {
    Entrada(["casado"], true);

    Entrada(["NoCasado"], false);

    Entrada(["casado"], false);

    Entrada(["casado"], true);

    Entrada(["NoCasado"], false);

    Entrada(["NoCasado"], true);

    Entrada(["casado"], true);

    Entrada(["NoCasado"], false);

    Entrada(["casado"], true);

    Entrada(["casado"], false);

    Entrada(["casado"], true);

    Entrada(["NoCasado"], false);

    Entrada(["casado"], true);

    Entrada(["casado"], true);

    Entrada(["casado"], true);

    desglozar = tablero("casado");

    document.getElementById('n11').innerText = desglozar[0];
    document.getElementById('n10').innerText = desglozar[1];
    document.getElementById('n01').innerText = desglozar[2];
    document.getElementById('n00').innerText = desglozar[3];

}

function myFunction() {
    let n00 = parseInt(document.getElementById("n00").textContent);
    let n01 = parseInt(document.getElementById("n01").textContent);
    let n10 = parseInt(document.getElementById("n10").textContent);
    let n11 = parseInt(document.getElementById("n11").textContent);
    let tabla = [n11, n10, n01, n00];
    let resultado = document.getElementById('demo');
    let res = phi(tabla).toFixed(3);
    resultado.innerText = res;
}

function phi(table) {
    return (((table[3] * table[0]) - (table[2] * table[1])) / (
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]))));
}
