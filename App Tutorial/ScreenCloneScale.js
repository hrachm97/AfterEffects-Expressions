let scale_amount = effect("Scale amount")("Point"); 
// amount of scale to cover the header of the screen (commonly wifi, battery, connection icons and time)
let ratio = scale_amount / transform.scale[0];
// to adjust the scale_amount to the scale of the layer
result = ratio * 100
