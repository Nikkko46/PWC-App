const $ = (e) => document.querySelector(e)

class CalculatedWeight {
	_mass = $('#mass').value
	_planet = $('#planet').value
	_description = $('.description')
	_image = $('.image.img')
	_image_div = $('image')
	_mass_err = `<h2>Mass is required!</h2>`
	_planet_err = `<h2>You haven't chosen a planet yet!</h2>`

	_weight = { //expressed in Kg
		mercury: 0.38,
		venus: 0.90,
		earth: 1.00,
		moon: 0.17,
		mars: 0.38,
		ceres: 0.03,
		jupiter: 2.53,
		ganymede: 0.15,
		europa: 0.13,
		io_moon : 0.18,
		callisto : 0.001,
		saturn: 1.06,
		titan : 0.14,
		enceladus : 0.01,
		uranus: 0.89,
		neptune: 1.14,
		triton : 0.08,
		pluto: 0.06,
		eris : 0.08,
		haumea : 0.04,
		makemake : 0.05,
		proxima_b : 1.14,
		corot_7b : 2.34,
		hd189733b : 2.19,
		kepler_452b : 2.00
	}
	weightObject_message(Kg) {
		return `<h2>The weight of the object on <b>${this._planet.toUpperCase()}</b></h2><div class="kg">${Kg} Kg</div>`
	}
	checkRequired() {
		if (this._mass == '' || this._planet == 'none') {
		} else if (this._mass == '') {
			this._description.innerHTML = this._mass_err
			this._description.style.display = 'block'
			this._image_div.style.display = 'none'
		} else if (this._planet == 'none') {
			this._description.innerHTML = this._planet_err
			this._description.style.display = 'block'
			this._image_div.style.display = 'none'
		} else {
			let Kg = this._weight[this._planet] * this._mass
			Kg = String(Kg).split('.')
			if (Kg.length > 1) Kg = Kg[0] + '.' + Kg[1].slice(-2)
			let description = this.weightObject_message(Kg)

			this._description.innerHTML = description
			this._description.style.display = 'block'
			this._image_div.style.display = 'block'
			this._image.attributes.src.value = `./images/${this._planet}.png`
		}
	}
}


$('button').addEventListener('click', () => {
	try {
		var val = $('#mass').value;
		var planet = $('#planet').value;
		if (val && planet != 'none') {
			let calculateWeight = new CalculatedWeight();
			calculateWeight.checkRequired();
		}
		else {
			if (!val)
				alert('Nu ati introdus o valoare.');
			if (!planet || planet == 'none')
				alert('Nu selectat o planeta.');
		}
	} catch (err) {
		console.log(err);
	}
}); 

function chanePlanet() {
	try {
		var planet = $('#planet').value;
		$('#displayed_image').src = `./images/${planet}.png`;
	} catch (err) {
		$('#displayed_image').src = `./images/earth.png`;
		console.log('Default image was selected, due to error: ', err);
	}
	
}