//Document Object Model (DOM) manipulation. DOM manipulation allows developers to interact with and modify the 
//structure, style, and content of web pages , that is dom manipulation allows javascript to access html elements
//and style them to manipulate them.
// dom is automaticaly created by the browser after the html page and it is stored in a dom tree structure
// a dom tree structure is a tree like structure , that stores the whole of the html page as nodes in the tree
// A Document Object Model (DOM) tree is a hierarchical representation of an HTML or XML document. It consists of a 
//root node, which is the document itself, and a series of child nodes that represent the elements, attributes, and
// text content of the document.
// dom is not a part of js , rather it is a part of dom api's i.e chrome , safari etc.
// api stands for application programming interface

'use strict';

// selecting and manipulating elements

//this is how we can manipulate html content from js
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);

// handling click events

let secretNumber = Math.trunc((Math.random() * 20) + 1);

let curScore = 20;
let maxScore = 0;

// document.querySelector('.number').textContent = secretNumber;

// to check the number enterred by the user
document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){         // if it is not a number

        document.querySelector('.message').textContent = 'Enter a valid Number';
    }

    else if(curScore == 0){

        document.querySelector('.message').textContent = 
        '☠️ You Lost ! Better Luck Next Time';
    }

    else if(guess < secretNumber){

        document.querySelector('.message').textContent = 'Too Low';

        curScore--;

        document.querySelector('.score').textContent = curScore;
    }

    else if(guess > secretNumber){

        document.querySelector('.message').textContent = 'Too High';

        curScore--;

        document.querySelector('.score').textContent = curScore;
    }

    // won the game
    else {

        if(curScore > maxScore){

            maxScore = curScore;

            document.querySelector('.highscore').textContent = maxScore;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if(curScore > 15){

            document.querySelector('.message').textContent = '🎉You Won , Nice game !!'
        }

        else{

            document.querySelector('.message').textContent = '🎉 You Won , but you can do better !!';
        }
    }
});

// to play the game again
document.querySelector('.again').addEventListener('click' , function(){

    curScore = 20;
    document.querySelector('.score').textContent = curScore;

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.message').textContent = 'Start Guessing...';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#000';

    document.querySelector('.number').style.width = '15rem';
})

