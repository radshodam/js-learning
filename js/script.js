var num1 = 0;
var num2 = 0;
var sign = null;

function setValue(num) {
    //debugger;
    var old = document.getElementById('result').value;
    var res = null;

    if (old !== '0') {
        //debugger;
        res = old + num;
    } else {

        res = num;
    }

    document.getElementById('result').value = String(res);

}

function keepValue(alamat) {
    sign = alamat;

    debugger;
    if (sign === '+' && num1 !== 0 && num2 !== 0) {
        num1 = parseFloat(num1) + parseFloat(num2);
        document.getElementById('result').value = num1;
    }

    num1 = document.getElementById('result').value;
    document.getElementById('result').value = "";
    console.log(num1);
}

function showResult() {
    num2 = document.getElementById('result').value;

    if (sign === '+') {
        var final = parseFloat(num1) + parseFloat(num2);
    } else if (sign === '-') {
        var final = parseFloat(num1) - parseFloat(num2);
    } else if (sign === '*') {
        var final = parseFloat(num1) * parseFloat(num2);
    } else if (sign === '/') {
        var final = parseFloat(num1) / parseFloat(num2);
    }


    document.getElementById('result').value = final;

    num1 = 0;
    num2 = 0;
}

function cls() {
    num1 = 0;
    num2 = 0;

    document.getElementById('result').value = "0";
}