let N = 3;
let month;
let Day;
if (N <= 186) {
    month = parseInt(N / 31 + 1);
    Day = parseInt(N % 31);
}
else if (N > 186) {
    N = N - 186;
    month = parseInt(N / 30 + 7);
    Day = N % 30;
}
console.log(month,'/',Day);
