
function myFunction() {
    var n00 = document.getElementById("n00").value;    
    var n01 = document.getElementById("n01").value;
    var n10 = document.getElementById("n10").value;
    var n11 = document.getElementById("n11").value;
    let tabla = [n11,n10,n01,n00];

    let respuesta = document.getElementById("demo");
    respuesta.textContent = phi(tabla);
}

                  

function phi(table) {
    return ((table[3] * table[0]) - (table[2] * table[1])) /(
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) * 
                  (table[1] + table[3]) *
                  (table[0] + table[2])));
}
