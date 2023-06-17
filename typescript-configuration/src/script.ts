const bangladesh = 'I love Bangladesh';
console.log(bangladesh)

const inter = 'I read in inter';
console.log(inter)

const level = 'I am level';
console.log(level)


// Function
// a: number, b:number its's called explicit type set 
const explicit = (a: number, b: number) => {
  return a * b;
}

console.log(explicit(2,4));

// array declaration 
//  a | b in this line | this notation called union

let a: (string | number)[] = []

//object

let c : object

// dynamic type or any type 

let w: any