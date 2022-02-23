const boxesContainer = document.querySelector('.boxes-container');

for (let i = 0; i <= 100; i++) {
	boxesContainer.innerHTML += `<div class="box"></div>`;
	// if (i % 15 == 0) {
	//   fizzbuzz
	// } else if (i % 5 == 0) {
	// 	buzz
	// } else if (i % 3 == 0) {
	//   fizz
	// } else {
	// 	i
	// }
  }