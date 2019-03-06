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
	"VISUAL_SPIKES": {
		mark: 'i',
		load: true,
		stack: true,
		type: "VISUAL_ITEM",
		file: {
			min: './gameAssets/visual/spikes/1.png',
			low: './gameAssets/visual/spikes/2.png',
			high: './gameAssets/visual/spikes/3.png',
			max: './gameAssets/visual/spikes/4.png'
		},
		className: "Spikes"
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
// i - spikes
// s - player spawn

const maps = {
	"HELL": [
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
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooioooooooooooooooooooooooooiooooooooooooooooooiooooooooooooioooooooooooooooooooooooooooooooooooooooooooooooooo',
		'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	],
	"FLY": [
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooogoooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooogoooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooogoooooooooogooooooooooooooooooooooogoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooosoooooooooooooooooooooooooogooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooogoooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooogooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
	]
}

const game = {
	blockSize: innerHeight / Object.values(maps)[0].length,
	heroObject: null,
	camera: {
		translateX: 0
	},
	blockSelector: {
		active: true,
		blockY: 0,
		blockX: 0
	}
}

const map_construct = maps["HELL"].map(io => io.split(""));
const map = [];

class Element {
	constructor(x, y, width, height) {
		this.pos = { x, y }
		
		this.height = height;
		this.width = width;
	}

	predictTouch(x, y, height, width) {
		if(
			x + width >= this.pos.x && x <= this.pos.x + this.width &&
			y + height >= this.pos.y && y <= this.pos.y + this.height
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
			this.width,
			this.height
		);

		return this;
	}

	update() {
		return this;
	}
}

window.Spikes = class Spikes extends Element {
	constructor(x, y, textures) {
		let size = game.blockSize;

		super(x, y, size, 0);

		this.frames = Object.values(textures);

		this.frame = 0;
		this.setFrame(this.frame);
		this.movement = 1;

		this.damageValue = 10;

		this.startY = y;

		this.dFrameDelta = this.frameDelta = random(10, 30);
	}

	setFrame(index) {
		const image = this.frames[index];

		this.height = (index !== 0) ? image.height : 0;
		this.frame = index;
		this.pos.y = this.startY + (game.blockSize - this.height);
	}

	render() {
		image(
			this.frames[this.frame],
			this.pos.x,
			this.pos.y,
			this.width,
			this.height
		);

		return this;
	}

	update() {
		if(--this.frameDelta <= 0) {
			this.frameDelta = this.dFrameDelta;

			if(!this.frames[this.frame += this.movement]) {
				this.frame -= this.movement;
				this.movement *= -1;
			}

			this.setFrame(this.frame);
		}

		return this;
	}

	damage(target) {
		if(this.frame !== 0) {
			target.damage(this.damageValue);
		}
	}
}

class Creature extends Element {
	constructor(x, y, width, height, speed, hp, type) {
		super(x, y, width, height);

		this.speed = speed;
		this.jumpHeight = 20;

		this.type = type;

		this.gravity = .75;
		this.velocity = 0;

		this.movement = {
			x: 0,
			y: 0
		}
		this.directionX = 1;

		this.maxHealth = this.health = hp;
	}
 
	damage(damage) {
		if(!damage || this.isDead) return;

		this.health -= damage;

		if(this.health <= 0) {
			this.isDead = true;
			this.health = 0;

			if(this.type === "HERO") {
				generateHero();
			}
		}
	}

	jump() {
		if(!this.velocity) {
			this.velocity = -this.jumpHeight;
		}
	}

	update() {
		if(this.isDead) return;

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
		let touched = {
			x: null,
			y: null
		}

		map.flat().forEach(io => {
			const tX = io.predictTouch( // touch x
				update.next.x,
				this.pos.y,
				this.width,
				this.height
			);

			const tY = io.predictTouch( // touch y
				this.pos.x,
				update.next.y,
				this.width,
				this.height	
			);

			if(update.allowed.x && tX) {
				update.allowed.x = false;
				touched.x = tX;
			}

			if(update.allowed.y && tY) {
				update.allowed.y = false;
				touched.y = tY;
			}

			if(touched.x || touched.y) {
				let fired = "";

				if((touched.x instanceof Spikes && (fired = "x")) || (touched.y instanceof Spikes && (fired = "y"))) {
					touched[fired].damage(this);
				}
			}
		});

		// ...
		if(update.allowed.x && update.next.x > 0 && update.next.x + this.width < map_construct[0].length * game.blockSize) {
			this.pos.x = update.next.x;
		}

		if(update.allowed.y && update.next.y > 0) {
			this.velocity = update.next.velocity;
			this.pos.y = update.next.y;
		} else {
			this.velocity = 0;
		}

		return this;
	}
}

class Monster extends Creature {
	constructor(x, y, width, height, speed) {
		super(x, y, width, height, speed, 40, "MONSTER");
	}

	renderHB() { // render health bar
		let a = 90, // max width
			b = 12.5, // height
			c = 15, // margin
			d = a / 100 * (this.health / this.maxHealth * 100) // width

		fill('red');
		rect(
			this.pos.x - a / 2 + this.width / 2 - c / 2,
			this.pos.y - b - c,
			d,
			b
		);
	}
}

class Hero extends Creature {
	constructor(x, y, width, height, models) {
		let speed = 10;

		super(x, y, width, height, speed, 0, "HERO");

		this.models = models;
		this.model = this.models.idle;
	}

	render() {
		image(
			this.model,
			this.pos.x,
			this.pos.y,
			this.height,
			this.width
		);

		return this;
	}

	updateModel() {
		if(this.velocity) {
			this.model = this.models.jump;
		} else if(this.movement.x) {
			this.model = this.models.walk;
		} else {
			this.model = this.models.idle;
		}

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
				if(isPressed) this.jump();
			break;
			default:break;
		}
	}

	updateCamera() {
		const out = width / 2 - this.speed;
		const mapWidth = map_construct[0].length * game.blockSize;

		if(this.pos.x > out && this.pos.x + width / 2 < mapWidth) {
			game.camera.translateX = this.pos.x - out;
		} else if(this.pos.x < out) {
			game.camera.translateX = 0;
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

function generateHero() {
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


	if(game.heroObject) delete game.heroObject;

	game.heroObject = new Hero(
		a[0],
		a[1],
		b[0],
		b[1],
		objects.HERO_MODEL.file
	);
}

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);

	generateHero();
	frameRate(60);
}

function draw() {
	translate(-game.camera.translateX, 0);
	background(0);
	for(let ma = 0; ma < Math.ceil(map_construct[0].length * game.blockSize / width); ma++) {
		image(
			objects["BACKGROUND_CAVE"].file,
			ma * width,
			0,
			width,
			height
		);
	}

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
			if(ik.chainSkill) ik.chainSkill();
		});
	});

	// Render player
	game.heroObject.render().update().updateModel().updateCamera();

}

function keyPressed() {
	game.heroObject.processKey(keyCode, true);
}

function keyReleased() {
	game.heroObject.processKey(keyCode, false);
}