// Do Mage models bigger (crop them)
// Use objects and letters to build map. (you can pass different functions into objects instead of creating a new class for a fun thing. such as spikes that moves you to a new level)
// FLY >> Second half -> key
// Items: health, speed
// Big maps

const objects = { // 5, 12
	"BACKGROUND_CAVE": {
		objectName: "BACKGROUND_CAVE",
		load: true,
		type: "BACKGROUND",
		url: './gameAssets/backgrounds/cave-dark-1.jpg',
		file: null
	},
	"BLOCK_CAVE_DEFAULT": {
		objectName: "BLOCK_CAVE_DEFAULT",
		mark: 'x',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/9.png',
		file: null,
		className: "Block"
	},
	"BLOCK_CAVE_GRASSUP": {
		objectName: "BLOCK_CAVE_GRASSUP",
		mark: 'g',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/5.png',
		file: null,
		className: "Block"
	},
	"BLOCK_CAVE_GRASSUP_FALL": {
		mark: 'f',
		load: false,
		comEnv: true, // can change another blocks
		type: "BLOCK_TYPE",
		file: null,
		objectName: "BLOCK_CAVE_GRASSUP",
		className: "FakeBlock"
	},
	"BLOCK_CAVE_GRASSUP_FALLSELF": {
		mark: 'h',
		load: false,
		comEnv: false, // can change another blocks
		type: "BLOCK_TYPE",
		file: null,
		objectName: "BLOCK_CAVE_GRASSUP",
		className: "FakeBlock"
	},
	"BLOCK_CAVE_DEFAULT_FALLSELF": {
		mark: 'j',
		load: false,
		comEnv: false, // can change another blocks
		type: "BLOCK_TYPE",
		objectName: "BLOCK_CAVE_DEFAULT",
		file: null,
		className: "FakeBlock"
	},
	"BLOCK_CAVE_CUTDOWN": {
		objectName: "BLOCK_CAVE_CUTDOWN",
		mark: 'c',
		load: true,
		type: "BLOCK_TEXTURE",
		url: './gameAssets/tiles/12.png',
		file: null,
		className: "Block"
	},
	"VISUAL_SPIKES": {
		objectName: "VISUAL_SPIKES",
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
	"VISUAL_SPIKES_NEXTLEVEL": {
		mark: 'z',
		load: false,
		comEnv: false, // can change another blocks
		type: "BLOCK_TYPE",
		objectName: "VISUAL_SPIKES",
		file: null,
		className: "Spikes",
		configuration: {
			onFire: () => changeMap(true)
		}
	},
	"AURA_MAGE_SPAWNER": {
		mark: 'u',
		objectName: "AURA_MAGE_SPAWNER",
		load: false,
		type: "AURA_CONFIGURATION",
		className: "MageSpawner"
	},
	"MONSTER_MAGE": {
		objectName: "MONSTER_MAGE",
		load: true,
		stack: true,
		stackAnimations: true,
		file: {
			attack: [
				'./gameAssets/creatures/mage/attack1.png',
				'./gameAssets/creatures/mage/attack2.png',
				'./gameAssets/creatures/mage/attack3.png',
				'./gameAssets/creatures/mage/attack4.png'
			],
			die: [
				'./gameAssets/creatures/mage/die1.png',
				'./gameAssets/creatures/mage/die2.png',
				'./gameAssets/creatures/mage/die3.png',
				'./gameAssets/creatures/mage/die4.png',
				'./gameAssets/creatures/mage/die5.png',
				'./gameAssets/creatures/mage/die6.png'
			],
			hit: [
				'./gameAssets/creatures/mage/hit1.png',
				'./gameAssets/creatures/mage/hit2.png'
			],
			idle: [
				'./gameAssets/creatures/mage/jump1.png'
			],
			run: [
				'./gameAssets/creatures/mage/run1.png',
				'./gameAssets/creatures/mage/run2.png',
				'./gameAssets/creatures/mage/run1.png',
				'./gameAssets/creatures/mage/run4.png',
				'./gameAssets/creatures/mage/run5.png',
				'./gameAssets/creatures/mage/run6.png',
				'./gameAssets/creatures/mage/run7.png',
				'./gameAssets/creatures/mage/run8.png'
			]
		}
	},
	"HERO_MODEL": {
		objectName: "HERO_MODEL",
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
// c - cut to down block
// g - grass block
// f - fake grass block that removes all blocks under self
// h - fake grass block that can remove self
// j - fake cave block that can remove self
// i - spikes
// s - player spawn
// u - mage spawner

const maps = {
	"STILL": [
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooofffffffffffffffffffffffff',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooofxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooiooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooogggggfgggggggfhfggggggggggggggggggfoooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxoooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooogggggxxxxxxxxxxxxxxixxxxxxxxxxxxxxxxxxxxoooooooooooooooooooooooooooo',
		'oooooooooooioooooooooooooooooooooooooiooooooooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoooooooooooooooooooooooooooo',
		'gggggggggggggggghgffffggfggfggfgggggggggggggggggggggxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxffgggggggggggggggggggggggggg',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	],
	"FLY": [
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooogooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooiooooogooooioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooogooooooooofgooooooooooooooooooooooogoooooooooooooooooooooioooooooooooooooooioooooooooooooooooo',
		'ooooooooooooooooooooooosoooooofooooooooooofooooooogooooooooooxooooooooooooooooooooogooooofooooooooooogoooooooooooooooooo',
		'ooooooooooooooooooooooogoooooooooooooooooooooooooooooooooooooxooooooooooooooooiooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxoooooooooooooooogooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooogoooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooghhxoooooioooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxooooofoooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoioooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxofoooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxzzxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfffgghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
		'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjxxjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
	],
	"CAVE": [
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'soooooooooooooooooooooooouoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	]
}

const game = {
	blockSize: innerHeight / Object.values(maps)[0].length,
	heroObject: null,
	map: "CAVE",
	mapsLoop: [ "CAVE", "STILL", "FLY" ],
	// mapsLoop: [ "STILL", "FLY", "CAVE" ],
	time: {
		mapTime: 0,
		globalTime: 0,
		int: null
	},
	camera: {
		translateX: 0,
		translateY: 0
	},
	monsters: {
		mages: []
	}
}

let map_construct = [];
let map = [];

function changeMap(next = true) {
	if(next) {
		const _a = game.mapsLoop,
			  a = _a.findIndex(io => io === game.map),
			  b = Object.values(maps)[a + 1];

		if(b) {
			game.map = _a[a + 1];
		} else {
			clearInterval(game.time.int);

			return;
		}
	}

	map_construct = maps[game.map].map(io => io.split(""));
	map = [];

	game.time.mapTime = 0;

	Object.keys(game.monsters).forEach(io => {
		game.monsters[io].length = 0;
	});
	generateHero();
}

class Element {
	constructor(isObstacle, x, y, width, height) {
		this.pos = { x, y }
		
		this.height = height;
		this.width = width;

		this.isObstacle = isObstacle;
	}

	predictTouch(x, y, width, height) {
		if(!this.isObstacle) return false;

		// console.log((x + width >= this.pos.x && x <= this.pos.x + width),
			// y + height >= this.pos.y && y <= this.pos.y + this.height);

		if(
			x + width >= this.pos.x && x <= this.pos.x + width &&
			y + height >= this.pos.y && y <= this.pos.y + this.height
		) return this;

	}
}

window.Block = class Block extends Element {
	constructor(x, y, texture, arrayY, arrayX, comEnv, objectName, configuration) {
		let size = game.blockSize;

		super(true, x, y, size, size, texture);

		this.model = texture;
		this.configuration = configuration;

		this.comEnv = comEnv;
		this.objectName = objectName;

		this.arrayPos = {
			x: arrayX,
			y: arrayY
		}
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

window.FakeBlock = class FakeBlock extends Block {
	constructor(x, y, model = null, arrayY, arrayX, comEnv, objectName, configuration) {
		super(x, y, objects[objectName].file, arrayY, arrayX, comEnv, objectName, configuration);

		this.fired = false;
	}

	fire() {
		if(this.fired) return;
		this.fired = true;

		const a = this.arrayPos;

		if(this.comEnv) {
			const b = map_construct.length - a.y
			
			for(let ma = 0; ma < b; ma++) {
				map_construct[a.y + ma][a.x] = 'o';
			}
		} else {
			map_construct[a.y][a.x] = 'o';
		}

		if(this.configuration.onFire) this.configuration.onFire();
	}
}

window.Spikes = class Spikes extends Element {
	constructor(x, y, textures, arrayY, arrayX, comEnv, objectName, configuration) {
		let size = game.blockSize;

		super(true, x, y, size, 0);

		this.frames = Object.values(textures || objects[objectName].file);

		this.frame = 0;
		this.setFrame(this.frame);
		this.movement = 1;

		this.damageValue = 10;
		this.objectName = objectName;
		this.configuration = configuration;

		this.startY = y;
		this.comEnv = comEnv;
		this.fired = false;

		this.dFrameDelta = this.frameDelta = random(20, 30);
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
		let wouldFire = false;

		if(!this.fired && target.type === "HERO" && this.configuration.onFire) wouldFire = true;

		if(this.frame !== 0 && !wouldFire) {
			if(target.type === "HERO") {
				target.damage(this.damageValue);
			} else {
				target.damage(this.damageValue);
			}
			return;
		}

		if(wouldFire && this.configuration.onFire) {
			this.fired = true;
			this.configuration.onFire();
		}
	}
}

class Creature extends Element {
	constructor(x, y, width, height, speed, hp, type) {
		super(false, x, y, width, height);

		this.speed = speed;
		this.jumpHeight = innerHeight / 45;

		this.type = type;

		this.gravity = .75;
		this.velocity = 0;

		this.attackDelta = this.dAttackDelta = 30;

		this.movement = {
			x: 0,
			y: 0
		}
		this.directionX = 1;

		this.stabXVelocity = 0; // cannot be more than 0

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

	renderHB() { // render health bar
		let a = 70, // max width
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

		return this;
	}

	jump() {
		if(!this.velocity) {
			this.velocity = -this.jumpHeight;
		}
	}

	update() {
		if(this.isDead) return this;

		if(this.attackDelta > 0) this.attackDelta--;
		else if(this.attackDelta < 0) this.attackDelta = 0;

		let update = {
			allowed: {
				x: true,
				y: true
			},
			next: {
				x: this.pos.x + this.movement.x * this.speed + this.stabXVelocity,
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
			if(!io) return;

			const tX = io.predictTouch( // touch x
				update.next.x,
				this.pos.y,
				this.width,
				this.height
			);

			const tY = io.predictTouch ( // touch y
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

				if( (touched.x instanceof Spikes && (fired = "x")) || (touched.y instanceof Spikes && (fired = "y")) ) {
					touched[fired].damage(this);
				} else if(touched.y instanceof FakeBlock && touched.y.fire) {
					touched.y.fire();
				}
			}
		});

		// ...
		const mapWidth = map_construct[0].length * game.blockSize
		if(update.allowed.x && update.next.x > 0 && (update.next.x + this.width < mapWidth || this.type === "HERO")) {
			this.pos.x = update.next.x;

			if(this.stabXVelocity !== 0) {
				this.stabXVelocity += ((this.stabXVelocity < 0) ? 1 : -1);
			}

			if(this.type === "HERO" && this.pos.x > mapWidth) {
				changeMap(true);
				this.stabXVelocity = 0;
			}
		} else {
			this.stabXVelocity = 0;
		}

		if(update.allowed.y && update.next.y > 0) {
			this.velocity = update.next.velocity;
			this.pos.y = update.next.y;

			if(this.pos.y > map_construct.length * game.blockSize) { // out
				generateHero();
			}
		} else {
			this.velocity = 0;
		}

		return this;
	}
}

class Spawner extends Element {
	constructor(x, y, arrayX, arrayY, spawnDelta, spreadClass, spreadTextures) {
		super(false, x, y + game.blockSize, 0, 0);

		this.arrayPos = {
			x: arrayX,
			y: arrayY
		}

		this.spreadObject = spreadClass;
		this.spreadTextures = spreadTextures;

		this.dSpawnDelta = this.spawnDelta = spawnDelta;
	}

	render() {
		return this;
	}

	update() {
		if(--this.spawnDelta <= 0) {
			this.spawnDelta = Infinity; // this.dSpawnDelta // DEBUG

			let width = game.blockSize - 5,
				height = width * 1.5;

			game.monsters.mages.push(new Mage(
				this.pos.x,
				this.pos.y + game.blockSize - height,
				this.spreadTextures,
				width,
				height
			));
		}

		return this;
	}
}

window.MageSpawner = class MageSpawner extends Spawner {
	constructor(x, y, textures, arrayY, arrayX, comEnv, objectName, configuration) {
		let spawnDelta = 100; // 400 // DEBUG

		super(x, y, arrayX, arrayY, spawnDelta, Mage, objects["MONSTER_MAGE"].file);
	}
}

class Monster extends Creature {
	constructor(x, y, width, height, speed, viewPixels, damage) {
		super(x, y, width, height, speed, 40, "MONSTER");

		this.viewPixels = viewPixels; // view radius
		this.damage = damage;

		this.npcWalkRad = {
			gone: 0,
			max: 150,
			active: false
		}
	}
}

class Mage extends Monster {
	constructor(x, y, textures, width, height) {
		let speed = 10,
			viewPixels = 600,
			attackPixels = 20,
			damage = 25;

		super(x, y - height, width, height, speed, viewPixels, damage);

		this.textures = textures; // library
		this.frames = textures.idle;
		this.frameN = 0;

		this.framesName = 'idle';

		this.frameDelta = this.dFrameDelta = 10;
	}

	setFrames(frames, name) {
		this.framesName = name;

		this.frames = frames;
		this.frameN = 0;
	}

	updateFrame() {
		const a = this.frames,
			  b = this.frameN;

		if(a[b + 1]) {
			this.frameN++;
		} else {
			this.setFrames(this.textures.idle, 'idle');
		}
	}

	resolveFrames() {
		if(--this.frameDelta <= 0) {
			this.frameDelta = this.dFrameDelta;
 
			this.updateFrame();
		}

		return this;
	}


	// game.monsters[0].pos.y + game.monsters[0].height - 17 > map[17][36].pos.y

	render() {
		image(
			this.frames[this.frameN],
			this.pos.x,
			this.pos.y,
			this.width,
			this.height
		);

		return this;
	}

	think() {
		const target = game.heroObject;

		// Check if distance between monster and hero is more than view radius (check if monster can see hero)
		if(abs(this.pos.x - target.pos.x) > this.viewPixels) return;

		// Check if can attack |!> Move to the player
		if(abs(this.pos.x - target.pos.x) <= this.width && abs(this.pos.y - target.pos.y) <= this.height) {
			this.attack(target);
			if(this.framesName !== 'attack') this.setFrames(this.textures.attack, 'attack');
		} else {
			this.movement.x = (target.pos.x > this.pos.x) ? 1 : -1;
			if(this.framesName !== 'run') this.setFrames(this.textures.run, 'run');
		}

		return this;
	}

	attack(target) {
		if(this.attackDelta) return;

		this.attackDelta = this.dAttackDelta;

		target.stabXVelocity = 30 * this.movement.x || 1;
		target.velocity = -20;
		target.damage(this.damage);
	}
}

class Hero extends Creature {
	constructor(x, y, width, height, models) {
		let speed = 12.5;

		super(x, y, width, height, speed, 100, "HERO");

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

		// game.camera.translateY = this.pos.y - height / 2; // hero is always in centerd 

		return this;
	}
}

function generateHero() {
	let a = [], // spawn pos [x, y]
		b = [game.blockSize, game.blockSize * .75]; // hero sizes [width (+45% bigger than height), height]

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

function preload() {
	Object.keys(objects)
	.filter(io => objects[io].load).forEach(io => {
		const a = objects[io];

		if(!a.stack) {
			objects[io].file = loadImage(objects[io].url);
		} else {
			const b = objects[io].file; // ['a' 'sad']

			if(!a.stackAnimations) {
				Object.keys(b).forEach(io => b[io] = loadImage(b[io]));
			} else {
				Object.keys(b).map(io => b[io].map((ik, il) => b[io][il] = loadImage(ik)));
			}
		}
	});
}

game.time.int = setInterval(() => {
	game.time.mapTime += 100;
	game.time.globalTime += 100;
}, 100);

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);

	generateHero();
	changeMap(false);

	frameRate(60);
}

function draw() {
	noStroke();

	// ...
	translate(-game.camera.translateX, -game.camera.translateY);
	for(let ma = 0; ma < ceil(map_construct[0].length * game.blockSize / width); ma++) {
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
			if(!map[ia]) map[ia] = [];
			const blockData = Object.values(objects).find(io => io.mark === ik);

			if(map[ia][il] && !['o', 's'].includes(ik)) return;
			if(['o', 's'].includes(ik)) {
				if(!map[ia][il]) return;

				map[ia][il] = undefined;

				return;
			}

			const xpos = il * game.blockSize,
				  ypos = ia * game.blockSize;

			if(!blockData) { // DEBUG
				noLoop();
				console.error(`Invalid item marker: ${ ik }`)
			}

			if(!blockData.className) {
				map[ia][il] = new Block(
					xpos,	
					ypos,
					blockData.file,
					ia,
					il,
					blockData.comEnv,
					blockData.objectName,
					blockData.configuration || {}
				).render();
			} else {
				map[ia][il] = new window[blockData.className](
					xpos,	
					ypos,
					blockData.file,
					ia,
					il,
					blockData.comEnv,
					blockData.objectName,
					blockData.configuration || {}
				).render();
			}
		});
	});

	// Render blocks
	map.forEach(io => {
		io.forEach(ik => {
			if(!ik) return null;

			if(ik.pos.x + ik.width >= game.camera.translateX && ik.pos.x <= game.camera.translateX + width) {
				ik.render().update();
				if(ik.chainSkill) ik.chainSkill();
			}
		});
	});

	// Render monsters
	game.monsters.mages.forEach(io => {
		io.renderHB().render().update().resolveFrames().think();
	});

	// Render player
	game.heroObject.render().renderHB().update().updateModel().updateCamera();

	// Draw time
	textSize(64);
	fill('white');
	textAlign(CENTER);
	text(
		`${ floor(game.time.mapTime / 1000) }.${ (game.time.mapTime / 1000).toString().replace(/\d+\./g, '') }s`,
		(game.heroObject.pos.x > width) ? width / 2 + game.camera.translateX : width / 2,
		100
	);
	textSize(32);
	text(
		`${ floor(game.time.globalTime / 1000) }.${ (game.time.globalTime / 1000).toString().replace(/\d+\./g, '') }s`,
		(game.heroObject.pos.x > width) ? width / 2 + game.camera.translateX : width / 2,
		150
	);
}

function keyPressed() {
	game.heroObject.processKey(keyCode, true);
}

function keyReleased() {
	game.heroObject.processKey(keyCode, false);
}