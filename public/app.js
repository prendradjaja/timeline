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

function addEvent() {
  const yearInput = document.getElementById('year');
  const titleInput = document.getElementById('title');
  const addButton = document.getElementById('add');

  let year = yearInput.value;
  let title = titleInput.value;
  if (!year || !title) {
    alert('Must provide a year and title');
    return;
  }

  const requestBody = JSON.stringify({
    year: +year, // Convert to a number
    title // This is shorthand for title: title
  });

  addButton.disabled = true;
  fetch('/api/historical_events', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  })
    .then(() => fetchAndDisplay())
    .finally(() => { addButton.disabled = false; });
}
