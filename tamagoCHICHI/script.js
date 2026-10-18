/*
statuses
    - happy: sleep 100, starve 0, love 100
    - tired: sleep <=50, starve 0 >= 50, love 100
    - scared: love <= 50
    - terrified: love <= 20
    - dead: sleep 0, starve 100, love: doesnt metter
*/

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

let tamaName = $('#name');
let tamaStatus = 'happy';
let message = $('#message');

class Tamagochi {
    constructor() {
        this.sleepLvl = 100;
        this.starve = 0;
        this.love = 100;
    }

    sleep(){
        this.sleepLvl = Math.max(100, this.sleepLvl + 10);
    }

    feed(){
        this.starve = Math.max(0, this.starve - 5);
    }

    pet(){
        this.love = Math.max(100, this.love + 10);
    }
}

        tamaName = prompt('Enter your tamagochi name:');
        $('name').textContent = tamaName;

class Game{
    constructor(){
        this.tama = new Tama
    }

    start(){

        $('#feedBtn').addEventListener('click', () =>{
            tama.feed();
            this.updateUi();
        });

        $('#sleepBtn').addEventListener('click', () => {
            tama.sleep();
            this.updateUi();
        });

        $('#petBtn').addEventListener('click', () =>{
            tama.pet();
            this.updateUi();
        });

        this.updateUi();
    }

    updateUi(){
        const tamagch = this.tama
        $('#status').textContent = this.statusMessage();

        $('#sleepStat').textContent = tamagch.sleepLvl;
        $('#starveStat').textContent = tamagch.starve;
        $('#loveStat').textContent = tamagch.love;
    }


    statusMessage(tama){

    switch (true) {
        case pet.sleep <= 0 || pet.starve >= 100: {
            tamaStatus = "dead";
            message = `WHY DID U DO THAT TO ${tamaName}`;
            return message;
        }
        case pet.sleep <= 50 && pet.starve >= 50: {
            tamaStatus = "exhausted";
            message = `${tamaName} wants to eat and sleep`;
            return message;
        }
        case pet.love <= 20: {
            tamaStatus = "terrified";
            message = `${tamaName} IS TERRIFIED!!!!`;
            return message;
        }
        case pet.sleep <= 20: {
            tamaStatus = "exhausted";
            message = `${tamaName} is exhausted and wants to sleep`;
            return message;
        }
        case pet.starve >= 80: {
            tamaStatus = "starving";
            message = `${tamaName} is starving and wants to eat`;
            return message;
        }
        case pet.sleep <= 50: {
            tamaStatus = "tired";
            message = `${tamaName} wants to sleep`;
            return message;
        }
        case pet.starve >= 50: {
            tamaStatus = "hungry";
            message = `${tamaName} wants to eat`;
            return message;
        }
        case pet.love <= 50: {
            tamaStatus = "scared";
            message = `${tamaName} is scared and wants your love`;
            return message;
        }
        default: {
            tamaStatus = "happy";
            message = `${tamaName} is happy`;
            return message;
        }
    }
    }
}

window.addEventListener('DOMContentLoaded', () =>{
    const game = new Game();
    game.start();
});