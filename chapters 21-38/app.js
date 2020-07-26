

function task211(){
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName= firstName+ " " +lastName;
    document.write("<h1> Welcome " + fullName);
}

function favourtMobile(){
    var mobile=prompt("Enter your favorite mobile phone model!");

    document.write("<h1> My favorite phone is: " + mobile);
    document.write("<br>Length of string "+ mobile.length);
}

function search(searchWord){
    var word="Pakistan";
    var searchedIndex=0
    for (let i=0; i<=word.length; i++){
        if (word[i] === searchWord)
            {
                searchedIndex=i;
                break;
            }
    }
    document.write("<h1> String: "+word );
    document.write("<br> Index of 'n': " + searchedIndex);
}

function searchByIndex(){
    var str = "Hello world.";
    var searchedIndex=0
        var indexArr=[];
    var searchWord='l'
    for (let i=0; i<=str.length; i++){
        if (str[i] === searchWord)
            {
                indexArr.push(i);
            }
    }
    document.write("<h1> String: "+str + "<br> Last index of 'l': " + indexArr[indexArr.length-1]);
}

function task212(){
    var str="Pakistan";
    var searchWord;
  
    document.write("<h1>String: " +str);
    document.write("<br> Character at index 3:" +str[3]);

}

function concatination(){
    var str1 = "Hello ";
    var str2 = "world!";
    var str3 = " Have a nice day!";
    var res = str1.concat(str2, str3);
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName=firstName.concat(lastName);
    document.write("<h1> Welcome " + fullName);
}

function  stringReplce(){
    var str = "Hyderabad";
    var res = str.replace("Hyder", "Islam");
    document.write("<h1> City: " + str +"<br> After replacement: " + res);
}
function  stringReplceAll(){
    var str = "Ali and Sami are best friends. They play cricket and football together.";
    var res = str.replace(/and/g, "&");
    document.write("<h1> Actual string: " + str +"<br> After replacement: " + res);
}

function stringToNumber(){
    var str = "472";
    var num=parseInt(str);
    document.write("<h1> Value: "+str + "<br> Type: string");
    document.write("<h1> <br> Value: "+ num + "<br> Type: number");
}

function capitalization(){
    var str=prompt("Enter any text!");
    var res = str.toLocaleUpperCase();
    document.write("<h1> User input: " + str);
    document.write("<br>Upper case "+ res);
}

function stringTitalCase(){
    var str=prompt("Enter any text!");
 
    document.write("<h1> User input: " + str);

    str = str.toLowerCase();   
    str = str.split(' ');
 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

    }
    str.join(' '); 
    
    
    document.write("<br>Title case: "+ str);
    
}

function numbertoString(){
    var num = 35.36;
   
    var myTrunc = num.toFixed(4);

    document.write("<h1> Number: "+num );
    document.write("<br> Result: "+ myTrunc);
}

function inputUserName(){
    var userName=prompt("Enter Username!");
    var found=0
    for (let i=0; i<=userName.length; i++){
        if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
            {
               
                found=1;
                break;
            }
        }
    if (found)
    document.write("Please enter a valid username!");
    else
    document.write("Thank you! you entered a valid username");
}

function bakerySearch(){
    var a=["cake", "apple pie", "cookie", "chips", "patties"]
    var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}

function passwordInputCheck(){
    var password=prompt("Enter valid passwordz");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}



function stringSplit(){
    var str="University of Karachi";
  

    str = str.split('');
    
    for (let i =0; i<str.length; i++){
        document.write(str[i]+"<br>");
    }
}


function printLastCharacter(){
    var str=prompt("Enter any input?");
    document.write("<h1> User input: " + str);
    document.write("<br> Last character: " + str[str.length-1])
}

function wordCount(){
    var str="The quick brown fox jumps over the lazy dog.";
    var word="the";
    var a = str.toLowerCase();   
    var a = a.split(" "); 
   
    let count = 0; 
    for (let i = 0; i <= a.length; i++)  
    { 
    
    if (a[i] === word) 
        count++; 
    }
    document.write("<h1> Text: " + str);
    document.write("<br> There are " + count + " occurrence(s) of word" + word)
}



function integerOperation(){
    var n=prompt("Enter any positive integer?");
    document.write("<h1> number: " + n);
    document.write("<br> round off value: "+ Math.round(n));
    document.write("<br> floor value: "+ Math.floor(n));
    document.write("<br> ceil value: "+ Math.ceil(n));
}

function negativeIntegerOperation(){
    var n=prompt("Enter any negative integer?");
    document.write("<h1> number: " + n);
    document.write("<br> round off value: "+ Math.round(n));
    document.write("<br> floor value: "+ Math.floor(n));
    document.write("<br> ceil value: "+ Math.ceil(n));
}

