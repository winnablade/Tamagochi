/*
statuses
    - happy: sleep 100, starve 0, love 100
    - tired: sleep <=50, starve 0 >= 50, love 100
    - scared: love <= 50
    - terrified: love <= 20
    - dead: sleep 0, starve 100, love: doesnt metter
*/

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelector(selector);

const sleepBtn = $('#sleepBtn');
const feedBtn = $('#feedBtn');
const petBtn = $('#petBtn');


let tamaName = $('#name');
let tamaStatus = 'happy';
let message = $('#message');

class Tamagochi {
    constructor(sleep, starve, love) {
        this.sleep = sleep;
        this.starve = starve;
        this.love = love;
    }

    sleep(){
        return this.sleep + 10;
    }

    feed(){
        return this.feed + 5;
    }

    pet(){
        return this.love + 20;
    }
}

function start(){
    tamaName = prompt('Enter your tamagochi name:');
    let tama = new Tamagochi(100, 0, 100);
    return tama;
}

function statusMessage(tama){
    switch(true){
        case pet.sleep <= 0 || pet.starve >= 100: {
            tamaStatus = 'dead';
            message = `WHY DID U DO THAT TO ${tamaName}`;
            return message;
        }
        case pet.sleep <= 50: {
            tamaStatus = 'tired';
            message = `${tamaName} want to sleep`;
            return message;
        }
        case pet.starve >= 50 : {
            tamaStatus = 'starving';
            message = `${tamaName} want to eat`;
            return message;
        }
        case pet.love <= 50 : {
            tamaStatus = 'scared';
            message = `${tamaName} is scared and want your love`;
            return message;
        }
        case pet.love <= 20 : {
            tamaStatus = 'terrified';
            message = `${tamaName} IS TERRIFIED!!!!`;
            return message;
        }
        case pet.sleep <= 50 && pet.starve >= 50: {
            tamaStatus = 'exhausted';
            message = `${tamaName} want to eat and sleep`;
            return message;
        }
        default :{
            tamaStatus = 'happy';
            message = `${tamaName} is happy`;
            return message;
        }
    }
}

onload = start();