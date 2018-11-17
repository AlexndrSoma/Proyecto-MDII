function myFunction() {
    let n00 = parseInt(document.getElementById("n00").value);
    let n01 = parseInt(document.getElementById("n01").value);
    let n10 = parseInt(document.getElementById("n10").value);
    let n11 = parseInt(document.getElementById("n11").value);
    let tabla = [n11, n10, n01, n00];

    /*
    let resultado = document.getElementById('demo');
    let res = phi(tabla).toFixed(3);
    resultado.innerText = res;
    */
   document.getElementById('demo').innerText = phi(tabla).toFixed(3);
}

function phi(table) {
    return (((table[3] * table[0]) - (table[2] * table[1])) / (
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]))));
}