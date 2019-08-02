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

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    if (getRadioSelection("action") === "add") {
        alert((parseInt(a, 2) + parseInt(b, 2)).toString(2));
    } else if (getRadioSelection("action") === "subtract") {
        alert((parseInt(a, 2) - parseInt(b, 2)).toString(2));
    } else if (getRadioSelection("action") === "divide") {
        alert((parseInt(a, 2) / parseInt(b, 2)).toString(2));
    } else if (getRadioSelection("action") === "multiply") {
        alert((parseInt(a, 2) * parseInt(b, 2)).toString(2));
    }

}