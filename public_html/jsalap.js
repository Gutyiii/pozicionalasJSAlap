
alert("Hello Világ!");
document.write("Hello Világ!");

//alert("Hello Világ section!");
document.write("Hello Világ section!");
consol.log("üzenet - debug");
var valta = "";
var valtB = "";
var muvJel = "";
function szamolas() {
    valtA = document.getElementById("a").value;
    valtB = document.getElementById("b").value;
    muvJel = document.getElementById("muv").value;
    if (muvJel === "+") {
        var osszeg = osszead();
    } else if (muvJel === "-") {
        var osszeg = kivon();
    } else if (muvJel === "*") {
        var osszeg = szoroz();
    } else if (muvJel === "/") {
        var osszeg = oszt();
    }

    document.getElementById("szoveg").innerHTML = osszeg;
}

function osszead() {
    var osszeg = Number(valtA) + Number(valtB);
    return osszeg;
}
function kivon() {
    var osszeg = Number(valtA) - Number(valtB);
    return osszeg;
}
function szoroz() {
    var osszeg = Number(valtA) * Number(valtB);
    return osszeg;
}
function oszt() {
    var osszeg = Number(valtA) / Number(valtB);
    return osszeg;
}
