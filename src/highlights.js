document.addEventListener("DOMContentLoaded", function () {
  const highlightContainer = document.getElementById('highlights-container');
  const highlightForm = document.getElementById('highlight-form');

  // Load existing highlights from local storage
  const existingHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
  existingHighlights.forEach(displayHighlight);

  highlightForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const highlightText = document.getElementById('highlight-text').value;
    const caption = document.getElementById('caption').value;

    // Create a new highlight object
    const newHighlight = {
      text: highlightText,
      caption: caption
    };

    // Save the new highlight to local storage
    existingHighlights.push(newHighlight);
    localStorage.setItem('highlights', JSON.stringify(existingHighlights));

    // Display the new highlight
    displayHighlight(newHighlight);

    // Clear form inputs
    document.getElementById('highlight-text').value = '';
    document.getElementById('caption').value = '';
  });

  function displayHighlight(highlight) {
    const newHighlight = document.createElement('div');
    newHighlight.className = 'highlight';
    newHighlight.innerHTML = `
      <p>${highlight.text}</p>
      <p><strong>${highlight.caption}</strong></p>
    `;
    highlightContainer.appendChild(newHighlight);
  }
});