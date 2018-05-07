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

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

const foamThicknessArray = [15, 30, 70];
const foamThicknessArray2 = [20, 35, 75];

var gravity = 2;
var friction = 0.9;
var foamHeight = foamThicknessArray[Math.floor(Math.random()*foamThicknessArray.length)];
var foamHeight2 = foamThicknessArray2[Math.floor(Math.random()*foamThicknessArray2.length)];

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
})

// document.getElementById("myButton").addEventListener("click", function(){
//     init();
//     init2(); 
// });

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Objects
function Ball(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.radius = radius
    this.color = color
    this.foamHeight = foamHeight;

    this.update = function() {
        if(this.y < foamHeight) {
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
        c.fillStyle = this.color;
        c.fill();
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
    this.foamHeight2 = foamHeight2;

    this.update = function() {
        if(this.y < this.foamHeight2) {
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
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath();
    };
}

// Implementation
var ball;
var ballArray = [];
function init() {
    for (let i = 0; i < 1000; i++) {
        let x = randomIntFromRange(0, canvas.width);
        let y = randomIntFromRange(0, canvas.width);
        ballArray.push(new Ball(x, y, 10, 5, '#f7d58c'));
    }
}

var ballArray2 = [];
function init2() {
    for (let i = 0; i < 2000; i++) {
        let x = randomIntFromRange(0, canvas.width);
        let y = randomIntFromRange(0, canvas.width);
        ballArray2.push(new Ball2(x, y, 10, 2, '#f7d58c'));
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
}

init()
init2()
animate()
