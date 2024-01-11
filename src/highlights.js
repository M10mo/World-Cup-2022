document.addEventListener("DOMContentLoaded", function () {
  const highlightContainer = document.getElementById('highlights-container');
  const highlightForm = document.getElementById('highlight-form');

  highlightForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const highlightText = document.getElementById('highlight-text').value;
    const caption = document.getElementById('caption').value;

    // Create a new highlight element
    const newHighlight = document.createElement('div');
    newHighlight.className = 'highlight';
    newHighlight.innerHTML = `
        <p>${highlightText}</p>
        <p><strong>${caption}</strong></p>
    `;

    // Add the new highlight to the container
    highlightContainer.appendChild(newHighlight);

    // Clear form inputs
    document.getElementById('highlight-text').value = '';
    document.getElementById('caption').value = '';
  });
});