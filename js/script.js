function setValue(num) {
    //debugger;
    var old = document.getElementById('result').value;
    var res = null;
    //!==
    // ==
    // ===
    // <=
    // >=

    if (old !== '0') {
        res = old + num;
    } else {

        res = num;
    }

    document.getElementById('result').value = res;

}