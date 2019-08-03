function getRadioSelection(name) {
    var el = document.getElementsByName(name);

    for (let i = 0; i < el.length; i++) {
        if (el[i].checked === true) {
            return el[i].value;
        }
    }
    return null;
}

function calc() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var output = document.getElementById("outPut");


    if (a === "" || b === "") {
        output.innerHTML = "값이 입력되지 않았습니다.";
        return;
    } else if (isNaN(a) === false && isNaN(b) === false) {
        switch (getRadioSelection("action")) {
            case "add":
                output.innerHTML = ((parseInt(a, 2) + parseInt(b, 2)).toString(2));
                break;

            case "subtract":
                output.innerHTML = ((parseInt(a, 2) - parseInt(b, 2)).toString(2));
                break;

            case "divide":
                output.innerHTML = ((parseInt(a, 2) / parseInt(b, 2)).toString(2));
                break;

            case "multiply":
                output.innerHTML = ((parseInt(a, 2) * parseInt(b, 2)).toString(2));
                break;
        }
    } else {
        output.innerHTML = "숫자가 아닙니다";
        return null;
    }

}