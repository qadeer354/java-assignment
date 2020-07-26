
function greet() {

  alert("welcome to Java World!");
}

function invalidPassword() {

  alert("Error! Please enter a valid password");
}

function lineBreak() {

  alert("Welcome to JS Land...\n Happy Coding!");
}
function sequence() {
  alert("Welcome to JS Land...");
  alert("Happy Coding! \n Prevent this page from creting additional dialogs.");

}

function consoleMessage() {
  alert("Hello...! I can run JS through my web browser's console");
}

function doSequence() {

  document.getElementById('test').innerHTML = '1';
  alert('2');
 
}

var username;
var myName = "Waseem Abbas Baloch"

function helloMessage() {
  var message = "Hello World"
  alert(message);
}

function studentBioDate() {
  var stdName = "MUHAMMAD SHAHERYAR";
  var age = "20 YEARS";
  var rollNo = "WM6279";
  var stdClass = "Web & Mobile app Development "

  
  var message = "Name: " + stdName + "\nage: " + age + "\nRollNo. " + rollNo + "\nClass: " + stdClass;

  alert(message);
}

function pizza() {
  var pizzaVariable = "PIZZA";
  var pizzaMessage = pizzaVariable + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 1) + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 2)
      + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 3) + "\n" + pizzaVariable.slice(0, pizzaVariable.length - 4)

  alert(pizzaMessage);
}

function emailMessage() {
  var email = "example@example.com";
  var message = "My email address is " + email
  alert(message);
}
function bookMessage() {
  var book = "A smarter way to learn JavaScript";
  var message = "I am trying to learn the Book " + book
  alert(message);
}

function broswerMessage() {
  document.write("Yah! I can write HTML content through JavaScript");
}

function symbolMessage() {
  var message = "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u0153" + "\u2111" + "\u2297" + "\u0153" + "\u2111" + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 " + "\u2014 "
  alert(message);

}


function ageMessage3() {
  var age = "19";
  var message = "I am " + age + " years old"
  alert(message);
}


function incrementAndShowValue() {

  var hitsCount = 0
  var message;

  if (hitsCount == null || hitsCount == 0) {

      hitsCount = 1;
  } else {

      hitsCount += 1;
  }
  
    message = "You have visited this site " + hitsCount + " times";

  alert(message);
}

function broswerMessageForBirth() {
  var birthYear = 1990;
  var message = "My birth year is " + birthYear + "\nDate type of my declared variable is number";
  document.write(message);
}

function broswerMessageForClothing() {
  var visitorName = "John Doe"
  var productTitle = " T-shirts"
  var quantity = 5
  var message = visitorName + " ordered " + quantity + productTitle + "on XYZ Clothing store."

  document.write(message);
}


function broswerMessageForIllegal() {
  var variable1, variable2, variable3;
  var txt = "Hello"
  var ruleVariable = "Rules for naming JS veriables"
  

  var message = "Variables names can only, numbers, $ and _. For example $my_1stVeriable" +
      "<br> Variable must begin with a letter, $ or  _. For example : $name, _name or name" +
      "<br> Variable name are case sensitive" + "<br> Variable names should not be JS keywords";

  document.write(ruleVariable.bold());

  document.write("<br>")
  document.write("<br>")
  document.write("<br>")

  document.write(message);
}

function addTwoNuumbers() {
  var variable1 = 3;
  var variable2 = 5;
  var variable3 = variable1 + variable2;

  document.write("Sum of " + variable1 + " and " + variable2 + " is " + variable3);
}

function operationsTwoNuumbers() {
  var variable1 = 3;
  var variable2 = 5;
  var variable3 = variable1 + variable2;

  var _sub = variable2 - variable1;
  var _mul = variable2 * variable1;
  var _div = variable2 / variable1;
  var _mod = variable2 % variable1;

  document.write("Subtraction of " + variable2 + " and " + variable1 + " is " + _sub + "<br>");
  document.write("Multiplication of " + variable2 + " and " + variable1 + " is " + _mul + "<br>");
  document.write("Division of " + variable2 + " and " + variable1 + " is " + _div + "<br>");
  document.write("Modulus of " + variable2 + " and " + variable1 + " is " + _mod + "<br>");

}
function jsMathematicExpression() {
  var variable1;
  document.write("Value after variable declaration is: " + variable1);
  variable1 = 5;
  document.write("<br>Initial value: " + variable1);
  variable1 = variable1 + 1;
  document.write("<br>Value after increment is: " + variable1);
  variable1 = variable1 + 7;
  document.write("<br>Value after addition is: " + variable1);
  variable1 = variable1 - 1;
  document.write("<br>Value after decrement is: " + variable1);
  variable1 = variable1 % 3;
  document.write("<br>The remainder is: " + variable1);
}
function movieTicket() {
  var costOfTicket = 600;
  var totalCost = costOfTicket * 5
  document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR")
}
function mathTable() {
  var tableNumber = 4
  var i = 1;
  var multiplier;

  
  document.write("Table of 4 ");

  for (i = 1; i <= 10; i++) {
      document.write("<br>" + tableNumber + "x" + i + "=" + i * tableNumber);
   
  }

}

