// (argoritm(5))

const staff = [
    { sName: 'Ali', salary: 25000 },
    { sName: 'Mohammad', salary: 25000 },
    { sName: 'Amin', salary: 75000 },
    { sName: 'Reza', salary: 115000 },
]

staff.map(item => {
    if (item.salary < 50000) {
        console.log(item.sName, 'moaff');

    } else if (item.salary >= 50000 && item.salary < 100000) {
        console.log(item.sName, 10 / 100 * 50000);

    } else if (item.salary >= 100000) {
        console.log(item.sName, 15 / 100 * 100000);

    }

})