const orient_up = "up";
const orient_down = "down";
const orient_rigth = "rigth";
const orient_left = "left";

const GW = 1440;
const GH = 800;

let Cnv = function (){
    this.xPosition = 600;
    this.yPosition = 500;
    this.buildImg = function (){
        this.image = 'images/thecock.png'
    };
    this.buildImg();
    this.show = function (ctx) {
        let img = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        img.onload = function () {
            ctx.drawImage(img, xPosition, yPosition);
        };
        img.src = this.image;
    }

}
let Car = function (){
    this.xPosition = 100;
    this.yPosition = 100;
    this.speed = 20;
    this.buildImg = function (){
        this.image = 'images/Lexus.png'
    };
    this.buildImg();
    this.move = function (orien){
        switch(orien){
            case orient_up:
                this.yPosition -= this.speed;
                break;
            case orient_left:
                this.xPosition -= this.speed;
                break;
            case orient_down:
                this.yPosition += this.speed;
                break;
            case orient_rigth:
                this.xPosition += this.speed;
                break;
        }
    }
    this.moreSpd = function(x){
        if(x == 17){
            this.speed += 10;
        }else if(x == 90){
            this.speed -= 10;
        }
    }
    this.show = function (ctx){
        let img = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        img.onload = function (){
            ctx.drawImage(img, xPosition, yPosition, 200, 100);
        };
        img.src = this.image;
    }
}
function GameBoard(){
    this.car = new Car();
    this.cnv = new Cnv();
    this.ctx = undefined;
    this.start = function (){
        this.ctx = document.getElementById("myC").getContext('2d');
        this.car.show(this.ctx);
        this.cnv.show(this.ctx);
    };
    this.render = function (){
        this.ctx.clearRect(0, 0, GW, GH);
        this.car.show(this.ctx);
        this.cnv.show(this.ctx);
    };
    this.Carmove = function (e){
        let orien = 0;
        let x = 0;
        console.log(e.which);
        switch (e.which){
            case 37:
                orien = orient_left;
                break;
            case 38:
                orien = orient_up;
                break;
            case 39:
                orien = orient_rigth;
                break;
            case 40:
                orien = orient_down;
                break;
            case 17:
                x = 17;
                break;
            case 90:
                x = 90;
                break;
        }
        this.car.moreSpd(x);
        console.log(this.car.speed)
        this.car.move(orien);
        this.render();

    }
}
let game = new GameBoard();
game.start();