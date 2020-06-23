function Fruit() {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale; //Making columns - 1 to columns
    this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale; //Makinh rows - 1 to rows
  }

  this.draw = function() {
    ctx.fillStyle = "#4cafab";
    ctx.fillRect(this.x, this.y, scale, scale)
    console.log("fruit location is: ", this.x, this.y);
  }
}
