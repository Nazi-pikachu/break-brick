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
canvas.width = .96 * window.innerWidth;
canvas.height = .96 * window.innerHeight;
var GAME_WIDTH = canvas.width;
var GAME_HEIGHT = canvas.height;
var dx = 10, dy = 1, dvx = 2, dvy = 5;
console.log(GAME_HEIGHT, GAME_WIDTH);

/*var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = GAME_WIDTH / 5;
var brickHeight = GAME_HEIGHT / 3;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (var cl = 0; cl < brickColumnCount; c++) {
    bricks[cl] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[cl][r] = { x: 0, y: 0 };
    }
}

function drawBricks(c) {
    for (var cl = 0; cl < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var brickX = (cl * (brickWidth + brickPadding)) + brickOffsetLeft;
            var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[cl][r].x = brickX;
            bricks[cl][r].y = brickY;
            c.beginPath();
            c.rect(0, 0, brickWidth, brickHeight);
            c.fillStyle = "#0095DD";
            c.fill();
            c.closePath();
        }
    }
}
drawBricks(c);
*/




//Requesting user to play in landscape

//if (this.GAME_HEIGHT > this.GAME_WIDTH || user_input != 'enter' || user_input != 'Enter' || user_input != 'ENTER') {
//  alert("PLEASE USE LANSDSCAPE MODE");
//var user_input = prompt("If you wish to continue in Potrait write enter");

document.addEventListener('keydown', function (event) {
    paddle_demo.controls(event.keyCode);
    //console.log(event.keyCode, event.key);

}
)

//console.log(this.ballx - this.Px);

class paddle {             //this for this class to be able to acess in other files
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;                    //width of gaming console
        this.gameHeight = gameHeight;                  //height of gaming console
        this.width = 0.2 * gameWidth;                  //Width of paddle
        this.height = 0.035 * gameHeight;              //Height of the paddle
        this.x = gameWidth / 2 - this.width / 2;       //initial x coordinate of paddle
        this.y = gameHeight - 2 * this.height;         //initial y coordinate of paddle
        this.dx = this.width / 8;                      //x velocity of paddle
        this.dy = dy;
        this.ballx = 0.1 * this.gameWidth;//gameWidth / 2 - 0.3 * this.width / 2;      //initial coordinates of ball
        this.bally = 0.1 * this.gameHeight;//gameHeight / 2 - 0.3 * this.width / 2;
        this.dvx = dvx;//velocity of ball
        this.dvy = dvy;
        this.r = 0.09 * this.width;
        //this.nCr = this.height / 2;
        //this.Px = this.x + this.nCr;
        // this.Py = this.y + this.nCr;
        /// this.dbtw = this.r + this.nCr;
        ///this.dis = Math.sqrt(Math.pow((this.ballx - this.Px), 2) + Math.pow((this.bally - this.Py), 2));
        //console.log(this.ballx);
    }
    // to draw the paddle
    drawPaddle() {
        c.fillStyle = "orange";
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fill();
        c.closePath();




        c.beginPath();
        c.moveTo(0, this.y);
        c.lineTo(GAME_WIDTH, this.y);
        c.strokeStyle = 'black';
        c.stroke();
        c.closePath();
        // console.log(GAME_WIDTH, GAME_HEIGHT);

    }

    //to draw Ball
    drawBall() {
        c.beginPath();
        c.arc(this.ballx, this.bally, this.r, 0, 2 * Math.PI, false);
        c.fillStyle = 'yellow';
        c.fill();
        c.strokeStyle = 'red';
        c.stroke();

    }
    //to update the paddle in each frame
    update() {
        if (this.x < 0)
            this.x = 0;
        if (this.x + this.width > this.gameWidth)
            this.x = this.gameWidth - this.width;
        //console.log(this.ballx, this.ga;
        if (this.ballx + this.r > this.gameWidth || this.ballx < this.r)
            this.dvx = -this.dvx;

        if (this.bally + this.r > this.gameHeight || this.bally < this.r)
            this.dvy = -this.dvy;

        this.ballx += this.dvx;
        this.bally += this.dvy

        // console.log(this.dis);


        this.collision();
        this.drawPaddle();
        this.drawBall();
        // console.log(this.Px, this.Py)

    }


    //user controls the paddle
    controls(keyCode) {
        switch (keyCode) {
            case (68): {
                this.x += this.dx;
                // this.Px = this.x + this.nCr;
                //this.dis = Math.sqrt(Math.pow((this.ballx - this.Px), 2) + Math.pow((this.bally - this.Py), 2));

                break;
            }
            case (65): {
                this.x -= this.dx;
                //this.Px = this.x + this.nCr;
                // this.dis = Math.sqrt(Math.pow((this.ballx - this.Px), 2) + Math.pow((this.bally - this.Py), 2));

                break;
            }

            case (39): {
                this.x += this.dx;
                // this.Px = this.x + this.nCr;
                //this.dis = Math.sqrt(Math.pow((this.ballx - this.Px), 2) + Math.pow((this.bally - this.Py), 2));

                break;
            }
            case (37): {
                this.x -= this.dx;
                // this.Px = this.x + this.nCr;
                //this.dis = Math.sqrt(Math.pow((this.ballx - this.Px), 2) + Math.pow((this.bally - this.Py), 2));

                break;
            }

        }
    }

    collision() {
        if (this.bally + this.r > this.y + this.height) {
            this.ballx = this.gameWidth / 2 - 0.3 * this.width / 2;      //initial coordinates of ball
            this.bally = this.gameHeight / 2 - 0.3 * this.width / 2;
            alert("Sorry Game Over!!!\nTry Again")
            location.reload(true);
        }

        if ((this.bally + this.r > this.y) && (this.ballx + this.r > this.x && this.ballx - this.r < this.x + this.width))
            this.dvy = -this.dvy;



    }



}



//creating instance of paddle
let paddle_demo = new paddle(GAME_WIDTH, GAME_HEIGHT);
//paddle_demo.draw();

animate = () => {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    paddle_demo.update();
}
animate();