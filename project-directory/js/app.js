'use strict'

var question = 'Did Nathan Cashman graduate from college?';
var answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert('That is correct!');
    console.log("Question 1: '" +question+"' was answered correctly!");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert('Actually, I graduated from Drake University.');
    console.log("Question 1: '" +question+"' was answered incorrectly!");
} else {
    alert("C'mon, at least try to do this.");
    console.log("Question 1: '" +question+"' was not answered!");
}

question = 'Does Nathan Cashman play bass?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("I wish! No, I'm terrible at string instruments.");
    console.log("Question 2: '" +question+"' was answered incorrectly!");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("You're right, string instruments are some of the only instruments I can't play well.");
    console.log("Question 2: '" +question+"' was answered correctly!");
} else {
    alert('Dude, just humor me.');
    console.log("Question 2: '" +question+"' was not answered!");
}

question = 'Does Nathan Cashman live in Cedar Rapids?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("Yep, I've lived here on and off for about 11 years.");
    console.log("Question 3: '" +question+"' was answered correctly!");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("Actually I've lived here for quite some time.");
    console.log("Question 3: '" +question+"' was answered incorrectly!");
} else {
    alert('Why are you even here?');
    console.log("Question 3: '" +question+"' was not answered!");
}

question = 'Does Nathan Cashman like anime?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert('Mmhmm, I even keep up with the current seasons in Japan.');
    console.log("Question 4: '" +question+"' was answered correctly!");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert('Actually, I was a the advisor to my anime club in college.');
    console.log("Question 4: '" +question+"' was answered incorrectly!");
} else {
    alert("Don't you have better things to do?");
    console.log("Question 4: '" +question+"' was not answered!");
}

question = 'Does Nathan Cashman live with his parents?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("Don't rub it in...");
    console.log("Question 5: '" +question+"' was answered correctly!");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("CORRECT! They live with me!");
    console.log("Question 5: '" +question+"' was answered correctly!");
} else{
    alert("Y'know what? I'm done with you... Child.");
    console.log('Error: you have been abandoned.');
}