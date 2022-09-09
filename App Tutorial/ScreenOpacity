let shot = footage("shots.json").sourceData.shot;
function isShot(Layer) {
	return Layer.name.substr(0,5) == "shot "
}
function find_index() {
	let shots_counter = 0;
	for (let i = thisComp.numLayers; i > 1; --i) {
		if (isShot(thisComp.layer(i))) {
			if (i == index) return shots_counter;
			if(++shots_counter >= shot.length) break;
		}
	}
};
let shot_index = find_index();
function isMyTurn() {
	if (shot_index > 0) {
		return time > shot[shot_index - 1].duration && time <= shot[shot_index].duration
	} else {
		return time <= shot[shot_index].duration
	}
};

try {
	if (isMyTurn()) result = 100;
	else result = 0;
} catch (err) {
	result = 0;
}