function temperatureConverter() {
  var celsiusTemperature = 25;
  var fahrenheitTemperature = 70;
  var resultInCelsius = ((fahrenheitTemperature - 32) * 5 / 9);
  var resultInFahrenheit = ((celsiusTemperature * 9 / 5) + 32);
  var icon = "0";
  var result = icon.sup();

  document.write(celsiusTemperature + result + "C is " + resultInFahrenheit + result + "F <br>");
  document.write(fahrenheitTemperature + result + "F is " + resultInCelsius + result + "C <br>");

}
function shoppingCart() {
  var priceOfItem1 = 650;
  var priceOfItem2 = 100;
  var quantityOfItem1 = 3;
  var quantityOfItem2 = 7;
  var shippingCharge = 100;

  var totalCharges = ((quantityOfItem1 * priceOfItem1) + (quantityOfItem2 * priceOfItem2) + shippingCharge)

  document.write("<h1> Shopping Cart </h1>")
  document.write("Price of Item1 is " + priceOfItem1 + "<br>");
  document.write("Quantity of Item1 is " + quantityOfItem1 + "<br>");
  document.write("Price of Item2 is " + priceOfItem2 + "<br>");
  document.write("Quantity of Item2 is " + quantityOfItem2 + "<br> <br>");
  document.write("Total cost of your order is " + totalCharges + "<br>");
}
function resultInPercentage() {
  var totalMarks = 980;
  var obtainedMark = 804;
  var result = obtainedMark / totalMarks * 100;


  document.write("<h1> Marks Sheet </h1> <br> <br>")
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + obtainedMark + "<br>");
  document.write("Percentage: " + result + "<br>");

}
function currencyConversion() {
  var usDollars = 10;
  var saudiRiyals = 25;
  var result = (usDollars * 104.80) + (saudiRiyals * 28);

  document.write("<h1> Currency in PKR </h1> <br> <br>")
  document.write("Total Currency in PKR: " + result);
}

function arthemeticSequence() {
  var userVaeriable = 7;
  var result = ((userVaeriable + 5) * 10) / 2;

  alert("Result: " + result);

}
function ageCalculator() {
  var currentYear = 2016;
  var birthYear = 1992;
  var age = currentYear - birthYear;
  document.write("<h1> Age Calculator </h1> <br> <br>")
  document.write("Current Year: " + currentYear);
  document.write("<br> Birth Year: " + birthYear);
  document.write("<br> Your Age is: " + age);
}
function geometrizer() {
  var radius = 20;
  const pi = 3.142;
  var circumference = 2 * pi * radius;
  var areaOfCircle = pi * radius * radius;
  document.write("<h1> The Geometrizer </h1> <br> <br>")
  document.write("Radius of a circle: " + radius);
  document.write("<br> The circumference is: " + circumference);
  document.write("<br> The are is: " + areaOfCircle);

}
function lifetimeSupplyCalculator() {
  var favourSnack = "Chocolate Chip";
  var currentAge = 15;
  var maxAge5 = 65;
  var estimatedAmount = 3;
  var ageLift = maxAge5 - currentAge;

  document.write("<h1> The Lifetime Supply Calculator </h1> <br> <br>")
  document.write("Favourite Snack: " + favourSnack);
  document.write("<br> Current age: " + currentAge);
  document.write("<br> Estimated Maximuim Age: " + maxAge5);
  document.write("<br> Amount of snacks per day: " + estimatedAmount);
  document.write("<br> You will need  " + ageLift * estimatedAmount + " " + favourSnack + " to last you until the ripe old age of " + maxAge5);
}

