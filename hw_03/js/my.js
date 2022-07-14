const firstName = prompt("Name:");
const secondName = prompt("Surname:");
const dayOfBirth = Number(prompt("Day of your birth:"));
const monthOfBirth = Number(prompt("Month of your birth:"));
const yearOfBirth = Number(prompt("Year of birth:"));
const CURRENT_YEAR = 2022;
let age = CURRENT_YEAR - yearOfBirth;
let zodiac;
let isLeapYear = (0 == yearOfBirth % 400) || (0 != yearOfBirth % 100) && (0 == yearOfBirth % 4);
if (isLeapYear){
    switch (monthOfBirth) {
        case 1:
            if (dayOfBirth < 19 && dayOfBirth > 0) {
                zodiac = "Capricorn ♑";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Aquarius ♒";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 2:
            if (dayOfBirth < 18 && dayOfBirth > 0) {
                zodiac = "Aquarius ♒";
            } else if (dayOfBirth <= 29 && dayOfBirth > 0){
                zodiac = "Pisces ♓";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 3:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Pisces ♓";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Aries ♈";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 4:
            if (dayOfBirth < 19 && dayOfBirth > 0) {
                zodiac = "Aries ♈";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Taurus ♉";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 5:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Taurus ♉";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Gemini ♊";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 6:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Gemini ♊";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Cancer ♋";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 7:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Cancer ♋";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Leo ♌";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 8:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Leo ♌";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Virgo ♍";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 9:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Virgo ♍";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Libra ♎";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 10:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Libra ♎";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Scorpio ♏";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 11:
            if (dayOfBirth < 21 && dayOfBirth > 0) {
                zodiac = "Scorpio ♏";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Sagittarius ♐";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 12:
            if (dayOfBirth < 21 && dayOfBirth > 0) {
                zodiac = "Sagittarius ♐";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Capricorn ♑";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        default:
            zodiac = "Incorrect date of birth";
    }
} else {
    switch (monthOfBirth) {
        case 1:
            if (dayOfBirth < 19 && dayOfBirth > 0) {
                zodiac = "Capricorn ♑";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Aquarius ♒";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 2:
            if (dayOfBirth < 18 && dayOfBirth > 0) {
                zodiac = "Aquarius ♒";
            } else if (dayOfBirth <= 28 && dayOfBirth > 0){
                zodiac = "Pisces ♓";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 3:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Pisces ♓";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Aries ♈";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 4:
            if (dayOfBirth < 19 && dayOfBirth > 0) {
                zodiac = "Aries ♈";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Taurus ♉";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 5:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Taurus ♉";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Gemini ♊";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 6:
            if (dayOfBirth < 20 && dayOfBirth > 0) {
                zodiac = "Gemini ♊";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Cancer ♋";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 7:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Cancer ♋";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Leo ♌";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 8:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Leo ♌";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Virgo ♍";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 9:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Virgo ♍";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Libra ♎";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 10:
            if (dayOfBirth < 22 && dayOfBirth > 0) {
                zodiac = "Libra ♎";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Scorpio ♏";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 11:
            if (dayOfBirth < 21 && dayOfBirth > 0) {
                zodiac = "Scorpio ♏";
            } else if (dayOfBirth <= 30 && dayOfBirth > 0){
                zodiac = "Sagittarius ♐";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        case 12:
            if (dayOfBirth < 21 && dayOfBirth > 0) {
                zodiac = "Sagittarius ♐";
            } else if (dayOfBirth <= 31 && dayOfBirth > 0){
                zodiac = "Capricorn ♑";
            } else {
                zodiac = "Incorrect day of birth";
            }
            break;
        default:
            zodiac = "Incorrect date of birth";
    }
}

if (isLeapYear) {
    alert(`User Bio: ${firstName} ${secondName}, ${age} years old (leap year), ${zodiac}`)
} else {
    alert(`User Bio: ${firstName} ${secondName}, ${age} years old, ${zodiac}`)
}
