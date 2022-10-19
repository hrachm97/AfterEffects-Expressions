let shot = footage("shots.json").sourceData.shot;
let percentage = 60;

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
		if (isInRange(i) && shot[i].input) {
			let prev_shot = shot[i - 1];
			let shot_duration = (shot[i].duration - shot[i - 1].duration);
			let type_duration = shot_duration * percentage / 100;
			return (time - prev_shot.duration) * 100 / type_duration;
		}
	}
	return 0
}
result();
