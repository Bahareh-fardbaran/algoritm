const N = 80;
let sum = 0;
let count = 0;

for (let i = 1; i <= N; i++) {
    if (N % i === 0 && i % 4 === 0) {
        console.log(i);
        sum += i;
        count++;

    }
}
console.log(sum);
console.log(count);








