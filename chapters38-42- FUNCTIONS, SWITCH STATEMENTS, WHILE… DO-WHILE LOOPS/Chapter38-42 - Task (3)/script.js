var a = +prompt("Enter value of a side of triangle");
var b = +prompt("Enter value of b side of triangle");
var c = +prompt("Enter value of c side of triangle");

function calcS(a,b,c){
    var s= (a+b+c)/2;
    return s;
}
function area(a,b,c){
    var s= calcS(a,b,c);
    console.log("s is :" + s);
    var S = s*(s-a)*(s-b)*(s-c);
    return (document.write("Area  of triangle is : "+S));
}
area(a,b,c);