function absoluteNumber(){
    var n=prompt("Enter any number?");
    document.write("<h1> The absolute value of " + n + " is "+ Math.abs(n));
}

function diceRandom(){
  
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write("<h1> random dice value: " +  numberOfStars);
}

function coinRandom(){
    
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 2) + 1;
    var numberOfStars = Math.floor(improvedNum);
    if (numberOfStars === 1)
        document.write("<h1>" +  numberOfStars +"<br> random coin value: Tails");
    else
        document.write("<h1>" +  numberOfStars +"<br> random coin value: Heads");
}

function hundredRandomNumbers(){
    
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 100) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write("<h1> random number between 1 and 100: " +  numberOfStars );
}

function parseWeight(){
    var weight =prompt("Enter your weight in kilograms?");
    var parseWet=parseFloat(weight);
    document.write("<h1> The weight of user is "+ parseWet +" kilograms");
}
function secretNumberSearch(){
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 10) + 1;
    var numberSecret = Math.floor(improvedNum);

    var userInput =prompt("Enter your any number in between 1 to 10?");
    if (numberSecret === userInput)
    document.write("<h1> Congratulations the user");
    else
    document.write("<h1> Try again"+ numberSecret);
}

function nowDate(){
var rightNow= new Date();
document.write("<h1>"+ rightNow);
}

function currentMonth(){
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var rightNow= new Date();
    var theMonth= rightNow.getMonth()
    document.write("<h1> Current month: "+ monthName[theMonth]);
    }

function nowDay(){
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var theDay = now.getDay();
    var nameOfToday = dayNames[theDay];
    document.write("<h1> Today is "+ nameOfToday);
    }

function funDay(){
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var theDay = now.getDay();
    var nameOfToday = dayNames[theDay];
    if (theDay === 0 || theDay === 6)
        document.write("<h1> its Fun Day ");
    else 
        document.write("<h1> Its working Day ");
    }

function daysCheck(){
    var now = new Date();
    var theDate = now.getDate();
    if (theDate < 15 )
        document.write("<h1> First fifteen days of the month.");
    else 
        document.write("<h1> Last days of the month ");
    }

function elapsedMinutes(){
    var firstDate = new Date("Jan 1, 1970");
    var today= new Date();
    var msTday=today.getTime();
    var msFirstDate=firstDate.getTime();
    // var msDiff=msRamzanDate-msTday;
    var msDiff=msTday-msFirstDate;
    var mintDiff = msDiff / (1000 * 60);
    // dayDiff = Math.floor(dayDiff);

    document.write("<h2> Current Date: "+ today);
    document.write("<br> Elapsed milliseconds since January 1, 1970: "+ msDiff);
    document.write("<br> Elapsed minutes since January 1, 1970: "+ mintDiff);
    }

function noonCheck(){
    var now = new Date();
    var theHours = now.getHours;
    if (theHours >= 12 )
        document.write("<h1> It's PM.");
    else 
        document.write("<h1> It's AM ");
    }

function assignDate(){
    var laterDate = new Date("Dec 31, 2020");
    document.write("<h1> Later date: " + laterDate)
}

function calcDayOfRamzan(){
    var ramzanDate = new Date("June 18, 2015");
    var today= new Date();
    var msTday=today.getTime();
    var msRamzanDate=ramzanDate.getTime();
   
    var msDiff=msTday-msRamzanDate
    var dayDiff = msDiff / (1000 * 60 * 60 * 24);
    dayDiff = Math.floor(dayDiff);
    document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

  
}

function secondDiffFromDate(){
    var referDate = new Date("Dec 05, 2015");
    var beginningDate = new Date("Jan 1, 2015");
    var msReferDate=referDate.getTime();
    var msBeginningDate=beginningDate.getTime();
    var msDiff=msReferDate-msBeginningDate;
    var secondDiff = msDiff / (1000 * 60 );
    secondDiff = Math.floor(secondDiff);
    document.write("<h1> On reference date " + referDate );

    document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");
}

function date1HourAgo(){
    var today = new Date();
    var oneHourAgo =  new Date();   
    oneHourAgo.setHours(today.getHours() - 1);
    document.write("<h1> Current date: " + today );
    document.write("<br> 1 hour ago, it was " + oneHourAgo);
}

function hundredYearsBack(){
    var today = new Date();
    var hundredYearsAgo =  new Date();   
    hundredYearsAgo.setFullYear(today.getFullYear() - 100);
    alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);
}

function ageYearCalculate(){
    var age=prompt("Enter your age");
    var birthYear = new Date();
    birthYear.setFullYear(birthYear.getFullYear() - age);

    document.write("<h1> Your age is " + age );
    document.write("<br> Your birth year is " + birthYear.getFullYear());
}

