let myFunc: Function; // function with first letter capital

// myFunc = 'a'; // error
myFunc = (a: string, b: string = 'console', c?:string) : void => { // c is optional string, void is return type
    console.log(`Hello  ${a} from function ${b}`);
}

myFunc('Ahosan');
