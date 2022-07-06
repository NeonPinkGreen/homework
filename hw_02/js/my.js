let yearOfBirth = prompt("Year of birth:");
let firstName = prompt("Name:");
let lastName = prompt("Surname:");
const CURRENT_YEAR = 2022;
parseInt(yearOfBirth);
let age = CURRENT_YEAR - yearOfBirth;
alert("User Bio: " + firstName + " " + lastName + ", " + age + " years old.");