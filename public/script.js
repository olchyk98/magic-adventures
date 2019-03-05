const objects = { // 5, 12
	"BACKGROUND_CAVE": {
		load: true,
		type: "BACKGROUND",
		url: './gameAssets/backgrounds/cave-dark-1.jpg',
		file: null
	},
	"BLOCK_CAVE_DEFAULT": {
		mark: 'x',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/9.png',
		file: null
	},
	"BLOCK_CAVE_GRASSUP": {
		mark: 'g',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/5.png',
		file: null
	},
	"BLOCK_CAVE_CUTDOWN": {
		mark: 'c',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/12.png',
		file: null
	},
	"BLOCK_ENV_TORCHPIPE_UP": {
		mark: 'k',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/blocks_env/torch/torchpipe.png',
		file: null,
		className: "TorchPipe"
	},
	"BLOCK_ENV_TORCHPIPE_DOWN": {
		mark: 'm',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/blocks_env/torch/torchpipe-rotated.png',
		file: null,
		className: "TorchPipe"
	},
	"VISUAL_SPIKES": {
		mark: 'i',
		load: true,
		stack: true,
		type: "VISUAL_ITEM",
		className: "Spikes",
		file: {
			min: './gameAssets/visual/spikes/1.png',
			low: './gameAssets/visual/spikes/2.png',
			medium: './gameAssets/visual/spikes/3.png',
			max: './gameAssets/visual/spikes/4.png'
		}
	},
	"HERO_MODEL": {
		load: true,
		stack: true,
		type: "CREATURE_MODEL",
		file: {
			walk: './gameAssets/creatures/hero/walk.png',
			idle: './gameAssets/creatures/hero/idle.png',
			jump: './gameAssets/creatures/hero/jump.png'
		}
	}
}

// o - space
// x - block
// g - block with grass
// c - block with bottom cutfade
// k - torch pipe top
// m - torch pipe down
// i - spikes
// s - player spawn

const maps = {
	"HELL": [ // 14 lines
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'ccccccccccxccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
		'oooooooooomooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'soooooooiokooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
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
	constructor(x, y, width, height) {
		this.pos = { x, y }
		this.dimensions = {
			height,
			width
		}
	}

	predictTouch(x, y, height, width) {
		if(
			x + width >= this.pos.x && x <= this.pos.x + this.dimensions.width &&
			y + height >= this.pos.y && y <= this.pos.y + this.dimensions.height
		) return this;
	}
}

class Block extends Element {
	constructor(x, y, texture) {
		let size = game.blockSize;

		super(x, y, size, size, texture);

		this.model = texture;
	}

	render() {
		image(
			this.model,
			this.pos.x,
			this.pos.y,
			this.dimensions.width,
			this.dimensions.height
		);

		return this;
	}

	update() {
		return this;
	}
}

window.TorchPipe = class TorchPipe extends Block {
	constructor(x, y, texture) {
		super(x, y, texture);

		this.dHitDelta = 100;
		this.hitDelta = 0;
	}
}

window.Spikes = class Spikes extends Element {
	constructor(x, y, textures) {
		super(
			x, y,
			game.blockSize,
			0 // auto
		);

		this.damage = 15;

		this.frame = 0;
		this.frames = textures;
	}

	render() {
		return this;
	}

	update() {
		return this;
	}
}

class Creature extends Element {
	constructor(x, y, width, height, speed) {
		super(x, y, width, height);

		this.speed = speed;
		this.gravity = .4;
		this.jumpHeight = 10;
		this.velocity = 0;

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
			let touched = null;

			const tX = io.predictTouch( // touch y
				this.pos.x,
				update.next.y,
				this.dimensions.width,
				this.dimensions.height
			);

			const tY = io.predictTouch( // touch x
				update.next.x,
				this.pos.y,
				this.dimensions.width,
				this.dimensions.height	
			);

			if(update.allowed.y && tX) {
				update.allowed.y = false;
				touched = tX;
			}

			if(update.allowed.x && tY) {
				update.allowed.x = false;
				touched = tY;
			}

			if(touched) {
				if(touched instanceof TorchPipe) {
					this.damage(touched.damage);
				}
			}
		});

		// ...
		if(update.allowed.x) {
			this.pos.x = update.next.x;
		}

		if(update.allowed.y) {
			this.velocity = update.next.velocity;
			this.pos.y = update.next.y;
		} else {
			this.velocity = 0;
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
			const b = objects[io].file;

			Object.keys(b).map(io => b[io] = loadImage(b[io]));
		}
	});
}

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);

	{
		let a = [], // spawn pos [x, y]
			b = [game.blockSize * 1.45, game.blockSize]; // hero sizes [height (+45% bigger than width), width]

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
			objects.HERO_MODEL.file
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
			const blockData = Object.values(objects).find(io => io.mark === ik);

			if(!blockData.className) {
				map[ia][il] = new Block(
					il * game.blockSize,	
					ia * game.blockSize,
					blockData.file
				).render();
			} else {
				map[ia][il] = new window[blockData.className](
					il * game.blockSize,	
					ia * game.blockSize,
					blockData.file
				).render();
			}
		});
	});

	// Render blocks
	map.forEach(io => {
		io.forEach(ik => {
			ik.render().update();
			// if(ik.chainSkill) ik.chainSkill();
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