
let n = 213650
let even = 0;
let odd = 0;
let zero = 0;

while (n > 0) {
    let b = n % 10;
    console.log(b);
    n = parseInt(n / 10);
    if (b % 2 === 0) {
        even++;
    }
    else {
        odd++;
    }
    if (b === 0) {
        zero++;
    }
}
console.log('number of even digit:', even);
console.log('number of odd digit:', odd);
console.log('number of zero digit:', zero);
