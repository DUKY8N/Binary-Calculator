var a = document.getElementById("a");
var b = document.getElementById("b").value;
var output = document.getElementById("outPut");

function getRadioSelection(name) {
    var el = document.getElementsByName(name);

    for (i = 0; i < el.length; i++) {
        if (el[i].checked === true) {
            return el[i].value;
        }
    }
    return null;
}

function calc() {
    alert(getRadioSelection("action"));

    if (getRadioSelection("action") === "add") {
        alert(a.valueOf);
        alert(b);
    } else if (getRadioSelection("action") === "subtract") {
        alert("kjk");
    } else if (getRadioSelection("action") === "divide") {
        alert("kjfdkfjk");
    } else if (getRadioSelection("action") === "multiply") {
        alert("kjfdkfjk");
    }

}