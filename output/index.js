"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const players = []; // players array must be an object of Player ckass
players.push(mashrafi); // example
