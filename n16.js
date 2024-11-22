const store = [
    { storenumber: 1, salesamount: 375000 },
    { storenumber: 2, salesamount: 600000 },
    { storenumber: 3, salesamount: 400000 },
]
let salesamount = 0;

store.map(item => {
    if (item.salesamount <= 500000) {

        console.log(item.storenumber, item.salesamount, item.salesamount * 3 / 100);

    } else if (item.salesamount >= 500000 && item.salesamount < 700000) {
        console.log(item.storenumber, item.salesamount, item.salesamount * 5 / 100);

    }
})
