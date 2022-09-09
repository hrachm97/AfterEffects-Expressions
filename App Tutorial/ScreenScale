let settings = footage("Data.json").sourceData;
let mockup = footage("shots.json").sourceData.mockup;
let horizontal_margin;
let margin_left;
switch (mockup) {
	case 0: 
		margin_left = settings.screen_margins.GalaxyS20[0];
		horizontal_margin = margin_left * 2;
		break;
	case 1: 
		margin_left = settings.screen_margins.iPhone[0];
		horizontal_margin = margin_left * 2;
		break;
	default: horizontal_margin = 0;
		break;
}
let required_width = thisComp.layer("mockup").width - horizontal_margin;
let ratio = required_width / thisLayer.width;
result = [100, 100] * ratio
