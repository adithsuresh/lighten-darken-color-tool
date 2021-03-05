function LightenColor(color, percent) {
var num = parseInt(color.replace("#",""),16),
amt = Math.round(2.55 * percent),
R = (num >> 16) + amt,
B = (num >> 8 & 0x00FF) + amt,
G = (num & 0x0000FF) + amt;
return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};

var color = {
primary: "#4d8af0",
secondary: "#7987a1",
success: "#42b72a",
info: "#68afff",
warning: "#fbbc06",
danger: "#ff3366"
}

var a = color.primary;
var b = LightenColor(color.primary, 12);
var c = LightenColor(color.primary, 22);
