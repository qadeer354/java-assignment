var eng = +prompt("Enter marks of English out of 100");
var phy = +prompt("Enter marks of Physics out of 100");
var chem = +prompt("Enter marks of Chemistry out of 100");
var total = 300;




function avergCalc(a,b,c){
    var m1 = a;
    var m2 = b;
    var m3 = c;
    var sum = m1+m2+m3;
    var averg = sum/3;
    console.log(averg)

    var f = averg.toFixed(2);
    return f;
}
function percenCalcu(i,j,k,total){
    var mi1 = i;
    var mi2 = j;
    var mi3 = k;
    var mt = total;
    var sum = mi1+mi2+mi3;
    var div = (sum/mt)*100;
    var p = Math.round(div,2);
    return p;
}

function mainFunction(eng,phy,chem,total) {
    var mark1 = eng;
    var mark2 = phy;
    var mark3 = chem;
    var markt = total;
    var avclac = avergCalc(mark1,mark2,mark3);
    var pe = percenCalcu(mark1,mark2,mark3,markt);
    document.write("averge marks :  "+avclac+"  <br> percentage is : "+pe +"&#37;");
}
mainFunction(eng,phy,chem,total);

