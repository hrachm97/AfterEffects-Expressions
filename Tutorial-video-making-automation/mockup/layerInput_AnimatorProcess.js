let shot = footage("shots.json").sourceData.shot;
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
		cursor = shot[i].input[2];
	}
}

let unit_To_Percent = 100 / text.sourceText.length;
let loop = 0;
let x = Math.sin(time * 10);
(x > 0) ? loop = 0 : loop = 1;
let process = text.animator("Animator 1").selector("process + (cursor?)").start;
if (cursor)
	process - unit_To_Percent * loop;
else 
	process
