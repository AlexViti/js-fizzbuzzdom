const boxesContainer = document.querySelector('.boxes-container');

for (let i = 1; i <= 100; i++) {
	boxesContainer.innerHTML += `<div class="box"></div>`;
	let box = boxesContainer.querySelector('.box:last-child');
	if (i % 15 == 0) {
	  box.classList.add('fizz-buzz');
	  box.innerHTML = `fizzbuzz`
	} else if (i % 5 == 0) {
		box.classList.add('buzz');
		box.innerHTML = `buzz`
	} else if (i % 3 == 0) {
		box.classList.add('fizz');
		box.innerHTML = `fizz`
	} else {
		box.innerHTML = `${i}`
	}
  }