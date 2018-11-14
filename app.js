
function myFunction() {
    let n00 = document.getElementById("n00").value;    
    let n01 = document.getElementById("n01").value;
    let n10 = document.getElementById("n10").value;
    let n11 = document.getElementById("n11").value;
    let tabla = [n11,n10,n01,n00];
    console.log(tabla);

    let resultado = document.getElementById('demo');

    let res = phi(tabla);
    console.log(res);
    
    resultado.innerText = res;

    
}

function phi(table) {    
    return (((table[3] * table[0]) - (table[2] * table[1])) /(
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) * 
                  (table[1] + table[3]) *
                  (table[0] + table[2]))));
}