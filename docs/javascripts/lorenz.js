let canva;
let lorenz1;
let lorenz2;

function setup(){
    let divWidth = document.getElementById('cont1').offsetWidth;
    let divHeight = divWidth * 9 / 16;
    let cnv = createCanvas(divWidth, divHeight, WEBGL);
    cnv.parent('cont1');
    
    colorMode(HSB, 255);

    canva = {scale: scale};
    Object.freeze(canva);

    lorenz1 = new Lorenz(0.1, 0, 0, 10, 28, 8.0/3.0)
    lorenz2 = new Lorenz(-0.1, 120, 40, 18, 40, .9, 230)
}

function draw(){
    background(0,0,0,0); // transparent background
    let amplitude = windowWidth <= 767 ? 3 : 8;
    let cap = windowWidth <= 767 ? 2 : 4
    let func = abs(amplitude * sin(2 * PI / 60000 * millis()));
    let ratio = func < cap ? cap : func;
    canva.scale(ratio);
    rotate(millis()*0.005/100);

    lorenz1.update();
    lorenz2.update();
    lorenz1.show();
    lorenz2.show();

}

function windowResized() {
    let divWidth = document.getElementById('cont1').offsetWidth;
    let divHeight = divWidth * 9 / 16;
    resizeCanvas(divWidth, divHeight);
}

class Lorenz {
    constructor(x, y, z, sigma, rho, beta, color=100){
        this.x = x;
        this.y = y;
        this.z = z;
        this.sigma = sigma;
        this.rho = rho;
        this.beta =  beta;
        this.color = color;
        this.points = [];
    }
    
    show() {
        noFill();
        beginShape();
            this.points.forEach(pnt => {
                stroke(this.color, 255, 255);
                vertex(pnt.x, pnt.y, pnt.z);
            });
        endShape();
    }

    update(h=0.005) {
        let dx = this.sigma * (this.y - this.x);
        let dy = this.x * (this.rho - this.z) - this.y;
        let dz = this.x * this.y - this.beta * this.z;

        this.x = this.x + dx * h;
        this.y = this.y + dy * h;
        this.z = this.z + dz * h;

        this.points.unshift(new p5.Vector(this.x, this.y, this.z));
        if (this.points.length > 3000) this.points.pop();
    }
}