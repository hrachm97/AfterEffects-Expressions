const _duration = effect("duration")("Slider");
const Speed = 1 / _duration; // sweap per second
const sweaper = time % _duration; // loops from 0 to duration amount in real time speed
const unitSweap = sweaper*Speed; // loops from 0 to 1 in duration time
const cosinus_sweap = Math.cos(Math.PI * unitSweap); // loops from 1 to -1
const slope = effect("CC Light Sweep")("Direction");


// for layers without distinct sizes (width, height) exmp. thisLayer.height === thisComp.height
const has_size = !(width === thisComp.width && height === thisComp.height);
const rect = thisLayer.sourceRectAtTime();
const Height = has_size ? height : rect.height*scale[1]/100;
const Width = has_size ? width : rect.width*scale[0]/100;
const top_left = position - [anchorPoint[0]*scale[0],anchorPoint[1]*scale[1]]/100 + [rect.left*scale[0]/100, rect.top*scale[1]/100];
let [x,y] = has_size ? [0,0] : [top_left[0], top_left[1]];

const slope_interval = (slope > 0 ? unitSweap : 1 - unitSweap) * Math.tan(degreesToRadians(slope)) * Height;
const width_interval = cosinus_sweap * effect("CC Light Sweep")("Width") * 2 / Math.cos(degreesToRadians(slope));

[x + unitSweap * Width + slope_interval - width_interval, y]
