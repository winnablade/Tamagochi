
    const $ = selector => document.querySelector(selector);
    const $$ = selector => document.querySelectorAll(selector);

    const petIcons = {
        happy: 'icons/pet-icon/happy-icon.png',
        tired: 'icons/pet-icon/tired-icon.png',
        exhausted: 'icons/pet-icon/tired-icon.png',
        hungry: 'icons/pet-icon/tired-icon.png',
        starving: 'icons/pet-icon/tired-icon.png',
        scared: 'icons/pet-icon/scared-icon.png',
        terrified: 'icons/pet-icon/terrified-icon.png',
        dead: 'icons/pet-icon/dead-icon.png'
    };

    class Tamagochi {
        constructor() {
            this.sleepLvl = 100;
            this.starve = 0;
            this.love = 100;
        }

        update(){
            this.sleepLvl -= 2;
            this.starve += 3;
            this.love -= 1;

            this.clampStat();
        }

        clampStat(){
            this.sleepLvl = Math.max(0, Math.min(100, this.sleepLvl));
            this.starve = Math.max(0, Math.min(100, this.starve));
            this.love = Math.max(0, Math.min(100, this.love));
        }

        sleep(){
            this.sleepLvl += 10;
            this.clampStat();
        }

        feed(){
            this.starve -= 10;
            this.clampStat();
        }

        pet(){
            this.love += 10;
            this.clampStat();
        }
    }

    class Game{
        constructor(){
            this.tama = new Tamagochi();
            this.tamaName = prompt('Enter your tamagochi name:')?.trim() || 'DOE';
            this.tamaStatus = 'happy';
        }

        start(){
            const act = action => () => {
                if(this.tamaStatus === 'dead'){
                    return;
                }
                action();
                this.updateUi();
            }

            $('#name').textContent = this.tamaName;

            this.timer = setInterval(() =>{
                this.tama.update();
                this.updateUi();

                if(this.tamaStatus === 'dead'){
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 300);

            $('#feedBtn').addEventListener('click', act(() => {
                this.tama.feed()
            }));

            $('#sleepBtn').addEventListener('click', act(() => {
                this.tama.sleep()
            }));

            $('#petBtn').addEventListener('click', act(() => {
                this.tama.pet()
            }));

            this.updateUi();
        }

        updateUi(){

            const { sleepLvl, starve, love } = this.tama;
            
            if (sleepLvl <= 0 || starve >= 100) {
                this.tamaStatus = 'dead';
            }else if(sleepLvl <= 50 && starve >= 50){
                this.tamaStatus = 'exhausted';
            }else if (love <= 20) {
                this.tamaStatus = 'terrified';
            }else if(sleepLvl <= 20){
                this.tamaStatus = "exhausted";
            }else if(starve >= 80){
                this.tamaStatus = "starving";
            }else if(sleepLvl <= 50){
                this.tamaStatus = "tired";
            }else if(starve >= 50){
                this.tamaStatus = "hungry";
            }else if(love <= 50){
                this.tamaStatus = "scared";
            }else{
                this.tamaStatus = "happy";
            }

            $$('#buttons button').forEach(b => b.disabled = this.tamaStatus === 'dead');

            $('#status').textContent = this.statusMessage();
            const petIcon = $('#petIcon');
            petIcon.src = petIcons[this.tamaStatus];
            petIcon.alt = `${this.tamaName}, ${this.tamaStatus}`;

            $('#sleepStat').textContent = sleepLvl;
            $('#starveStat').textContent = starve;
            $('#loveStat').textContent = love;
        }


        statusMessage(){
            const tama = this.tama;
            const name = this.tamaName

            const messages = {
                dead: `WHY DID U DO THAT TO ${name}`,
                exhausted: `${name} is exhausted and wants to sleep`,
                terrified: `${name} IS TERRIFIED!!!!`,
                starving: `${name} is starving and wants to eat`,
                tired: `${name} wants to sleep`,
                hungry: `${name} wants to eat`,
                scared: `${name} is scared and wants your love`,
                happy: `${name} is happy`
            };
            return messages[this.tamaStatus];
        }
    }

    window.addEventListener('DOMContentLoaded', () =>{
        const game = new Game();
        game.start();
    });