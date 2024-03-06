function toggleButtons(buttonToActivate, buttonToDeactivate) {
	const inactiveButton = document.getElementById(buttonToActivate);
	const activeButton = document.getElementById(buttonToDeactivate);

	activeButton.className = 'inactive';
	inactiveButton.className = 'active';
}

function toggleContent(elementId, buttonToActivate, buttonToDeactivate) {
	toggleButtons(buttonToActivate, buttonToDeactivate);

	const elementToShowId = elementId === 'faqs' ? 'contact' : 'faqs';

	const elementShown = document.getElementById(elementId);
	const elementToShow = document.getElementById(elementToShowId);

	elementShown.classList.remove('hidden');
	elementToShow.classList.add('hidden');
}
