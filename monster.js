class Monster {
    _x;
    _y;
    _width;
    _height;
    _speedX;
    _speedY;
    _src;


    constructor(x, y, width, height,speedX,speedY,src) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speedX = speedX;
        this._speedY = speedY;
        this._src = src;
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

    get speedX() {
        return this._speedX;
    }

    set speedX(value) {
        this._speedX = value;
    }

    get speedY() {
        return this._speedY;
    }

    set speedY(value) {
        this._speedY = value;
    }


    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    draw(ctx){
        let img = new Image();
        img.src = this.src;
            ctx.drawImage(img,this.x, this.y, this.width, this.height);
    }
    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

}