'use strict'

var answer1 = prompt('Did Nathan Cashman graduate from college?')
if (answer1.toUpperCase().trim() === 'YES' || answer1.toUpperCase().trim() === 'Y'){
    alert('That is correct!');
} else if (answer1.toUpperCase().trim() === 'NO' || answer1.toUpperCase().trim() === 'N'){
    alert('Actually, I graduated from Drake University.');
} else {
    alert("C'mon, at least try to do this.");
}