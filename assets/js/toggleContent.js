function toggleButtons() {
	const activeButton = document.getElementById('active-button');
	const inactiveButton = document.getElementById('inactive-button');

	activeButton.id = 'inactive-button';
	inactiveButton.id = 'active-button';
}

function toggleContent(elementId) {
	toggleButtons();

	const elementToShowId = elementId === 'faqs' ? 'contact' : 'faqs';

	const elementShown = document.getElementById(elementId);
	const elementToShow = document.getElementById(elementToShowId);

	elementShown.classList.remove('hidden');
	elementToShow.classList.add('hidden');
}
