function power(a,b) {
    var power = a;
    for (let index = 0; index < b-1; index++) {
        power *=a;
    }
    return document.write(a+" raise to "+b+" is : " + power);
}

power(9,12);