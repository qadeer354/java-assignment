var ch = prompt("Enter A charter to find it's index in string : PAKISTAN");
ch = ch.toUpperCase();
var str = 'PAKISTAN';
function findC(c,s) {
    var che= c;
    var string =s;
    var pos='';
    for (let index = 0; index < string.length; index++) {
        if (string[index]===che) {
            pos=index;
            break;
            
        }
        
    }
    return pos;
}

document.write("Index of "+ch+" is "+findC(ch,str));