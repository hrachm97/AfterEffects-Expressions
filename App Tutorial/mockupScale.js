let shot = footage("shots.json").sourceData.shot;
let settings = footage("Data.json").sourceData;
const full = settings.scale_amounts.full;
const medium = settings.scale_amounts.medium;
const close = settings.scale_amounts.close;
let result;
let move = effect("move")("Slider");
const Type = {
	full: 1,
	medium: 2,
	close: 3
};

if (time <= shot[0].duration + 0.5) {
	if (shot[0].type == Type.full) {
		switch(shot[1].type) {
			case Type.full:
				result = full;
				break;
			case Type.medium:
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, full, medium);
				break;
			case Type.close:
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, full, close);
				break;
			default:
				break;
		}
	} else if (shot[0].type == Type.medium) {
		switch(shot[1].type) {
			case Type.full:
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, medium, full);
				break;
			case Type.medium:
				result = medium;
				break;
			case Type.close: 
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, medium, close);
				break;
			default:
				break;
		}
	} else if (shot[0].type == Type.close) {
		switch(shot[1].type) {
			case Type.full:
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, close, full);
				break;
			case Type.medium:
				result = linear(move.valueAtTime(time - (shot[0].duration - .5)), 0, 1, close, medium);
				break;
			case Type.close:
				result = close
				break;
			default:
				break;
		}
	} 
} else if (time >= shot[shot.length - 2].duration + 0.5) {
	result = full / 2 + shot[shot.length - 1].type * full / 2;
} else {
	for (let i = 1; i < shot.length - 1; i++) {
		let prev = shot[i - 1];
		let current = shot[i];
		let next = shot[i + 1];
		if (time > prev.duration + 0.5 & time <= current.duration + 0.5) {
			if (current.type == Type.full) {
				switch(next.type) {
				case Type.full:
					result = full;
					break;
				case Type.medium: 
					result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, full, medium);
					break;
				case Type.close:
					result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, full, close);
					break;
				default:
					break;
				}
			} else if (current.type == Type.medium) {
				switch(next.type) {
					case Type.full:
						result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, medium, full);
						break;
					case Type.medium:
						result = medium;
						break;
					case Type.close:
						result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, medium, close);
						break;
					default:
						break;
				}
			} else if (current.type == Type.close) {
				switch(next.type) {
					case Type.full:
						result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, close, full);
						break;
					case Type.medium:
						result = linear(move.valueAtTime(time - (current.duration - .5)), 0, 1, close, medium);
						break;
					case Type.close:
						result = close
						break;
					default:
						break;
				}
			}
		}
	}
}
[result,result]
