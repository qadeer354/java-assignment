
// 1.
var mainContent = document.getElementById('main-content');


// 2.
var nodes = mainContent.childNodes;

document.write("Child nodes of main-content Element <br>");
for (let index = 0; index < nodes.length; index++) {
    var i = nodes[index].innerHTML;
    // var i = nodes[index];
    // if u want to see the what element it is then uncomment the above commented line and comment the line before that commented line 
    document.write(i + "<br>");
    
}


// 3. 
var renderClass = document.getElementsByClassName("render");
document.write("<br> <br> <br> Inner HTML of Elements of class  render <br>");
for (let index = 0; index < renderClass.length; index++) {
    var i = renderClass[index].innerHTML;
    document.write(i + "<br>");
    
}


// 4.

document.getElementById('first-name').value = 'muhammaad';

// 5.
document.getElementById('last-name').value = 'shaheryar';

document.getElementById('email').value = 'muhammadshaheryar.1990@gmail.com';




// B) Question 2
// 1.


document.write("<br><br><br> Node Type: form-content id's Element ");
var n = document.getElementById("form-content").nodeType;
document.write("the node type is : "+n);


// 2.
document.write("<br><br><br> Node Type: lastName id's Element & it's childrens");
var n = document.getElementById("lastName").nodeType;
document.write("he node type is : "+n);
var nodes = document.getElementById("lastName").childNodes;
document.write("<br> <br>Node types of it's Childrens");
for (let index = 0; index < nodes.length; index++) {
    var i = nodes[index].nodeType;
    document.write("<br> the node type is : "+i);

}



// 3.
document.write("<br><br><br> Udpate Child Node of Lastname");
var p  = document.getElementById("lastName");
var a  = document.getElementById("lastName").childNodes;
p.removeChild(a[0]);
var newChild = document.createElement('p');
p.innerText="Last Name : Jhon";
p.appendChild(newChild);


var p  = document.getElementById("lastName").innerText;

document.write(  "<br>"+p);


// 4.

var fc= document.getElementById("main-content").firstChild;
var ls = document.getElementById("main-content").lastChild;
console.log(fc);
console.log(ls)



// 5.

var ns= document.getElementById("lastName").nextSibling;
var ps= document.getElementById("lastName").previousSibling;
console.log(ns);
console.log(ps)


// 6.

var pn= document.getElementById("email").parentNode;
var nodt= document.getElementById("email").nodeType;
console.log(pn);
console.log(nodt)