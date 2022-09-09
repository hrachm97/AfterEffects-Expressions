let n = effect("number of segments")("Slider");
n = (n < 1) ? 1 : n;
let l = content("Ellipse 1").content("Ellipse Path 1").size[0] * Math.PI;
let gap = content("Ellipse 1").content("Stroke 1").dash.gap;
result = l / n - gap 
