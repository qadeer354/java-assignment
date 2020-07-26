var amount = +prompt("Enter Amount to Withdraw");

function notes(a) {
    var val  = a;
    var Hnotes =0;
    var Fnotes=0;
    var Tnotes=0;
    for (let index = 1; index < val; index++) {
        if(val >=10) {
            if(val >=50) {
                if (val>= 100) {
                    Hnotes   = parseInt(val/100);
                    val = val - (Hnotes*100);
                    document.write("Notes of 100's : " +Hnotes + "<br>");
                }
                else{
                    Fnotes = parseInt(val/50);
                    val = val - (Fnotes*50);
                    document.write("Notes of 50's : " +Fnotes +"<br>");
                } 
            }
            else{
                Tnotes = parseInt(val/10);
                val = val - (Tnotes*10);
                document.write("Notes of 10's : " +Tnotes+"<br>");
            }
        } 
    }
    document.write("Chiller is : " +val+"<br>");   
}
notes(amount);