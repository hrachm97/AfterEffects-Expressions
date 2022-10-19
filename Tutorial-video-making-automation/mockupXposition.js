let shot = footage("shots.json").sourceData.shot;
let settings = footage("Data.json").sourceData;

const full = settings.scale_amounts.full;
const medium = settings.scale_amounts.medium;
const close = settings.scale_amounts.close;

const Type = {
	full: 1,
	medium: 2,
	close: 3
};

let margin = thisComp.width - effect("margin horizontal")("Slider");
let center = thisComp.width/2;
let pos = margin - center;

let move = effect("move")("Slider");
function getAnim(move, i, t = 1) {
	return move.valueAtTime(time - (shot[i].duration - t/2));
}

function main() {
	let i = 1;
	let prev = shot[i - 1];
	let current = shot[i];
	let next = shot[i + 1];
	const penultimate = shot[shot.length - 2];
	const last = shot[shot.length - 1];
	if (time <= shot[0].duration + 0.5) { 
	//first shot
		if (prev.type == Type.full) {
			if (current.type == Type.full) {
				return linear(getAnim(move, 0), 0, 1, center + prev.align * pos, center + currnet.align * pos);
			} else {
				return linear(getAnim(move, 0), 0, 1, center + prev.align * pos, center);
			}
		} else if (prev.type == Type.medium) {
			if (currnet.type == Type.full) {
				return linear(getAnim(move, 0), 0, 1, center, center + current.align * pos)
			} else {
				return center;
			}
		} else if (prev.type == Type.close) {
			if (current.type == Type.full) {
				return linear(getAnim(move, 0), 0, 1, center, center + current.align * pos)
			} else {
				return center;
			}
		}
	} else if (time > penultimate.duration + 0.5) { 
	//last shot
		if (last.type == Type.full) {
			return center + last.align * pos;
		} else {
			return center
		} 
	} else { 
	//loop through middle shots
		while (i < shot.length - 1) {
			if (time > prev.duration + 0.5 & time <= current.duration + 0.5) {
				if (current.type == Type.full) {
					if (next.type == Type.full) {
						return linear(getAnim(move, i), 0, 1, center + current.align * pos, center + next.align * pos);
					} else {
						return linear(getAnim(move, i), 0, 1, center + current.align * pos, center)
					}
				} else if (current.type == Type.medium) {
					if (next.type == Type.full) {
						return linear(getAnim(move, i), 0, 1, center, center + next.align * pos)
					} else {
						return center
					}
				} else if (current.type == Type.close) {
					if (next.type == Type.full) {
						return linear(getAnim(move, i), 0, 1, center, center + next.align * pos)
					} else {
						return center
					}
				}
			}
			i++;
			prev = shot[i - 1];
			current = shot[i];
			next = shot[i + 1];
		}
	}
}
result = main();
