# Trivia Trainer

This is an app I developed as a longtime fan of the game show Jeopardy. I always enjoy finding trivia games to practice my general knowledge skills, but am often turned off by the freemium features. When I found the jservice.io API which contains a catalog of historical Jeopardy questions, I knew this was something I wanted to use in a web app build.


**Link to project:** https://tylerspear.github.io/trivia_trainer/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The JSERVICE.IO API provides many API endpoints. For my purposes on this project I only used the /random to return a random question

## Optimizations

Eventually I would like to add a Browse by Category feature to retreive similar questions of a certain category.

## Lessons Learned:

I learned about asynchronous Javascript and DOM manipulation. For example, I wanted to disable the new question button after a new API call and until the 'Reveal Answer' button was clicked.
