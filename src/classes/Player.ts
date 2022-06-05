import { IsPlayer } from '../interfaces/IsPlayer.js'

export class Player implements IsPlayer {
    public name: string;
    private age: number;  // access modifier default public
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    getAge() {
       return this.age;
    }
    
    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
}