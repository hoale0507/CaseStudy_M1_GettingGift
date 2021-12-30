class Rectangle{
    _x;
    _y;
    _width;
    _height;
    _speed;
    _color;
    constructor(x, y, width, height, speed, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._color = color;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }
    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }


    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    getRandomColor(){
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }
    drawRect(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveDown(){
        this.y += this.speed;
    }
}