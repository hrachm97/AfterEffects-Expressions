let object = effect("Layer to follow")("Layer").position.valueAtTime(time - effect("Delay (seconds)")("Slider"));
let Length = length(object, thisLayer.position);
let vec = object - thisLayer.position;
try {
	//when Length is 0 the expression bellow throws an exception
	let angle = vec[1] < 0 ? radiansToDegrees(Math.asin(vec[0] / Length)) : 180 - radiansToDegrees(Math.asin(vec[0] / Length));
	angle + effect("Angle Control")("Angle");
} catch(err) {
