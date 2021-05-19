let a; //any type
a = "25";
a = 25;
let b = 30; //strictly number
let c: number;
c = "25"; //error 

type Style = "bold" | "italic" | 23; //specifically setting type of Style

let font: Style;
font = "monospace"; //error

interface Person {
  first: string;
  last: string;
}

const person1: Person = {
  first: "Adi",
  last: "Sid",
};

const person2: Person = {
  first: "ABC",
  last: "BCC",
};

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(5, 10);

//arrays

type MyList = [number?, string?, boolean?]; // ? means optional

const arr: MyList = [];

arr.push(1);
arr.push("23");
arr.push(false);


//generics 

class Observable<T> {
    constructor(public value: T){}
}

let x: Observable<number>;
let y: Observable<Person>;

let z = new Observable(23);
