main();

function main() {
  fetchAndDisplay();
}

function fetchAndDisplay() {
  fetch('/api/historical_events')
    .then(result => result.json())
    .then(data => display(data))
    .catch(() => displayFetchError());
}

function display(events) {
  const eventsElement = document.getElementById('events');
  let html = '';
  for (let event of events) {
    html += `
      <li>${event.year}: ${event.title}</li>
    `;
  }
  eventsElement.innerHTML = html;
}

function displayFetchError() {
  const eventsElement = document.getElementById('events');
  eventsElement.innerHTML = '<li>Error fetching or displaying events</li>';
}
