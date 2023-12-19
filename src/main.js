document.addEventListener("DOMContentLoaded", function () {
  // Wait for DOM to load before adding event listeners
  let detailsButton = document.getElementById('toggleDetails');
  detailsButton.addEventListener('click', toggleDetails);
});

function toggleDetails() {
  let detailsDiv = document.getElementById('details');
  if (detailsDiv.style.display === 'none') {
      detailsDiv.style.display = 'block';
      document.getElementById('toggleDetails').textContent = 'Hide Details';
  } else {
      detailsDiv.style.display = 'none';
      document.getElementById('toggleDetails').textContent = 'Show Details';
  }
}
