
var insertbtn  = document.getElementById("insertbtn"); 
var form = document.getElementById("myform");
form.hidden = true;

function insertNewData(params) {
    form.hidden = false;
    insertbtn.hidden =true;
}
function insertData(){
    var students  = document.getElementById("students"); 
    var tr = students.insertRow();
    var cell1 = tr.insertCell();
    var cell2 = tr.insertCell();
    var cell3 = tr.insertCell();
    var cell4 = tr.insertCell();
    var cell5 = tr.insertCell();

    var btn = document.createElement("BUTTON");
    btn.innerHTML="Delete";
    btn.setAttribute("onclick", "remove(this);");

    var btn1 = document.createElement("BUTTON");
    btn1.innerHTML="Edit";
    btn1.setAttribute("onclick", "edit(this);");

    cell1.innerHTML =  document.getElementById("id").value;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("class").value;
    cell4.appendChild(btn);
    cell5.appendChild(btn1);
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("class").value="";
    form.hidden = true;
    insertbtn.hidden=false;
    
}

function remove(v) {
    var td = v.parentNode; 
    var tr = td.parentNode; // the row to be removed
    var  p = tr.parentNode;
    p.removeChild(tr);
}
function edit(w) {
    insertbtn.hidden=true;

    var td = w.parentNode; 
    var tr = td.parentNode; // the row to be Edited

    var fc = tr.childNodes[0].innerHTML;
    var fd = tr.childNodes[1].innerHTML;
    var fe = tr.childNodes[2].innerHTML;

    var i = document.getElementById('id');
    i.setAttribute('value',fc);
    var n = document.getElementById('name');
    n.setAttribute('value',fd);
    var c= document.getElementById('class');
    c.setAttribute('value',fe);
    form.hidden = false;
    document.getElementById("id").value = fc;
    document.getElementById("name").value = fd;
    document.getElementById("class").value=fe;

    var  p = tr.parentNode;
    p.removeChild(tr);
    
    
}