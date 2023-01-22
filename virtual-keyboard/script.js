const Keyboard = {
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
	},

	eventHandlers: {
		oninput: null,
		onclose: null,
	},

	properties: {
		value: '',
		capsLock: false,
		shift: false,
		language: 0,
	},

	init() {
		// Create main elements
		this.elements.main = document.createElement('div');
		this.elements.keysContainer = document.createElement('div');

		// Setup main elements
		this.elements.main.classList.add('keyboard', 'keyboard--hidden');
		this.elements.keysContainer.classList.add('keyboard__keys');
		this.elements.keysContainer.appendChild(this._createKeys());

		this.elements.keys = this.elements.keysContainer.querySelectorAll(
			'.keyboard__key',
		);

		// Add to DOM
		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);

		// Automatically use keyboard for elements with .use-keyboard-input
		document.querySelectorAll('.use-keyboard-input').forEach((element) => {
			element.addEventListener('focus', () => {
				this.open(element.value, (currentValue) => {
					element.value = currentValue;
					element.focus();
				});
			});
		});
	},

	_createKeys() {
		const fragment = document.createDocumentFragment();
		let keyLayout = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
			'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
			'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
			'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
			'space', 'done', 'en'
		], ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
			'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
			'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
			'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
			'space', 'done', 'ru'
		]];
		// Creates HTML for an icon
		const createIconHTML = (icon_name) => `<i class="material-icons">${icon_name}</i>`;

		keyLayout[this.properties.language].forEach((key) => {
			const keyElement = document.createElement('button');
			let insertLineBreak = ['backspace', 'p', 'enter', '?', 'ъ'].indexOf(key) !== -1;

			// Add attributes/classes
			keyElement.setAttribute('type', 'button');
			keyElement.classList.add('keyboard__key');
			switch (key) {
				case 'backspace':
					keyElement.classList.add('keyboard__key--wide');
					keyElement.innerHTML = createIconHTML('backspace');

					keyElement.addEventListener('click', () => {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1,);
						this._triggerEvent('oninput');
					});

					break;
				case 'en':
					keyElement.classList.add(
						'keyboard__key--wide',
					);
					keyElement.innerText = 'en'
					keyElement.addEventListener('click', () => {
						this.properties.language === 1 ? this.properties.language = 0 : this.properties.language = 1;

						this.elements.keysContainer.remove(this.elements.keysContainer.child);
						this.init();
						this.elements.main.classList.remove('keyboard--hidden');

					});
					break;
				case 'ru':
					keyElement.classList.add(
						'keyboard__key--wide',
					);
					keyElement.innerText = 'ru'
					keyElement.addEventListener('click', () => {
						this.properties.language === 1 ? this.properties.language = 0 : this.properties.language = 1;

						this.elements.keysContainer.remove(this.elements.keysContainer.child);
						this.init();
						this.elements.main.classList.remove('keyboard--hidden');

					});
					break;
				case 'caps':
					keyElement.classList.add(
						'keyboard__key--wide',
						'keyboard__key--activatable',
					);
					keyElement.innerHTML = createIconHTML('keyboard_capslock');

					keyElement.addEventListener('click', () => {
						this._toggleCapsLock();
						keyElement.classList.toggle(
							'keyboard__key--active',
							this.properties.capsLock,
						);
					});
					break;
				case 'Shift':
					keyElement.classList.add(
						'keyboard__key--wide',
					);
					keyElement.innerHTML = createIconHTML('north');
					keyElement.addEventListener('click', () => {
						this._toggleShift();
						keyElement.classList.toggle(
							'keyboard__key--dark',
							this.properties.shift,
						);
					});
					break;
				case 'enter':
					keyElement.classList.add('keyboard__key--wide');
					keyElement.innerHTML = createIconHTML('keyboard_return');

					keyElement.addEventListener('click', () => {
						this.properties.value += '\n';
						this._triggerEvent('oninput');
					});

					break;

				case 'space':
					keyElement.classList.add('keyboard__key--extra-wide');
					keyElement.innerHTML = createIconHTML('space_bar');

					keyElement.addEventListener('click', () => {
						this.properties.value += ' ';
						this._triggerEvent('oninput');
					});

					break;

				case 'done':
					keyElement.classList.add(
						'keyboard__key--wide',
						'keyboard__key--dark',
					);
					keyElement.innerHTML = createIconHTML('check_circle');

					keyElement.addEventListener('click', () => {
						this.close();
						this._triggerEvent('onclose');
					});

					break;

				default:
					keyElement.textContent = key.toLowerCase();

					keyElement.addEventListener('click', (e) => {
						// this.properties.value += this.properties.capsLock || this.properties.shift ? key.toUpperCase() : key.toLowerCase();
						this.properties.value += e.target.textContent;
						this._triggerEvent('oninput');
					});

					break;
			}

			fragment.appendChild(keyElement);
			if (insertLineBreak) {
				fragment.appendChild(document.createElement('br'));
			}
		});

		return fragment;
	},


	_triggerEvent(handlerName) {
		if (typeof this.eventHandlers[handlerName] === 'function') {
			this.eventHandlers[handlerName](this.properties.value);
		}
	},

	_toggleCapsLock() {
		this.properties.capsLock = !this.properties.capsLock;
		for (const key of this.elements.keys) {
			if (key.childElementCount === 0) {
				key.textContent = this.properties.capsLock
					? key.textContent.toUpperCase()
					: key.textContent.toLowerCase();
			}
		}
	},

	_toggleShift() {
		// this.properties.capsLock = !this.properties.capsLock;
		this.properties.shift = !this.properties.shift;
		const shiftArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
		const shiftArrayRus = ["!", "\"", "№", ";", "%", ":", "?", "*", "(", ")"];
		let arrayOfKeys = Array.from(this.elements.keys);
		for (const key of arrayOfKeys) {
			if (key.childElementCount === 0) {
				key.textContent = this.properties.shift
					? key.textContent.toUpperCase() : key.textContent.toLowerCase();
			}
		}
		if (this.properties.shift === true && this.properties.language === 0) {
			for (let i = 0; i < 10; i++) {
				arrayOfKeys[i].textContent = shiftArray[i];
				arrayOfKeys[40].textContent = "<";
				arrayOfKeys[41].textContent = ">";
				arrayOfKeys[42].textContent = "/";

			}
		} else if (this.properties.shift === false && this.properties.language === 0) {
			for (let i = 0; i < 10; i++) {
				arrayOfKeys[i].textContent = i + 1;
				arrayOfKeys[9].textContent = "0";
				arrayOfKeys[40].textContent = ",";
				arrayOfKeys[41].textContent = ".";
				arrayOfKeys[42].textContent = "?";
			}
		} else if (this.properties.shift === true && this.properties.language === 1) {
			for (let i = 0; i < 10; i++) {
				arrayOfKeys[i].textContent = shiftArrayRus[i];
				arrayOfKeys[46].textContent = ",";
			}
		} else if (this.properties.shift === false && this.properties.language === 1) {
			for (let i = 0; i < 10; i++) {
				arrayOfKeys[i].textContent = i + 1;
				arrayOfKeys[46].textContent = ".";
			}
		}
	},

	open(initialValue, oninput, onclose) {
		this.properties.value = initialValue || '';
		this.eventHandlers.oninput = oninput;
		this.eventHandlers.onclose = onclose;
		this.elements.main.classList.remove('keyboard--hidden');
	},

	close() {
		this.properties.value = '';
		this.eventHandlers.oninput = oninput;
		this.eventHandlers.onclose = onclose;
		this.elements.main.classList.add('keyboard--hidden');
	},
};

window.addEventListener('DOMContentLoaded', () => {
	Keyboard.init();
});
