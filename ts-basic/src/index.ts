let a:number = 3
a = 4
let c:any = 4
c = "123"
let d :number | string = "asd"
d = 3
// d = null

let  e: string[] = ['apple', 'mongo']
e.push('gg')

function addNumber (a:number, b:number):number {
    return a+b
}

console.log(a);
console.log(c);

console.log(addNumber(15, 15));
