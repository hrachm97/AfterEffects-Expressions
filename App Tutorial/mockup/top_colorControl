let key_layer;

function isShot(Layer) {
	return Layer.name.substr(0,5) == "shot "
}

for (let i = comp("main").numLayers; i > 1; i--) {
	if (isShot(comp("main").layer(i)) && comp("main").layer(i).opacity == 100) {
		key_layer = comp("main").layer(i);
	}
}
try {
	key_layer.sampleImage([key_layer.width / 2, key_layer.height / 50], [1, 1])
} catch (err) {
	[0,0,0,0]
}
