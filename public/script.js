const objects = {
	"BACKGROUND_CAVE": {
		load: true,
		type: "BACKGROUND",
		url: './gameAssets/backgrounds/cave-dark-1.jpg',
		file: null
	},
	"BLOCK_DEFAULT": {
		mark: 'x',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/9.png',
		file: null
	},
	"HERO_MODEL": {
		load: true,
		stack: true,
		type: "CREATURE_MODEL",
		files: {
			walk: './gameAssets/creatures/hero/walk.png',
			idle: './gameAssets/creatures/hero/idle.png',
			jump: './gameAssets/creatures/hero/jump.png'
		}
	}
}

// o - space
// x - block
// s - player spawn

const maps = {
	"HELL": [ // 14 lines
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
	]
}

const game = {
	blockSize: innerHeight / Object.values(maps)[0].length,
	heroObject: null,
	camera: {
		translateX: 0
	}
}

const map_construct = maps.HELL.map(io => io.split(""));
const map = [];

class Element {
	constructor(x, y, width, height, model) {
		this.pos = { x, y }
		this.dimensions = {
			height,
			width
		}

		this.model = model;
	}

	render() {
		fill(255);
		image(
			this.model,
			this.pos.x,
			this.pos.y,
			this.dimensions.width,
			this.dimensions.height
		);

		return this; // IMPORTANT
	}

	update() {
		return this;
	}

	predictTouch(x, y, height, width) {
		if(
			x + width >= this.pos.x && x <= this.pos.x + this.dimensions.width &&
			y + height >= this.pos.y && y <= this.pos.y + this.dimensions.height
		) {
			return true;
			// TODO
		}
	}
}

class Block extends Element {
	constructor(x, y, texture) {
		let size = game.blockSize;

		super(x, y, size, size, texture);
	}
}

class Creature {
	constructor(x, y, width, height, speed) {
		this.dimensions = {
			width,
			height
		}

		this.speed = speed;
		this.gravity = .4;
		this.jumpHeight = 10;
		this.velocity = 0;

		this.pos = { x, y }
		this.movement = {
			x: 0,
			y: 0
		}
		this.directionX = 1;
	}

	update() {
		let update = {
			allowed: {
				x: true,
				y: true
			},
			next: {
				x: this.pos.x + this.movement.x * this.speed,
				y: this.pos.y + this.velocity + this.gravity,
				velocity: this.velocity + this.gravity
			}
		}

		// test blocks
		map.flat().forEach(io => {
			if(
				update.allowed.x &&
				io.predictTouch( // touch X
					this.pos.x,
					update.next.y,
					this.dimensions.width,
					this.dimensions.height
				)
			) {
				update.allowed.y = false;
			}

			if(
				update.allowed.y &&
				io.predictTouch( // touchY
					update.next.x,
					this.pos.y,
					this.dimensions.width,
					this.dimensions.height	
				)
			) {
				update.allowed.x = false;
			}
		});

		// ...
		if(update.allowed.x) {
			this.pos.x = update.next.x;
		}

		// if(update.next.y > this.pos.y) {
		// 	this.velocity += this.gravity;
		// }

		if(update.allowed.y) {
			this.velocity = update.next.velocity;
			this.pos.y = update.next.y;
		}

		return this;
	}
}

class Hero extends Creature {
	constructor(x, y, width, height, models) {
		super(x, y, width, height, 5);

		this.models = models;
		this.model = this.models.idle;
	}

	render() {
		image(
			this.model,
			this.pos.x,
			this.pos.y,
			this.dimensions.height,
			this.dimensions.width
		);

		return this;
	}

	processKey(keyCode, isPressed) {
		switch(keyCode) {
			case 65: // a :: left
				this.movement.x = (isPressed) ? -1 : 0;
			break;
			case 68: // d :: right
				this.movement.x = (isPressed) ? 1 : 0;
			break;
			case 32:
				if(isPressed) this.velocity = -this.jumpHeight;
			break;
			default:break;
		}
	}

	updateCamera() { // TODO: Stop when map ends
		const out = width / 2 - this.speed;

		if(this.pos.x > out && this.pos.x + width / 2 < map_construct[0].length * game.blockSize) {
			game.camera.translateX = -(this.pos.x - out);
		}

		return this;
	}
}

function preload() {
	Object.keys(objects)
	.filter(io => objects[io].load).forEach(io => {
		const a = objects[io];

		if(!a.stack) {
			objects[io].file = loadImage(objects[io].url);
		} else {
			const b = objects[io].files;

			Object.keys(b).map(io => b[io] = loadImage(b[io]));
		}
	});
}

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);

	{
		let a = [], // spawn pos [x, y]
			b = [50, 35]; // hero sizes [height, width]

		map_construct.forEach((io, ik) => {
			io.forEach((il, ia) => {
				if(a.length) return;

				if(il === "s") {
					a = [
						ia * game.blockSize, // x
						ik * game.blockSize - b[1] / 2, // y
					];
				}
			});
		});


		game.heroObject = new Hero(
			a[0],
			a[1],
			b[0],
			b[1],
			objects.HERO_MODEL.files
		);
	}
}

function draw() {
	frameRate(60);
	translate(game.camera.translateX, 0);

	background(0);
	image(
		objects["BACKGROUND_CAVE"].file,
		0,
		0,
		width,
		height
	);

	// Is reactive now
	map_construct.forEach((io, ia) => { // Y
		io.forEach((ik, il) => { // X
			if(['o', 's'].includes(ik) || (map[ia] && map[ia][il])) return;

			if(!map[ia]) map[ia] = [];

			map[ia][il] = new Block(
				il * game.blockSize,	
				ia * game.blockSize,
				Object.values(objects).find(io => io.mark === ik).file
			).render();
		});
	});

	// Render blocks
	map.forEach(io => {
		io.forEach(ik => {
			ik.render().update();
		});
	});

	// Render player
	game.heroObject.render().update().updateCamera();

}

function keyPressed() {
	game.heroObject.processKey(keyCode, true);
}

function keyReleased() {
	game.heroObject.processKey(keyCode, false);
}