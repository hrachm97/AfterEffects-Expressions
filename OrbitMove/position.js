let angle = degreesToRadians(effect("Angle")("Angle") - 90);
let x = Math.cos(angle);
let y = Math.sin(angle);
let r1 = effect("r1")("Slider");
let r2 = effect("elipse")("Checkbox") == true ? effect("r2")("Slider") : effect("r1")("Slider")
try {
	effect("Layer center")("Layer").position+[r1 * x, r2 * y]
} catch(err) {
	position + [r1 * x, r2 * y]
}
