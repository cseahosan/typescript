import { Player } from './classes/Player.js'
import { IsPlayer } from './interfaces/IsPlayer.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
console.log(mashrafi.name);
console.log(mashrafi.getAge());

let sakib:IsPlayer; // isPlayer interface
sakib = new Player('Sakib', 35, 'Bangladesh');

// interface
interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length
}

// drawRectangle({
//     width: 30,
//     length: 20,
//     height: 10 //error for extra value without interface
// });

let threeDoptoins = {
    width: 30,
    length: 20,
    height: 10
}
drawRectangle(threeDoptoins); // okay if pass variable with extra value