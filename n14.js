const array = {
    Name: 'Bahare',
    stock: '25000',
    visit: 2,
    mablagh: 3000,
    transaction: 2,

}

if (array.transaction === 1) {
    const variz = array.stock + array.mablagh;
    console.log(array);
    console.log(variz);


} else {
    const bardasht = array.stock - array.mablagh;
    console.log(array);
    console.log(bardasht);


}





// array.map(item => {
//     if (item.bardasht < stock) {
//         console.log(item.stock - item.bardasht);

//     } else if (item.bardasht > stock) {
//         console.log(error);

//     }
// })