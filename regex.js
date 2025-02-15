// This is the imformation to be extracted

let myAluProfile = {
    Email : "e.uyo@alustudent.com",
    Phonenumber : "705-895-0905",
    Time : "1:53 PM",
    Currencyamount : "$40.56"
 }

let regEmail = /\w\.?\w+@alu(education|student)\.com/; // Extracts an email in the format of an ALU email for students and teachers
let myEmail = myAluProfile.Email.match(regEmail);
console.log(myEmail[0]); // Gets on the value using the index and leaves out the imdex, input and group

let regNumber = /(\+?[0-9])?[ -]?\(?(\d{3}\)?[ -.]?)(\d{3}[ -.]?)(\d{4})/; /*Extracts numbers in the format of "3-3-4" in with varying additions
like the ".", "-", or "()" */
let myPhoneNumber = myAluProfile.Phonenumber.match(regNumber);
console.log(myPhoneNumber[0]);

let regTime = /\d\d?:\d\d\s(AM|PM)?/; // Extracts the time in either a 12  or 24-hour format
let myTime = myAluProfile.Time.match(regTime);
console.log(myTime[0]);

let regAmount = /\$\d+(?:,?\d+)*(?:\.\d+)?/; /* Extracts an amount of money in dollars by accounting for the presence of a comma, a decimal 
point and numbers after said decimal point */
let myAmount = myAluProfile.Currencyamount.match(regAmount);
console.log(myAmount[0]);






