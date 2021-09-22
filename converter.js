function meter(Val) {
    document.getElementById("kilometers").value=Val/1000;
    document.getElementById("feet").value=Val*3.28;
}

function kilometer(Val) {
    document.getElementById("meters").value=Val*1000;
    document.getElementById("feet").value=Val*3281;
}

function feet(Val) {
    document.getElementById("meters").value=Val*0.30;
    document.getElementById("kilometers").value=Val*0.00030;
}