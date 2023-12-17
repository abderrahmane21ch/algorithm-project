
let message = "There is no war in Ba Sing Se";
function countWords(message) {
    message = message.trim();
    if (message === "") {
        return 0;
    }
    var words = message.split(/\s+/);
    words = words.filter(function (word) {
        return word.length > 0;
    });
    var numWords = words.length;

    return numWords;
}
var result = countWords(message);
console.log('The message contains ' + result + ' words.');


let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];


function generateMessage() {
   
    var randomIndex = Math.floor(Math.random() * countries.length);

    var country = countries[randomIndex];
    var capital = capitals[randomIndex];

    console.log( country + ' has the capital named: ' + capital + '.');
}

generateMessage();

var randomizer = Math.floor(Math.random() * 4);

var fate;
if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}


console.log('Your fate: ' + fate);
function checkSeason(month) {
    
    var lowerCaseMonth = month.toLowerCase();
    if (lowerCaseMonth === 'december' || lowerCaseMonth === 'january' || lowerCaseMonth === 'february') {
        return 'Winter';
    } else if (lowerCaseMonth === 'march' || lowerCaseMonth === 'april' || lowerCaseMonth === 'may') {
        return 'Spring';
    } else if (lowerCaseMonth === 'june' || lowerCaseMonth === 'july' || lowerCaseMonth === 'august') {
        return 'Summer';
    } else if (lowerCaseMonth === 'september' || lowerCaseMonth === 'october' || lowerCaseMonth === 'november') {
        return 'Autumn';
    } else {
        return 'Invalid month';
    }
}

var monthToCheck = 'April';
var result = checkSeason(monthToCheck);
console.log('The season for ' + monthToCheck + ' is: ' + result);



