// 1.2 What is functional programming?

document.querySelector('#msg').innerHTML = '<h1>Hello World</h1>';



function printMessage(selementId, format, message) {
    document.querySelector(`#${selementId}`).innerHTML =
	`<${format}>${message}</${format}>`;
}

printMessage('msg', 'h1', 'Hello World');
