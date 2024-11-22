
function get(x1, y2, x2, y2) {
    const a = y2 - y1;
    const b = x1 - x2;
    const c = a * x1 + b * y1;
    return `${a}x + ${b}y= ${c}`;

}
const x1 = 1, y1 = 2;
const x2 = 3, y2 = 4;
const getstart =  get(x1, y2, x2, y2);
console.log(getstart);


