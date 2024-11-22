const student = [
    { sName: 'bahare fardbaran', number: 0, code: 1, age: 21, codereshte: 24, codegener: 'girl' },
    { sName: 'faranak fardbaran', number: 1, code: 2, age: 11, codereshte: 12, codegener: 'girl' },
    { sName: 'morad ahmadvand', number: 0, code: 3, age: 16, codereshte: 24, codegener: 'boy' },
    { sName: 'amir norozi', number: 2, code: 4, age: 30, codereshte: 2, codegener: 'boy' },
]
let code = 0;
let age = 0;
let reshte = 0;

student.map(item => {
    if (item.codegener === 'boy' && item.codereshte === 24) {
        code++;
    }
    if (item.age < 18) {
        age++;

    }
    if (item.codereshte === 24) {
        reshte++;
    }
})
reshte = (reshte / student.length) * 100;

console.log(code);
console.log(age);
console.log(reshte);

