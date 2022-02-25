let row = document.querySelector('.row');

for (let i = 50; i > 0; i--) {
	let gradient = i * 5 + 2;
	let hexGradient = gradient.toString(16);
	
	if (gradient < 16) {
		hexGradient = '0' + hexGradient;
	}
	
	row.innerHTML += `<div class="col" style="background-color: #${hexGradient}${hexGradient}${hexGradient};"></div>`;
};