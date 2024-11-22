let n = 100;
let a = 0;
let i = 0;
let c;

if (n > 0) {
    while (n > 0) {
        c = n % 10;
        a = a + c * 3 ** i;
        n = parseInt(n / 10), i++;
    }

    console.log('add dar mabnaye 3 :', a)
}

else {
    console.log('none');

}