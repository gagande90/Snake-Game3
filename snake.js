function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    for (let i=0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    console.log("Snake location is: ", this.x, this.y);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total - 1] =
      { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.x = 0;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function(fruit) {
  /*
    if ((this.x === fruit.x && this.y === fruit.y) || (this.x === fruit.x + 1 && this.y === fruit.y + 1)
    	|| (this.x === fruit.x - 1 && this.y === fruit.y - 1) || (this.x === fruit.x + 1 && this.y === fruit.y - 1)
    	|| (this.x === fruit.x - 1 && this.y === fruit.y + 1)) {
  */
  	if ((this.x - fruit.x === 0 && this.y - fruit.y === 0)
  		|| (this.x - fruit.x === 1 && this.y - fruit.y === 1)
  		|| (this.x - fruit.x === 2 && this.y - fruit.y === 2)
  		|| (this.x - fruit.x === 3 && this.y - fruit.y === 3)
  		|| (this.x - fruit.x === 4 && this.y - fruit.y === 4)
  		|| (this.x - fruit.x === 5 && this.y - fruit.y === 6)
  		|| (this.x - fruit.x === 7 && this.y - fruit.y === 7)
  		|| (this.x - fruit.x === 8 && this.y - fruit.y === 8)
  		|| (this.x - fruit.x === 9 && this.y - fruit.y === 9)
  		|| (this.x - fruit.x === 10 && this.y - fruit.y === 10)
  		 ) {
      this.total++;
      return true;
    }

    return false;
  }

  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        window.alert("Snake ran into itself, In order to play again press OK"); 
      }
    }
  }
}
