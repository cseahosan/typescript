class Player {
    private name: string;
    public age: number;  // access modifier default public
    readonly country: string;

    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
}

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');

// console.log(mashrafi.name) //error because private
// mashrafi.country = 'India'; // error because readlnly