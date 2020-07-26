var emp = +prompt("Enter numebr of  employes");

var timeover = 0;



function calcpay(emp) {
    var e = emp;
    var rate = 12;
    var overtimepay =0;

    for (let index = 0; index < e; index++) {
        var workinghours =  +prompt("Enter an working hours of employe "+(index+1));
        if (workinghours>40) {
            var overtime = workinghours- 40;
            timeover +=overtime;
            p=overtime*rate;
            overtimepay +=p;
        }
    }
    return overtimepay;
}

var payemntOfEmp = calcpay(emp);
document.write("Number of Employes "+emp+ "<br> Overtime is : "+timeover+" hours <br> Ovetime Payment Rs : "+payemntOfEmp +" PKR");

