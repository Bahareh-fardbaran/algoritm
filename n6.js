let N = 18;
let sum = 0;
if (N > 0) {
  let b = N % 10;
  let s = parseInt(N / 10);
  sum = s + b;
}
console.log(sum);


if (N % sum === 0) {
  console.log("bakhsh pazir ast");

} else {
  console.log("bakhsh pazir nist");

}