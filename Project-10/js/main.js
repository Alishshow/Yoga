class Options {
	constructor(height = 80, width = 300, bg = "#000", fontSize = 24 px, textAlign = 'center') {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	addMessage() {
		let newDiv = document.createElement('div'),
			textMsg = document.querySelector('#comment');
		newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize};`;
		newDiv.textContent = textMsg.value;
		console.log(newDiv);
		console.log(textMsg);
		wrapper.appendChild(newDiv);
		textMsg.value = 'dasdsada';
	}
}
let wrapper = document.querySelector('.comments'),
	btn = document.querySelector('#btn'),
	getComment = new Options(30);

btn.addEventListener('click', function () {
	getComment.addMessage();
})