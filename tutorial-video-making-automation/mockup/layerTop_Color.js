av = effect("Color Control")("Color")[0] * effect("Color Control")("Color")[1] * effect("Color Control")("Color")[2];
if (av < .125) [1,1,1,1]
else [0,0,0,1]