function kElectricBill(){
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var name="ABC Customer";
    var currentDate = new Date();
    var month=currentDate.getMonth();
    var consumedUnit=410;
    var pricePerUnit=16;
    var surcharge=350;
    var netAmount=consumedUnit*pricePerUnit;
    var grossAmount=netAmount+surcharge;

    document.write("<h1> K-Electric Bill </h1>");
    document.write("<h2> <br>  Customer Name: " + name);
    document.write("<br> Month: " + monthName[month]);
    document.write("<br> Number of units: " + consumedUnit);
    document.write("<br> Charges per unit: " + pricePerUnit);
    document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
    document.write("<br> Late payment surcharge: " + surcharge);
    document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );
}

function currentDateTime(){
var now= new Date();
document.write("<h1>" + now);
}
function greetings(firstName, lastName){
    var fullName=firstName+lastName;
document.write("<h1> Welcome " +fullName);
}

function addTwoNum(){
    var a =+prompt("Enter first number?");
    var b = +prompt("Enter 2nd number?");
    var c=0;
    c=add(a,b);
    document.write("<h1>Sum: " +c);
}
function add(num1,num2){
    return(num1 +num2);
}


function task354(){
    var a =+prompt("Enter first number?");
    var op =prompt("Enter operator for operatioin?");
    var b = +prompt("Enter 2nd number?");
    var c=0;
    c=calculator35(a,op,b);
    document.write("<h1>Result: " +c);
}
function calculator35(num1,op, num2){
    switch(op){
        case "+" :
            return(num1+num2);
            break;
        case "-" :
            return(num1-num2);
            break;
        case "*" :
            return(num1*num2);
            break;
        case "/" :
            return(num1/num2);
            break;
        case "%" :
            return(num1%num2);
            break;
        default :
            return("Invalid!")
    }
}

function squares(num1){
    document.write("<h1> Squares= " + (num1*num1));
}

function task356(){
    var n=+prompt("Enter any number for factorial?");
    document.write("<h1> Factorial of "+n+ " is: "+ factorial(n));
}
function factorial(num){
    var fact=1;
    for (let i=num; i>=1; i--)
        {
            fact=fact*i;
        }
        return fact;
}

function countingPrint(){
    var startNum=+prompt("Enter start number?");
    var endNum=+prompt("Enter end limit?");
    for (let i=startNum; i<=endNum; i++)
        {
            document.write(i+"<br>");
        }
}

function calculateHypotenuse(){
    var base=+prompt("Enter base of triangle?");
    var perpendicular =+prompt("Enter perpendicular?");
    var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
    document.write("<h1> Hypotenuse of a right angle triangle is: " +calculateSquar(hypotenuse));


    function calculateSquar(num){
        return (num*num);
    }
}

function areaOfTriangle(width, height){
    return (width*height);
}
function calculateAreaOfTriangle(){
    var width=prompt("Enter width of Triangle?");
    var height=prompt("Enter height of Triangle?");
    document.write("<h1> Area of Triangle is: " +areaOfTriangle(width,height))
}

function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);
    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function taskNo3510(){
    var str=prompt("Enter any string for Palindrome check?");
    if (palindrome(str))
        {
            document.write("<h1> The string " + str +" is palindrome.")
        }
    else
        document.write("<h1> The string " + str +" is not palindrome.")
}

function task3511(){
    stringTitalCase()
}

function findLongestWord(str) {

    var strSplit = str.split(' ');
    
    var longestWord = 0;
    var longestIndex = 0;

    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length; 
      longestIndex=i;
       }
    }
     
    return strSplit[longestIndex];
  }
function task3512(){
    var str=prompt("Enter any string for finding longest word?")
    document.write("<h1> Longest word is: "+ findLongestWord(str));
}

function wordCount(str, word){

    var a = str.toLowerCase();   
    var a = a.split(""); 
  
    
    let count = 0; 
    for (let i = 0; i <= a.length; i++)  
    { 
    
    if (a[i] === word) 
        count++; 
    }
    return count;
}
function task3513(){
    var str=prompt("Enter string?");
    var word=prompt("Enter letter to check its occurrence?");

    document.write("<h1> Occurrence of letter " + word +" is: " + wordCount(str,word)); 
}
function calCircumference(radi){
    const pi=3.14;
    return 2*pi*radi;
}
function calArea(radi){
    const pi=3.14;
    return pi*radi*radi;
}
function task3514(){
    var r=prompt("Enter radius of circle?");
    document.write("<h1> The circumference is " + calCircumference(r));
    document.write("<br> The area is " + calArea(r));
}




















