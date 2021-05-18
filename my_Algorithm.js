//this is the function istouch for happening touch with the object
function isTouch(object1, object2) {
   if (object1.x - object2.x < object2.width / 2 + object1.width / 2
      && object2.x - object1.x < object2.width / 2 + object1.width / 2
      && object1.y - object2.y < object2.height / 2 + object1.height / 2
      && object2.y - object1.y < object2.height / 2 + object1.height / 2) {

      return true;
   }
   else {
      return false;
   }
}

//this is the function isBouce for the jumping of the ball by colliding with the edges and boxes.
function isBounce() {
   if (isTouch(ball, gameBox1)) {
      gameBox1.shapeColor = "white";
      ball.shapeColor = "red";
      ball.velocityY = ball.velocityY * (-1);
      gameBox1.velocityY = gameBox1.velocityY * (-1);
      bounce_sound.play();
   }
   else {
      gameBox1.shapeColor = "red";
   }

   if (isTouch(ball, gameBox2)) {
      gameBox2.shapeColor = "white";
      ball.shapeColor = "blue";
      ball.velocityY = ball.velocityY * (-1);
      gameBox2.velocityY = gameBox2.velocityY * (-1);
      bounce_sound.play();
   }
   else {
      gameBox2.shapeColor = "blue";
   }

   if (isTouch(ball, gameBox3)) {
      gameBox3.shapeColor = "white";
      ball.shapeColor = "green";
      ball.velocityY = ball.velocityY * (-1);
      gameBox3.velocityY = gameBox3.velocityY * (-1);
      bounce_sound.play();
   }
   else {
      gameBox3.shapeColor = "green";
   }

   if (isTouch(ball, gameBox4)) {
      gameBox4.shapeColor = "white";
      ball.shapeColor = "yellow";
      ball.velocityY = ball.velocityY * (-1);
      gameBox4.velocityY = gameBox4.velocityY * (-1);
      bounce_sound.play();
   }
   else {
      gameBox4.shapeColor = "yellow";
   }

//moving balls within the balls.
   if (isTouch(ball, wall3)) {
      ball.velocityY = ball.velocityY * (-1);
      wall3.velocityY = wall3.velocityY * (-1);
      bounce_sound.play();
   }

   if (isTouch(ball, wall1)) {
      ball.velocityX = ball.velocityX * (-1);
      wall1.velocityX = wall1.velocityX * (1);
      bounce_sound.play();
   }
   if (isTouch(ball, wall2)) {
      ball.velocityX = ball.velocityX * (-1);
      wall2.velocityX = wall2.velocityX * (1);
      bounce_sound.play();
   }
}