//Om codingaye namah!!!

//getting instance of canvas
let canvas = document.querySelector("canvas");
//getting context of canvas in c
let c = canvas.getContext("2d");
//interactivity with the gaming console
document.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


//for responsive game Width
canvas.width = .95 * window.innerWidth;
canvas.height = .95 * window.innerHeight;
var GAME_WIDTH = canvas.width;
var GAME_HEIGHT = canvas.height;
var dx = 10, dy = 1, dv = .2;
console.log(GAME_WIDTH, GAME_HEIGHT);



//Requesting user to play in landscape

//if (this.GAME_HEIGHT > this.GAME_WIDTH || user_input != 'enter' || user_input != 'Enter' || user_input != 'ENTER')
//  alert("PLEASE USE LANSDSCAPE MODE");
//var user_input = prompt("If you wish to continue in Potrait write enter");

document.addEventListener('keydown', function (event) {
    paddle_demo.controls(event.keyCode);
    //console.log(event.keyCode, event.key);

}
)


class paddle {             //this for this class to be able to acess in other files
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;         //width of gaming console
        this.gameHeight = gameHeight;       //height of gaming console
        this.width = 0.2 * gameWidth;       //Width of paddle
        this.height = 0.035 * gameHeight;   //Height of the paddle
        this.x = gameWidth / 2 - this.width / 2;//initial x coordinate of paddle
        this.y = gameHeight - 2 * this.height;//initial y coordinate of paddle
        this.dx = this.width / 8;//x velocity of paddle
        this.dy = dy;
        this.ballx = gameWidth / 2 - 0.3 * this.width / 2;      //initial coordinates of ball
        this.bally = gameHeight / 2 - 0.3 * this.width / 2;
        this.dv = dv;//velocity of ball
    }
    // to draw the paddle
    draw() {

        c.fillRect(this.x, this.y, this.width, this.height);
        c.fillStyle = "#696980";
        let img = document.getElementById("img");
        c.drawImage(img, this.ballx, this.bally, 0.3 * this.width, 0.3 * this.width);

    }
    //to update the paddle in each frame
    update() {
        if (this.x < 0)
            this.x = 0;
        if (this.x + this.width > this.gameWidth)
            this.x = this.gameWidth - this.width;
        //console.log(this.ballx, this.ga;
        if (this.ballx + 0.35 * this.width > this.gameWidth)
            this.dv = -this.dv;

        this.ballx += this.dv;
        this.bally += this.dv;









        this.draw();

    }
    //user controls the paddle
    controls(keyCode) {
        switch (keyCode) {
            case (68): {
                this.x += this.dx;
                break;
            }
            case (65): {
                this.x -= this.dx;
                break;
            }

            case (39): {
                this.x += this.dx;
                break;
            }
            case (37): {
                this.x -= this.dx;
                break;
            }

        }
    }

}
//creating instance of paddle
let paddle_demo = new paddle(GAME_WIDTH, GAME_HEIGHT);
paddle_demo.draw();

animate = () => {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    paddle_demo.update();
}
animate();