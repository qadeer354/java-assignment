var val = +prompt("Enter Distance Between Two Cities");


function calcMeters(val) {
    
    var meter= val*1000;
    return meter;
}
function calcFeet(val) {
    var foot= val*3280.84;
   return foot;
}
function calcCenti(val) {
   var centi= val*100000;
   return centi;
}
function CalcInch(val) {
    var inch= val*39370;
   return inch;
}

document.write("Distance in Meteres : "+calcMeters(val)+"<br> Distance in Feet's : "+calcFeet(val));
document.write("<br> Distance in inches : "+CalcInch(val)+"<br> Distance in centiMeteres : "+calcCenti(val));