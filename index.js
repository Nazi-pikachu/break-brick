//Om codingaye namah!!!
//import paddle from source = '/src/paddle';
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

document.addEventListener('resize', function (event) {

})


//for responsive game Width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var GAME_WIDTH = canvas.width;
var GAME_HEIGHT = canvas.height;
var dx = 10, dy = 1;
console.log(GAME_WIDTH, GAME_HEIGHT);




//Requesting user to play in landscape
//if (this.GAME_HEIGHT > this.GAME_WIDTH || user_input != 'enter' || user_input != 'Enter' || user_input != 'ENTER')
// alert("PLEASE USE LANSDSCAPE MODE");
//var user_input = prompt("If you wish to continue in Potrait write enter");

document.addEventListener('keydown', function (event) {
    paddle_demo.controls(event.keyCode);
    console.log(event.keyCode, event.key);

}
)



class paddle {             //this for this class to be able to acess in other files
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;//width of gaming console
        this.gameHeight = gameHeight;//height of gaming console
        this.width = 0.2 * gameWidth;//Width of paddle
        this.height = 0.035 * gameHeight;//Height of the paddle
        this.x = gameWidth / 2 - this.width / 2;
        this.y = gameHeight - 2 * this.height;
        this.dx = dx;
        this.dy = dy;

    }
    draw() {     //c refers to the context of the canvas declared in the index file

        c.fillRect(this.x, this.y, this.width, this.height);
        c.fillStyle = "#696980";

    }
    update() {

        this.draw();

        // if (this.x this.gameWidth || this.x < 0)

    }
    controls(keyCode) {
        switch (keyCode) {
            case 39: {
                this.x += this.dx;
                break;
            }
            case 37: {
                this.x -= this.dx;
                break;
            }



        }
    }

}
let paddle_demo = new paddle(GAME_WIDTH, GAME_HEIGHT);
paddle_demo.draw();

animate = () => {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    paddle_demo.update();
}
animate();