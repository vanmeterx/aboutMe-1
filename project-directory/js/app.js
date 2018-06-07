'use strict';

var question = 'Did Nathan Cashman graduate from college?';
var answer = prompt(question);
var correct = 0;
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert('That is correct!');
    console.log("Question 1: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert('Actually, I graduated from Drake University.');
    console.log("Question 1: '" +question+"' was answered incorrectly! Answer given: '"+answer+"'");
} else {
    alert("C'mon, at least try to do this.");
    console.log("Question 1: '" +question+"' was not answered!");
}
var el = document.getElementById('answer1');
el.innerHTML = answer;

question = 'Does Nathan Cashman play bass?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("I wish! No, I'm terrible at string instruments.");
    console.log("Question 2: '" +question+"' was answered incorrectly! Answer given: '"+answer+"'");
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("You're right, string instruments are some of the only instruments I can't play well.");
    console.log("Question 2: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else {
    alert('Dude, just humor me.');
    console.log("Question 2: '" +question+"' was not answered!");
}
el = document.getElementById('answer2');
el.innerHTML = answer;

question = 'Does Nathan Cashman live in Cedar Rapids?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("Yep, I've lived here on and off for about 11 years.");
    console.log("Question 3: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("Actually I've lived here for quite some time.");
    console.log("Question 3: '" +question+"' was answered incorrectly! Answer given: '"+answer+"'");
} else {
    alert('Why are you even here?');
    console.log("Question 3: '" +question+"' was not answered!");
}
el = document.getElementById('answer3');
el.innerHTML = answer;

question = 'Does Nathan Cashman like anime?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert('Mmhmm, I even keep up with the current seasons in Japan.');
    console.log("Question 4: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert('Actually, I was a the advisor to my anime club in college.');
    console.log("Question 4: '" +question+"' was answered incorrectly! Answer given: '"+answer+"'");
} else {
    alert("Don't you have better things to do?");
    console.log("Question 4: '" +question+"' was not answered!");
}
el = document.getElementById('answer4');
el.innerHTML = answer;

question = 'Does Nathan Cashman live with his parents?';
answer = prompt(question);
if (answer.toUpperCase().trim() === 'YES' || answer.toUpperCase().trim() === 'Y'){
    alert("Don't rub it in...");
    console.log("Question 5: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else if (answer.toUpperCase().trim() === 'NO' || answer.toUpperCase().trim() === 'N'){
    alert("CORRECT! They live with me!");
    console.log("Question 5: '" +question+"' was answered correctly! Answer given: '"+answer+"'");
    correct++;
    console.log(correct);
} else{
    alert("Y'know what? I'm done with you... Child.");
    console.log('Error: you have been abandoned.');
}
el = document.getElementById('answer5');
el.innerHTML = answer;

question = "I'm thinking of a number between 1 and 10, what is it?";
var randomNumber = Math.floor(Math.random()*10+1);
answer = prompt(question);
var guess = 1;
while (Number(answer) !== randomNumber){
    if (answer === null){
        console.log('Exitting loop.');
        break;
    } else if (isNaN(Number(answer))=== true){
        answer = prompt('That is not a number, try again.');
        guess++;
    }
    else {
        if (Number(answer) > randomNumber){
            answer = prompt('Too high, guess again!');
        } else if (answer < randomNumber){
            answer = prompt('Too low, guess again!');
        } else {
        }
        guess++;
        console.log(guess);
    }
    if (guess === 4 && Number(answer) !== randomNumber){
        alert("That's enough, it was "+randomNumber+".");
        break;
    } else if (answer !== null && Number(answer) === randomNumber){
        if (guess === 1){
            alert('You got it on your first try!');
            correct++;
        } else {
            alert('You got it in '+guess+' tries!');
            correct++;
        }
    }
}


console.log(correct);
el = document.getElementById('answer6');
el.innerHTML = answer;

var instruments = ['trombone', 'euphonium', 'trumpet', 'clarinet', 'saxophone', 'french horn', 'tuba'];
console.log(instruments);
question = "What is one instrument Nathan Cashman is proficient on?";
guess = 1;
answer = prompt(question);
while (instruments.indexOf(answer.toLowerCase().trim()) < 0){
    if (answer === null){
        console.log('Exitting loop.');
        break;
    } else{ 
    answer = prompt("I am not proficient on "+answer.toLowerCase().trim()+". Guess again!");
    guess++;
    } 
    if (guess === 6 && (instruments.indexOf(answer.toLowerCase().trim()) < 0)){
        alert("I actually play "+ instruments.join(', ' )+".");
        break;
    } else if (answer !== null && (instruments.indexOf(answer.toLowerCase().trim()) === 1)){
        if (guess === 1){
            alert('One guess is all you need! In fact, I play '+ instruments.join(', ' ));
            correct++;
        } else {
            alert("You got it in "+guess+" tries! I play "+ instruments.join(', ' )+".");
            correct++;
        }
    }
}

el = document.getElementById('answer7');
el.innerHTML = answer;

alert("You answered "+correct+" correct out of a possible 7!");