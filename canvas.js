// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

var gravity = 2.5;
var friction = 0.7;

//Sound

// var audio = new Audio(http://sfxcontent.s3.amazonaws.com/soundfx/Cork-Pop.mp3);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init();
    init2();
    init3();
})

document.getElementById("myButton").addEventListener("click", function(){
    // audio.play();
    init();
    init2();
    init3();
});

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Objects
//biggest
function Ball(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
    // this.foamHeight = foamHeight;

    this.update = function() {
        if(this.y < -20) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        //dy = velocity
        this.y -= this.dy;
        this.draw()
    };

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color;
        // c.fill();
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    };
}

function Ball2(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
    // this.foamHeight2 = foamHeight2;

    this.update = function() {
        if(this.y < -20) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        //dy = velocity
        this.y -= this.dy;
        this.draw()
    };

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color;
        // c.fill();
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    };
}

function Ball3(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
    // this.foamHeight3 = foamHeight3;

    this.update = function() {
        if(this.y < -20) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        //dy = velocity
        this.y -= this.dy;
        this.draw()
    };

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color;
        // c.fill();
        c.strokeStyle = '#D1C4BE';
        c.stroke();
        c.closePath();
    };
}

// Implementation
var ball;
var ballArray = [];
function init() {
    for (let i = 0; i < 500; i++) {
        let x = randomIntFromRange(0, canvas.width);
        let y = randomIntFromRange(0, canvas.width) + (innerHeight / 4);
        ballArray.push(new Ball(x, y, 10, 15, '#f7d58c'));
    }
}

var ballArray2 = [];
function init2() {
    for (let i = 0; i < 1000; i++) {
        let x = randomIntFromRange(0, canvas.width);
        let y = randomIntFromRange(0, canvas.width) + (innerHeight / 1.4);
        ballArray2.push(new Ball2(x, y, 10, 7, '#f7d58c'));
    }
}

var ballArray3 = [];
function init3() {
    for (let i = 0; i < 2000; i++) {
        let x = randomIntFromRange(0, canvas.width);
        let y = randomIntFromRange(0, canvas.width) + (innerHeight / 6);
        ballArray3.push(new Ball3(x, y, 10, 3, '#f7d58c'));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < ballArray.length; i++) {
        const element = ballArray[i];
        element.update();  
    }

    for (let i = 0; i < ballArray2.length; i++) {
        const element = ballArray2[i];
        element.update();  
    }

    for (let i = 0; i < ballArray3.length; i++) {
        const element = ballArray3[i];
        element.update();  
    }
}







animate()
init2()
init()
init3()