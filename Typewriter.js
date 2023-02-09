let delay = effect("delay")("Slider");
let type_end = delay + effect("type duration")("Slider");
let localTime = time - inPoint;

let typed_amount = linear(localTime, delay, type_end, 0, text.sourceText.length);
let cursor = (effect("cursor")("Checkbox") == true && Math.sin(time*10) > 0) ? "|" : "";

text.sourceText.substr(0, typed_amount) + cursor
