let shot = footage("shots.json").sourceData.shot;

function isInRange(i) {
	if (i > 0) {
		return time >= shot[i - 1].duration && time < shot[i].duration
	}
	else {
		return time < shot[0].duration
	}
}

function result() {
	for (i in shot) {
		if (isInRange(i) && shot[i].touch) {
			let [x,y] = shot[i].touch;
			return [x / 100 * thisComp.width, y / 100 * thisComp.height];
		}
	}
	return [-200,-200];
}

result()
