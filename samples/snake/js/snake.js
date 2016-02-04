
var newGame = gameMotor.extend(function(){
	this.setState('playing');

	this.devMode = false;

	this.setInterval(200);

	this.setEvents({
		'paused' : {
			'80' : 'continue'
		},
		'playing' : {
			'80' : 'pause',
			'37' : 'turnLeft',
			'39' : 'turnRight'
		},
		'ending' : {

		}
	});

	this.snake = {
		'dir' : 'down',
		'segments' : [
			{'x': 70, 'y': 70},
			{'x': 60, 'y': 70},
			{'x': 50, 'y': 70},
			{'x': 40, 'y': 70},
		]
	};

	this.meat = {
		'x': 100,
		'y': 100
	};

	this.setCicles({
		'playing' : ['renderGame']
	});

	this.pause = function(){
		if(this.config.state == 'paused'){
			this.setState('playing');
		}else{
			this.setState('paused');
		}
	};

	this.continue = function(){
		this.setState('playing');
	};

	this.turnLeft = function(){
		//console.log('turn left');
		if(this.snake.dir == 'right'){
			this.snake.dir = 'top';
		}else if(this.snake.dir == 'top'){
			this.snake.dir = 'left';
		}else if(this.snake.dir == 'left'){
			this.snake.dir = 'down';
		}else if(this.snake.dir == 'down'){
			this.snake.dir = 'right';
		}
	};

	this.turnRight = function(){
		//console.log('turn right');
		if(this.snake.dir == 'right'){
			this.snake.dir = 'down';
		}else if(this.snake.dir == 'down'){
			this.snake.dir = 'left';
		}else if(this.snake.dir == 'left'){
			this.snake.dir = 'top';
		}else if(this.snake.dir == 'top'){
			this.snake.dir = 'right';
		}
	};

	this.isHiting = function(){
	  var hit = false;
	  for(i in this.snake.segments){

	  }
	  return hit;
	};

	this.renderGame = function(){
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");

		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0,0,450,450);

		var x = 0;
		var y = 0;

		if(this.meat.x == this.snake.segments[0].x && this.meat.y == this.snake.segments[0].y){
			//this.setState('paused');
			this.snake.segments.push({'x': this.snake.segments[this.snake.segments.length-1].x, 'y': this.snake.segments[this.snake.segments.length-1].y});
			this.meat.x = Math.floor(Math.random() * 44) * 10;
			this.meat.y = Math.floor(Math.random() * 44) * 10;
			console.log(this.meat.x + ' ' + this.meat.y);
		}

		if(this.snake.segments[0].x < 0
			|| this.snake.segments[0].x >= 450
			|| this.snake.segments[0].y < 0
			|| this.snake.segments[0].y >= 450
			|| this.isHiting()
		){
			this.setState('paused');
		}

		for(i in this.snake.segments){
			var s = this.snake.segments[i];
			if(i == 0){
				ctx.fillStyle = "#ff0000";
				ctx.fillRect(s.x,s.y,10,10);
				x = this.snake.segments[i].x;
				y = this.snake.segments[i].y;
				if(this.snake.dir == 'right'){
					this.snake.segments[i].x += 10;
				}
				if(this.snake.dir == 'left'){
					this.snake.segments[i].x -= 10;
				}
				if(this.snake.dir == 'top'){
					this.snake.segments[i].y -= 10;
				}
				if(this.snake.dir == 'down'){
					this.snake.segments[i].y += 10;
				}
			}else{
				ctx.fillStyle = "#000000";
				ctx.fillRect(s.x,s.y,10,10);
				var auxX = this.snake.segments[i].x;
				var auxY = this.snake.segments[i].y;
				this.snake.segments[i].x = x;
				this.snake.segments[i].y = y;
				x = auxX;
				y = auxY;
			}
		}

		ctx.fillStyle = "#000000";
		ctx.fillRect(this.meat.x,this.meat.y,10,10);


		//console.log('rendering ' + this.snake.dir);
	};



});

var game = new newGame();
//game.start();
