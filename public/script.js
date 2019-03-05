const objects = {
	"DEFAULT_BLOCK": {
		load: true,
		type: "TEXTURE",
		url: './gameAssets/tiles/9.png',
		file: null
	}
}

const game = {
	blockSize: 30
}

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
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
		'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'
	]
}

const map_construct = maps.HELL.map(io => io.split(""));
const map = [];

class Element {
	constructor(x, y, height, width) {
		this.pos = { x, y }
		this.dimensions = {
			height,
			width
		}
	}

	render() {
		fill(255);
		rect(
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

class Block extends Element {
	constructor(x, y) {
		let size = game.blockSize;

		super(x, y, size, size);
	}
}

function preload() {
	Object.keys(objects)
	.filter(io => objects[io].load).forEach(io => {
		objects[io].file = loadImage(objects[io].url);
	});
}

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);
}

function draw() {
	background(0);

	// Is reactive now
	map_construct.forEach((io, ia) => { // Y
		io.forEach((ik, il) => { // X
			if(!map[ia]) map[ia] = [];
			map[ia][il] = new Block(
				il * game.blockSize,	
				ia * game.blockSize
			);
		});
	});
}