function task61() {
  var a = 10;
  document.write("Result:");
  document.write("<br> The value of a is: " + a);
  document.write("<br>............................................... <br> <br>");
  document.write("<br> The value of ++a is: " + ++a);
  document.write("<br> Now the value of a is: " + a);

  document.write("<br> <br>");
  document.write("<br> The value of a++ is: " + a++);
  document.write("<br> Now the value of a is: " + a);

  document.write("<br> <br>");
  document.write("<br> The value of --a is: " + --a);
  document.write("<br> Now the value of a is: " + a);

  document.write("<br> <br>");
  document.write("<br> The value of a-- is: " + a--);
  document.write("<br> Now the value of a is: " + a);

}
function task62() {
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  document.write("a is " + a);
  document.write("<br> b is " + b);
  document.write("<br> result is " + result);
}
function task63() {
  var name = prompt("Enter your name", "Enter your name")
  document.write("Welcome ", name);
}

function task65() {
  var tableNumber = prompt("Enter number for Multiplication Table");
  var i = 1;
  var multiplier;

  if (tableNumber == null) {
    
      tableNumber = 5;
  }
  else {
      tableNumber = tableNumber
  }

  document.write("Table of ", tableNumber);

  for (i = 1; i <= 10; i++) {
      document.write("<br>" + tableNumber + "x" + i + "=" + i * tableNumber);
    
  }

}
function studentSubjectMarks() {
  var subject1 = prompt("Enter First Subject name");
  var subject2 = prompt("Enter 2nd Subject name");
  var subject3 = prompt("Enter 3rd Subject name");
  var totalMars = 100;
  var obtainedMark1 = prompt("Enter First Subject obtained marks");
  var obtainedMark2 = prompt("Enter 2nd Subject obtained marks");
  var obtainedMark3 = prompt("Enter 3rd Subject obtained marks");


}
  

function cityCheck(){
  var cityName=prompt("Enter city name");

  if (cityName === "Karachi")
      {
          document.write("Welcome to city of light. ");
      }
  else 
      {
          document.write("You live out of Karachi.");                
      }
}

function genderCheck(){
  var gender=prompt("Enter Gender");

  if (gender === "Male" || gender === "male")
      {
          document.write("Good Morning Sir. ");
      }
  else 
      {
          document.write("Good Morning Ma'am.");                
      }
}
function fuelCheck(){
  var fuel=prompt("Enter fuel in litres");

  if (fuel < 0.25)
      {
          document.write("Please refill the fuel in your car. ");
      }
  else 
      {
          document.write("Enjoy the journey.");                
      }
}

function alertMessageCheck(){
  var a=4;
  if (++a === 5)
      {
          alert("Given condition for variable a is true. ");
      }
  var b=82;
  if (b++ === 83)
     {
          alert("Given condition for variable b is true. ");
      }
  var c=12;
  if (a++ === 13)
      {
          alert("condition 1 is true.");
      }
  if (c === 13)
      {
          alert("condition 2 is true.  ");
      }
  if (++c === 14)
      {
          alert("condition 3 is true.  ");
      }
  if (c === 14)
      {
          alert("condition 4 is true.");
      }
  var materialCost=20000;
  var laborCost=2000;
  var totalCost=materialCost+laborCost;
  if (totalCost === laborCost+materialCost)
      {
          alert("The cost equals. ");
      }
  if (true){
      alert("True <br>");
  }
  if (false){ alert("False");}
  if ("car" < "cat"){
      alert("car is smaller than cat");
  }
}
function marksSheet(){
  var obtainedMarks = [2];
  var totalMarks = [2];
  var i=0,a;
  var sumOfTotalMarks=0, sumOfObtainedMarks=0, percentage=0, grade, remarks;

  for (i=0; i <=2; i++){
      totalMarks[i]= prompt("Enter total marks of subject " + (i+1));
      

      sumOfTotalMarks += parseInt(totalMarks[i]);
  }

  for (i=0; i <=2; i++){
      obtainedMarks[i]= prompt("Enter obtained marks of subject " + (i+1));
     

      sumOfObtainedMarks += parseInt(obtainedMarks[i]);

  }


  percentage=sumOfObtainedMarks/sumOfTotalMarks*100.0

  if (percentage>=80){
      grade="A-One";
      remarks="Excellant"
  }
  else if (percentage>=70 && percentage <= 79.99){
      grade="A";
      remarks="Good"
  }
  else if (percentage>=60 && percentage <= 69.99){
      grade="B";
      remarks="You need to improve"
  }
  else {
      grade="Fail";
      remarks="Sorry"
  }
  document.write("<h1> Marks Sheet </h1> <br> <br>")
  document.write("Total Marks: " + sumOfTotalMarks);
  document.write("<br> Mark Obtained: " + sumOfObtainedMarks);
  document.write("<br> Percentage: " + percentage);
  document.write("<br> Grade: " + grade);
  document.write("<br> Remarks: " + remarks);
}

