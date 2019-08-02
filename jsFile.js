var output = document.getElementById("outPut");

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

    if (isNaN(a) === false && isNaN(b) === false) {
        switch(getRadioSelection("action")) {
            case "add" :
                output.innerHTML = ((parseInt(a, 2) + parseInt(b, 2)).toString(2));
                break;
                
            case "subtract" :
                output.innerHTML = ((parseInt(a, 2) - parseInt(b, 2)).toString(2));
                break;
                
            case "divide" :
                output.innerHTML = ((parseInt(a, 2) / parseInt(b, 2)).toString(2));
                break;
                
            case "multiply" :
                output.innerHTML = ((parseInt(a, 2) * parseInt(b, 2)).toString(2));
                break;
        }
    } else {
        alert("숫자가 아닙니다")
    }

}