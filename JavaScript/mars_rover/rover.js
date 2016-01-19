function Rover(name){
  this.name = name;
  this.position = calcPosition(); 
  this.direction = calcDirection();
}

function randomize(multiplier) {
  var number = Math.floor(Math.random() * multiplier);
  return number;
}

function calcPosition() {
    var position = [];
    for (var i = 0; i < 2; i++) {
      position[i] = randomize(10);
    }
    if(myRover !== undefined && position[0] === myRover.position[0] && position[1] === myRover.position[1]) return calcPosition();
    return position;
}

function calcDirection() {
  var direction = [];
  var value;
  var length = randomize(10) + 1;
  for (var i = 0; i < length; i++) {
    value = randomize(4);
    switch(value) {
      case 0:
      direction[i] = 'N';
      break;
      case 1:
      direction[i] = 'W';
      break;
      case 2:
      direction[i] = 'S';
      break;
      case 3:
      direction[i] = 'E';
      break;
    }
  }
  return direction;
}

function createGrid() {
  grid = [];
  for (var i = 0; i < 10; i++) {
    grid[i] = [];
    for (var j = 0; j < 10; j++) {
     grid[i][j] = isRock();
    }
  }
}

function isRock() {
  if (randomize(100) <= 10) {
    return "Rock";
  } else {
    return 0;
  }
}

function start(rover, rover2) {
  console.log("Initial Rover Positions: " + "\n" + rover.name + " [" + rover.position[0] + ", " + rover.position[1] + "]" + 
    "\n" + rover2.name + " [" + rover2.position[0] + ", " + rover2.position[1] + "]");
  console.log("Instructions Recieved: " + "\n" + rover.name + " " + rover.direction + "\n" + rover2.name + " " + rover2.direction);
  if(!canLand(rover) && !canLand(rover2)) {
    showLocation(rover, rover2);
    move(rover, rover2);
  } else if(!canLand(rover) && canLand(rover2)) {
    console.log(rover2.name + " could not land due to terrain difficulties");
    showLocation(rover);
    move(rover);
  } else if(canLand(rover) && !canLand(rover2)) {
    console.log(rover.name + " could not land due to terrain difficulties");
    showLocation(rover2);
    move(rover2);
  } else if(canLand(rover) && canLand(rover2)) {
    console.log("Neither rover could land due to terrain difficulties");
  }
}

function move(rover, rover2) {
  var roverlength = rover.direction.length;
  var longest;
  if (rover2 === undefined) {
    for (var j = 0; j < roverlength; j++) {
      swatch(rover, j);
      console.log("Instruction: " + rover.name + " " + rover.direction[j]);
      showLocation(rover);
    }
    console.log("New Rover Position: " + rover.name + " [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else {
    var rover2length = rover2.direction.length;
    (roverlength > rover2length) ? longest = roverlength : longest = rover2length;
    for (var i = 0; i < longest; i++) {
      if(roverlength < i) {
        swatch(rover2, i);
      } else if(rover2length < i) {
        swatch(rover, i);
      } else {
        swatch(rover, i);
        swatch(rover2, i);
      }
      console.log("Instructions: " + "\n" + rover.name + " " + rover.direction[i] + "\n" + rover2.name + " " + rover2.direction[i]);
      showLocation(rover, rover2);
    }
    console.log("New Rover Positions:" + "\n" + rover.name + " [" + rover.position[0] + ", " + rover.position[1] + "]" + 
      "\n" + rover2.name + " [" + rover2.position[0] + ", " + rover2.position[1] + "]");
  }
}

function swatch(rover, instruction) {
  switch(rover.direction[instruction]) {
    case 'S':
      if (checkObstacle(rover.position[0], 1, rover, 'y')) return;
      rover.position[0] = wrap(rover.position[0], 1, rover);
      break;
    case 'E':
      if (checkObstacle(rover.position[1], 1, rover, 'x')) return;
      rover.position[1] = wrap(rover.position[1], 1, rover);
      break;
    case 'N':
      if (checkObstacle(rover.position[0], -1, rover, 'y')) return;
      rover.position[0] = wrap(rover.position[0], -1, rover);
      break;
    case 'W':
      if (checkObstacle(rover.position[1], -1, rover, 'x')) return;
      rover.position[1] = wrap(rover.position[1], -1, rover);
      break;
  }
}

function checkObstacle(axis, direction, rover, transitionalAxis) {
  if (grid [wrap(axis, direction, rover)] [rover.position[1]] !== 0 && transitionalAxis === 'y') {
    console.log("Error: Obstacle Present");
    return true;
  } else if (grid [rover.position[0]] [wrap(axis, direction, rover)] !== 0 && transitionalAxis === 'x') {
    console.log("Error: Obstacle Present");
    return true;
  }
}

function canLand(rover) {
  if (grid [rover.position[0]] [rover.position[1]] !== 0) {
    return true;
  }
}

function wrap(axis, direction, rover) {
  var result;
  if (axis === 9 && direction === 1) {
    result = 0;
    return result;
  } else if (!axis && direction === -1) {
    result = 9;
    return result;
  } else {
    result = axis + direction;
    return result;
  }
}

function showLocation(rover, rover2) {
  if (rover2 === undefined) {
    grid [rover.position[0]] [rover.position[1]] = rover.name;
    console.table(grid);
    grid [rover.position[0]] [rover.position[1]] = 0;
  } else {
    grid [rover.position[0]] [rover.position[1]] = rover.name;
    grid [rover2.position[0]] [rover2.position[1]] = rover2.name;
    console.table(grid);
    grid [rover.position[0]] [rover.position[1]] = 0;
    grid [rover2.position[0]] [rover2.position[1]] = 0;
  }
}

createGrid();
var myRover = new Rover("myRover");
var yourRover = new Rover("yourRover");
start(myRover, yourRover);