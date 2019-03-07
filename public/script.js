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
			jump: [
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
		'sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
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
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooogoooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooogoooooooooooooooooooooooooxooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooogooooooooofgooooooooooooooooooooooogoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooosoooooofooooooooooofooooooogooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooogoooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooogooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooxooxoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
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
		'sooooooooooooooooooooooooooooooooooouooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
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
	camera: {
		translateX: 0,
		translateY: 0
	},
	blockSelector: {
		active: true,
		blockY: 0,
		blockX: 0
	},
	monsters: []
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
			console.log("GAME END");

			return;
		}
	}

	map_construct = maps[game.map].map(io => io.split(""));
	map = [];

	generateHero();
}

class Element {
	constructor(isObstacle, x, y, width, height) {
		this.pos = { x, y }
		
		this.height = height;
		this.width = width;

		this.isObstacle = isObstacle;
	}

	predictTouch(x, y, height, width) {
		if(!this.isObstacle) return null

		if(
			x + width >= this.pos.x && x <= this.pos.x + this.width &&
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
		let wouldFire = false;

		if(!this.fired && target.type === "HERO" && this.configuration.onFire) wouldFire = true;

		if(this.frame !== 0 && !wouldFire) {
			target.damage(this.damageValue);
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
		super(true, x, y, width, height);

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
			if(this.type === "HERO" && this.pos.x > mapWidth) {
				changeMap(true);
			}
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
		super(false, x, y, 0, 0);

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
			this.spawnDelta = this.dSpawnDelta;

			game.monsters.push(new Mage(
				this.pos.x,
				this.pos.y,
				this.spreadTextures
			));
		}

		return this;
	}
}

window.MageSpawner = class MageSpawner extends Spawner {
	constructor(x, y, textures, arrayY, arrayX, comEnv, objectName, configuration) {
		let spawnDelta = 0; // 400

		super(x, y, arrayX, arrayY, spawnDelta, Mage, objects["MONSTER_MAGE"].file);
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

		return this;
	}
}

class Mage extends Monster {
	constructor(x, y, textures) {
		let speed = 30,
			width = game.blockSize,
			height = game.blockSize;

		super(x, y, width, height, speed);

		this.textures = textures; // library
		this.frames = textures.jump; // current
		this.frameN = 0;
	}

	render() {
		image(
			this.frames[this.frameN], // TODO: CROP MODEL IMAGES
			this.pos.x,
			this.pos.y,
			this.width,
			this.height
		);

		return this;
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

		// game.camera.translateY = this.pos.y - height / 2; // hero is always in centerd 

		return this;
	}
}

function generateHero() {
	let a = [], // spawn pos [x, y]
		b = [game.blockSize, game.blockSize * .75]; // hero sizes [width (+45% bigger than height), heightd]

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

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);

	generateHero();
	changeMap(false);

	frameRate(60);
}

function draw() {
	translate(-game.camera.translateX, -game.camera.translateY);
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
	game.monsters.forEach(io => {
		io.render().renderHB().update();
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