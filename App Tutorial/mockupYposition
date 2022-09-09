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

let move = effect("move")("Slider");
function getAnim(move, i, t = 1) {
	return move.valueAtTime(time - (shot[i].duration - t/2))
}

let center = thisComp.height / 2;

let margin_medium = effect("margin vertical")("Slider") + (thisLayer.height*(medium/100) / 2);
let mid_pos = margin_medium - center;

let margin_close = effect("margin vertical")("Slider") + (thisLayer.height*(close/100) / 2);
let close_pos = margin_close - center;

let result;
if (time <= shot[0].duration + 0.5) {
	if (shot[0].type == Type.full) {
		switch(shot[1].type) {
			case Type.full:
				result = center;
				break;
			case Type.medium:
				result = linear(getAnim(move, 0), 0, 1, center, center + shot[1].align * mid_pos);
				break;
			case Type.close:
				result = linear(getAnim(move, 0), 0, 1, center, center + shot[1].align * close_pos);
				break;
			default:
				break;
		}
	} else if (shot[0].type == Type.medium) {
		switch(shot[1].type) {
			case Type.full:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * mid_pos, center);
				break;
			case Type.medium:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * mid_pos, center + shot[1].align * mid_pos);
				break;
			case Type.close:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * mid_pos, center + shot[1].align * close_pos);
				break;
			default:
				break;
		}
	} else if (shot[0].type == Type.close) {
		switch(shot[1].type) {
			case Type.full:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * close_pos, center);
				break;
			case Type.medium:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * close_pos, center + shot[1].align * mid_pos);
				break;
			case Type.close:
				result = linear(getAnim(move, 0), 0, 1, center + shot[0].align * close_pos, center + shot[1].align * close_pos);
				break;
			default:
				break;
		}
	} 
} else if (time > shot[shot.length - 2].duration + 0.5) {
	switch(shot[shot.length - 1].type) {
		case Type.full:
			result = center;
			break;
		case Type.medium:
			result = center + shot[shot.length - 1].align * mid_pos;
			break;
		case Type.close:
			result = center + shot[shot.length - 1].align * mid_pos;
			break;
		default:
			break;
	}
} else {
	for (let i = 1; i < shot.length - 1; i++) {
		if (time > shot[i - 1].duration + 0.5 & time <= shot[i].duration + 0.5) {
			if (shot[i].type == Type.full) {
				switch(shot[i + 1].type) {
					case Type.full:
						result = center;
						break;
					case Type.medium:
						result = linear(getAnim(move, i), 0, 1, center, center + shot[i + 1].align * mid_pos);
						break;
					case Type.close:
						result = linear(getAnim(move, i), 0, 1, center, center + shot[i + 1].align * close_pos);
						break;
					default:
						break;
				}
			} else if (shot[i].type == Type.medium) {
				switch(shot[i + 1].type) {
					case Type.full:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * mid_pos, center);
						break;
					case Type.medium:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * mid_pos, center + shot[i + 1].align * mid_pos);
						break;
					case Type.close:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * mid_pos, center + shot[i + 1].align * close_pos);
						break;
					default:
						break;
				}
			} else if (shot[i].type == Type.close) {
				switch(shot[i + 1].type) {
					case Type.full:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * close_pos, center);
						break;
					case Type.medium:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * close_pos, center + shot[i + 1].align * mid_pos);
						break;
					case Type.close:
						result = linear(getAnim(move, i), 0, 1, center + shot[i].align * close_pos, center + shot[i + 1].align * close_pos);
						break;
					default:
						break;
				}
			}
		}
	}
}
result
