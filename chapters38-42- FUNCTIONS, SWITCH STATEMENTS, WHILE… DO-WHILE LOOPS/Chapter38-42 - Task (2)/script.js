
var inputYear = +prompt("Enter an year to find out it's Leap year or not")

function leapYear(a) {
    if (a%4 === 0) {
        if (a%100 === 0) {
            if (a%400 === 0) {
                return document.write("It's leap Year");    

            } else {
                return document.write("It's not a leap Year");

            }
    
        } else {
            return document.write("It's leap Year");    
        }

    } else {
        return document.write("It's not a leap Year");

    }
}

leapYear(inputYear);