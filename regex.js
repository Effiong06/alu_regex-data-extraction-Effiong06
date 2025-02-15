// This is the imformation to be extracted

let myAluProfile = {
    Email : "e.uyo@alustudent.com",
    Phonenumber : "705-895-0905",
    Time : "1:53 PM",
    Currencyamount : "$40.56"
 }

let regEmail = /\w\.?\w+@alu(education|student)\.com/;
let myEmail = myAluProfile.Email.match(regEmail);
console.log(myEmail[0]);

let regNumber = /(\+?[0-9])?[ -]?\(?(\d{3}\)?[ -.]?)(\d{3}[ -.]?)(\d{4})/;
let myPhoneNumber = myAluProfile.Phonenumber.match(regNumber);
console.log(myPhoneNumber[0]);

let regTime = /\d\d?:\d\d\s(AM|PM)?/;
let myTime = myAluProfile.Time.match(regTime);
console.log(myTime[0]);

let regAmount = /\$\d+(?:,?\d+)*(?:\.\d+)?/;
let myAmount = myAluProfile.Currencyamount.match(regAmount);
console.log(myAmount[0]);






