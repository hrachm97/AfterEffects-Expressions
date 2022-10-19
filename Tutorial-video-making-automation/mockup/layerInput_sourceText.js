let shot = footage("shots.json").sourceData.shot;
let SourceText = "";
let cursor;

function isInRange(i) {
	if (i > 0) {
		return time >= shot[i - 1].duration && time < shot[i].duration
	}
	else {
		return time < shot[0].duration
	}
}

for (i in shot) {
	if (isInRange(i) && shot[i].input) {
		SourceText = shot[i].input[1];
		cursor = shot[i].input[2];
	}
}
let process = SourceText.substr(0,text.sourceText.length * effect("opened percentage (process)")("Slider") / 100);
if (cursor) {
process + "|"
}else {
process
}
