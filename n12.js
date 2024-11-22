
const secret = Math.floor(Math.random() * 1000) + 1;
let guess;
let attempts = 0;
while (guess !== secret) {
    guess = parseInt()

    attempts++;
    if (guess < secret) {
        console.log('your guess is low');

    } else if (guess > secret) {
        console.log('your guess is upper');

    } else {
        console.log('you win!');

    }
}



