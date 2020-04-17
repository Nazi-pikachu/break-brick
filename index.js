//Om codingaye namah!!!
//import paddle from source = '/src/paddle';
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
var GAME_WIDTH = window.innerWidth;
var GAME_HEIGHT = window.innerHeight;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;
class paddle {             //this for this class to be able to acess in other files
    constructor(gameWidth, gameHeight) {
        this.width = 0.15 * gameWidth;
        this.height = 0.035 * gameHeight;
        this.position_paddle = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - 2 * this.height
        };
        this.x = this.position_paddle.x;
        this.y = this.position_paddle.y;
        this.dx = 35;

    }
    draw() {     //c refers to the context of the canvas declared in the index file

        c.fillRect(this.x, this.position_paddle.y, this.width, this.height);
        c.fillStyle = 'black';
    }
    update() {
        /* if (this.x = window.i) {
             this.dx = -this.dx;
             console.log(this.dx);
         }
         //there is some error here paddle is not returning after colliding with the wall */
        this.x = this.x + 2;
        //console.log(this.dx);
        this.draw();
    }
}
let paddle_demo = new paddle(GAME_WIDTH, GAME_HEIGHT);
paddle_demo.draw();
console.log(GAME_WIDTH, GAME_HEIGHT);
animate = () => {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    paddle_demo.update();
}
animate();