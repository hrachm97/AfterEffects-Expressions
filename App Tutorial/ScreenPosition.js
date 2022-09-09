let settings = footage("Data.json").sourceData;
let mockup = footage("shots.json").sourceData.mockup;
let margin_top;
let margin_left;
switch (mockup) {
	case 0: 
		margin_left = settings.screen_margins.GalaxyS20[0];
		margin_top = settings.screen_margins.GalaxyS20[1];
		break;
	case 1: 
		margin_left = settings.screen_margins.iPhone[0];
		margin_top = settings.screen_margins.iPhone[1];
		break;
	default: margin_top = 0;
		break;
}
let scale_ratio = scale[0] / 100;
let scaled_height = thisLayer.height * scale_ratio;
let final_height = margin_top + scaled_height / 2;
result = [margin_left, margin_top];
