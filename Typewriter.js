var cursor = (effect("cursor")("Checkbox") == true && Math.sin(time*10) > 0) ? "|" : "";
var delay = effect("delay")("Slider");
var type_end = delay + effect("type duration")("Slider");

localTime = time - inPoint;
text.sourceText.substr(0, linear(localTime, delay, type_end, 0, text.sourceText.length)) + cursor
