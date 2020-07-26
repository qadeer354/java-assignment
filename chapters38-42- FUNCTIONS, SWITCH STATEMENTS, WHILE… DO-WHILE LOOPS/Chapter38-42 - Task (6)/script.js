var sen = prompt("Enter Sentece to delete all vowels form that");
sen = sen.toUpperCase();


function delVowel(sentence) {

    var s = sentence;
    var arr =s.split('');
    if (s.length<25) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index]=='A'||arr[index]=='E'||arr[index]=='I'||arr[index]=='O'||arr[index]=='U') {
                arr.splice(index,1);
            }
        }
        
        var stri =arr.join('');
        return stri;
    } else {
        alert("Your sentence must be less than 25 characters ");
    }
  
}

document.write("Input Sentece "+sen+"<br> After Removal of Vowel : "+delVowel(sen));