function secretNumber(){
  var actualNumber=5;
  var userNumber;
  userNumber=prompt("Enter secret number! ");
  if (actualNumber === userNumber){
      document.write("Bingo! Correct answer.")
  }
  else if (actualNumber === userNumber+1) {
      document.write("Close enough to the correct answer")
  }
  else{document.write("Sorry next time!"+actualNumber + " " + userNumber)}
}
function divisible3Check(){
  var userInput;
  userInput=prompt("Enter any number!")
  if (userInput % 3 === 0){
      document.write("<h1> The number " + userInput + " is Divisible by 3 </h1>");
  }
  else { document.write("<h1> The number " + userInput + " is not divisible by 3 </h1>");}
}

function calculator(){
  var a=Number(prompt("Enter First number:"));
  var b = Number(prompt("Enter 2nd number:"));
  var op= prompt("Enter operator for operation?");
  var c=0;
  if (op === '+')
      {
          document.write(a + op + b + "=" + (a+b));
      }
  else if (op === '-')
  {
      document.write(a + op + b + "=" + (a-b));
  }
  else if (op === '*')
  {
      document.write(a + op + b + "=" + (a*b));
  }
  else if (op === '/')
  {
      document.write(a + op + b + "=" + (a/b));
  }
  else if (op === '%')
  {
      document.write(a + op + b + "=" + (a%b));
  }
  else { alert("Illegal operation")}
}

function evenOddCheck(){
  var userInput;
  userInput=prompt("Enter any number!")
  if (userInput % 2 === 0){
      document.write("<h1> Even number </h1>");
  }
  else { document.write("<h1> Odd number </h1>");}
}
function temperatureCheck(){
  var userTemperature;
  userTemperature=prompt("Enter Temperature!")
  if (userTemperature > 40){
      document.write("<h1> It is too hot outside. </h1>");
  }
  else if (userTemperature >=30 && userTemperature < 40){
       document.write("<h1> The Weather today is Normal </h1>");
      }
  else if (userTemperature >=20 && userTemperature < 30){
      document.write("<h1> Today's Weather is cool </h1>");
      }
  else{
      document.write("<h1> OMG! Today's weather is so cool </h1>");
  }    
}


function digitCharacterCheck(){
  var valueInput=prompt("Enter any character");
  var asciCode= valueInput.charCodeAt(0);

  if (asciCode >=45 && asciCode<=57)
      {
          document.write("You enter a digit");
      }
  else if (asciCode >=65 && asciCode<=90)
      {
          document.write("You enter a capital letter");
      }
  else if (asciCode >=97 && asciCode<=122)
      {
          document.write("You enter a small letter");
      }
  else 
      {
          document.write("You enter a special character");
      }
}
function largerCheck(){
  var firstNumber=prompt("Enter 1st number");
  var scondNumber=prompt("Enter 2nd number");

  if (firstNumber === scondNumber)
      {
          document.write("Both digits are equal.");
      }
  else if (firstNumber > scondNumber)
      {
          document.write("First Number is larger i.e. " + firstNumber);
      }
  else 
      {
          document.write("Second number is larger i.e. "+ scondNumber);
      }
}
function positiveCheck(){
  var firstNumber=prompt("Enter any number");

  if (firstNumber < 0)
      {
          document.write("You entered Negative number. ");
      }
  else if (firstNumber > 0)
      {
          document.write("You entered Positive number. ");
      }
  else 
      {
          document.write("You entered Zero.");                
      }
}
function vowelCheck(){
  var valueInput=prompt("Enter any character");
  var asciCode= valueInput.charCodeAt(0);
  
  if (asciCode === 65 || asciCode === 69 || asciCode === 73 || asciCode === 79 || asciCode === 85 
      || asciCode === 97 || asciCode === 101 || asciCode === 105 || asciCode === 111 || asciCode === 117 )
      {
          document.write("Yes! you enter a Vowel Character.");
      }
  else 
      {
          document.write("No. You enter other Character");
      }
}
function passwordCheck(){
  var validPassword="abc123";
  var inputPassword=prompt("Enter password:");
  if (inputPassword == null)
      {
          document.write("Please enter your password");            
      }
  else if (inputPassword !== validPassword)
      {
          document.write("Incorrect password");
      }
  else
      {
          document.write("Correct! The password you entered matches the original password");
      }

}
function Task126(){
  var greeting;
  var hour =13;
  
  if (hour <18){
      greeting="Good Day";
      document.write(greeting);
  }
  else {
      greeting="Good Evening"
      document.write(greeting);
  }
}
function timeCheck12(){
  var timeInput=prompt("Enter time in 24 hours clock format!");
  if (timeInput >= 0000 && timeInput < 1200)
      {
          document.write("Good morning!");
      }
  else if (timeInput >= 1200 && timeInput < 1700)
      {
          document.write("Good afternoon!");
      }
  else if (timeInput >= 1700 && timeInput < 2100)
  {
      document.write("Good evening!");
  }
  else if (timeInput >= 2100 && timeInput <= 2359)
  {
      document.write("Good night!");
  }
  else 
  {
      document.write("Your enter wrong time.")
  }
}


