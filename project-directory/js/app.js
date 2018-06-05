'use strict'

var answer1 = prompt('Did Nathan Cashman graduate from college?');
if (answer1.toUpperCase().trim() === 'YES' || answer1.toUpperCase().trim() === 'Y'){
    alert('That is correct!');
} else if (answer1.toUpperCase().trim() === 'NO' || answer1.toUpperCase().trim() === 'N'){
    alert('Actually, I graduated from Drake University.');
} else {
    alert("C'mon, at least try to do this.");
}

var answer2 = prompt('Does Nathan Cashman play bass?');
if (answer2.toUpperCase().trim() === 'YES' || answer2.toUpperCase().trim() === 'Y'){
    alert("I wish! No, I'm terrible at string instruments.");
} else if (answer2.toUpperCase().trim() === 'NO' || answer2.toUpperCase().trim() === 'N'){
    alert("You're right, string instruments are some of the only instruments I can't play well.");
} else {
    alert('Dude, just humor me.');
}

var answer3 = prompt('Does Nathan Cashman live in Cedar Rapids?');
if (answer3.toUpperCase().trim() === 'YES' || answer3.toUpperCase().trim() === 'Y'){
    alert("Yep, I've lived here on and off for about 11 years.");
} else if (answer3.toUpperCase().trim() === 'NO' || answer3.toUpperCase().trim() === 'N'){
    alert("Actually I've lived here for quite some time.");
} else {
    alert('Why are you even here?');
}

var answer4 = prompt('Does Nathan Cashman like anime?');
if (answer4.toUpperCase().trim() === 'YES' || answer4.toUpperCase().trim() === 'Y'){
    alert('Mmhmm, I even keep up with the current seasons in Japan.');
} else if (answer4.toUpperCase().trim() === 'NO' || answer4.toUpperCase().trim() === 'N'){
    alert('Actually, I was a the advisor to my anime club in college.');
} else {
    alert("Don't you have better things to do?");
}

var answer5 = prompt('Does Nathan Cashman live with his parents?');
if (answer5.toUpperCase().trim() === 'YES' || answer5.toUpperCase().trim() === 'Y'){
    alert("Don't rub it in...");
} else if (answer5.toUpperCase().trim() === 'NO' || answer5.toUpperCase().trim() === 'N'){
    alert("CORRECT! They live with me!");
} else{
    alert("Y'know what? I'm done with you... Child.");
}