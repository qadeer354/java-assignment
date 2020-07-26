var sen = prompt("Enter Sentece to find all succession vowels form that");
sen = sen.toUpperCase();
var newArray = [];
var seni = "";
function delVowel(sentence) {

    var s = sentence;
    var arr = s.split('');
    var count = 0;
    for (let index = 0; index < arr.length - 1; index++) {
        var svalue = arr[index];
        var s1value = arr[index + 1];
        var set = svalue + s1value;
        switch (set) {
            case 'AE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'AU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'EU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'II':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'IU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'OU':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UA':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UE':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UI':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UO':
                count=count+1;
                newArray.push(set);
                break;
                
            case 'UU':
                count=count+1;
                newArray.push(set);
                break;
        }
    }

    var stri = newArray.join(',');
    seni = stri;
    return count;

}

document.write("Input Sentece " + sen +"<br>Number succession Vowel  : "+ delVowel(sen) );
document.write("<br> succession Voweles  : "+seni);