
var newGame = gameMotor.extend(function(){
	this.setState('playing');

	this.devMode = true;

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
		console.log('turn left');
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
		console.log('turn right');
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

	this.renderGame = function(){
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");

		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0,0,450,450);

		var x = 0;
		var y = 0;

		for(i in this.snake.segments){
			var s = this.snake.segments[i];
			ctx.fillStyle = "#000000";
			ctx.fillRect(s.x,s.y,10,10);
			if(i == 0){
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
				var auxX = this.snake.segments[i].x;
				var auxY = this.snake.segments[i].y;
				this.snake.segments[i].x = x;
				this.snake.segments[i].y = y;
				x = auxX;
				y = auxY;
			}
		}
		console.log('rendering ' + this.snake.dir);
	};



});

var game = new newGame();
//game.start();
