var turb = document.querySelectorAll('#filter feTurbulence')[0];
var params = {
	baseFrequencyX: 0.001,
	baseFrequencyY: 0.001
}
var gui = new dat.GUI();
gui.add(params, 'baseFrequencyX').min(0.000).max(0.2).step(0.001).onChange(update);
gui.add(params, 'baseFrequencyY').min(0.000).max(0.2).step(0.001).onChange(update);

function update() {
	turb.setAttribute('baseFrequency', params.baseFrequencyX + ' ' + params.baseFrequencyY);
}
