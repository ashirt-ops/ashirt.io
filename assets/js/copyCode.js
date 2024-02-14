function copyCode(id) {
	try {
		const element = document.getElementById(id);
		const code = element.innerText.replace(/\n(.*)/g, '');

		navigator.clipboard.writeText(code);
	} catch (error) {
		console.log(error)
		alert('Error copying code, leave an issue at Github for more reference');
	}
}
