let yearOfBirth = prompt("Year of birth:");
const firstName = prompt("Name:");
const lastName = prompt("Surname:");
const CURRENT_YEAR = 2022;
yearOfBirth = parseInt(yearOfBirth, 10);
let age = CURRENT_YEAR - yearOfBirth;
alert("User Bio: " + firstName + " " + lastName + ", " + age + " years old.");