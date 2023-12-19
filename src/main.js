let detailsDiv = document.getElementById('details');

document.addEventListener("DOMContentLoaded", function () {
  // Wait for DOM to load before adding event listeners
  detailsDiv.style.display = 'none';
  let detailsButton = document.getElementById('toggleDetails');
  detailsButton.addEventListener('click', toggleDetails);
});

function toggleDetails() {
  if (detailsDiv.style.display === 'none') {
      detailsDiv.style.display = 'block';
      document.getElementById('toggleDetails').textContent = 'Hide Details';
  } else {
      detailsDiv.style.display = 'none';
      document.getElementById('toggleDetails').textContent = 'Show Details';
  }
}