function task1to6(){
  var empty = [];
  var myObject = new Array();
  var province = ["Sindh", "Punjab", "KPK", "Balochistan"];
  var stdAge = new Array(15,17,18);
  var boolean = [0, 1, 1, 0];
  var mixed = [1, "Punjab", 2, "Balochistan"];

document.write("var empty = []; <br> var myObject = new Array(); <br> var province = [" + "Sindh," +"Punjab,"+ "KPK," +"Balochistan]; <br>  var stdAge = new Array(15,17,18); <br> var boolean = [0, 1, 1, 0]; <br> var mixed = [1," + "Punjab, 2,"+ "Balochistan];")

}
function qualification(){
  var qualifications =["SSC", "HSC", "BCS","BS","BCOM","MS","M.Phil.","PhD"];
  document.write("<h1> Qualifications: </h1>");
  for (let i=0; i<qualifications.length; i++)
      {
          document.write((i+1)+") " + qualifications[i] + "<br>");
      }
}

function studentPercentage(){
  var names =["Michael", "John", "Tony"];
  var marks = [320, 230, 480];
  var totalMarks=500;
  
  for (let i=0; i<3; i++)
      {
         
          document.write("<h2> Score of "+ names[i] + " is "+ marks[i]+ ". Percentage: "+marks[i]/totalMarks*100 +"% <br> </h2>");
          
      }
}
function colorArray(){
  var colors =["White", "Red", "Black"];
  var newColor;
  var newIdex;

  document.write("<h2> Actual Array.</h2> <br>")
  for (let i=0; i<colors.length; i++)
      {
          document.write((i+1)+") " + colors[i] + "<br>");
      }
  newColor=prompt("Enter new color to add at the begenning!");
  colors.unshift(newColor);
  document.write("<h2> a.Added new color at the beginning.</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }

  newColor=prompt("Enter new color to add at the end!");
  colors.push(newColor);
  document.write("<h2> b.Added new color at the end.</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }

  colors.unshift("Brown", "Yellow");
  document.write("<h2> c.Added two more new color at the beginning.</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }
  colors.shift();
  document.write("<h2> d.First Color Deleted ...</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }

  colors.pop();
  document.write("<h2> e.Last color Deleted ...</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }
  newIdex=prompt("Enter index to add new color!");
  newColor=prompt("Enter new color to add at given index!");
  
  colors.splice(newIdex,0,newColor)

  document.write("<h2> f.Array after adding new color at mentioned index  ...</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }

  newIdex=prompt("Enter index to delete color(s) from Array!");
  let indexLimit=prompt("Enter index limit that how many you want to delete!");
  
  colors.splice(newIdex,indexLimit);

  document.write("<h2> g.Array after deleting color at mentioned index  ...</h2> <br>")
  for (let i=0; i<colors.length; i++)
  {
      document.write((i+1)+") " + colors[i] + "<br>");
  }
}
function arraySort(){
  var student=[320, 230, 480, 120];
  document.write("<h2> Scores of Students:" + student +"<br>");

  student.sort();
  document.write("Scores of Students:" + student + "</h2>");
}
function citiesTask() {
  var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  var selectedCities=[];
  selectedCities.push(cities[2],cities[3]);

  document.write("<h2>Cities list:<br>");
  document.write (cities);
  document.write("<br> <br>");
  document.write("<h2>Selected cities list:<br>");
  document.write (selectedCities);
     
}
function margeString(){
  var arr=["This", "is", "my", "cat"];
  var joinArr=arr.join(" ");
  document.write("<h1>Array:<br>");
  document.write (arr);
  document.write("<br> <br>");
  document.write("String:<br>");
  document.write (joinArr);
}





