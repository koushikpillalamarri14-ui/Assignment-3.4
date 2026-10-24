const imagePool = [
  {
    title: 'Mountain Lake',
    tags: ['nature', 'mountain', 'water', 'travel'],
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Sunset Beach',
    tags: ['beach', 'sunset', 'ocean', 'travel'],
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Forest Path',
    tags: ['forest', 'nature', 'green', 'hike'],
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'City Lights',
    tags: ['city', 'night', 'urban', 'architecture'],
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Desert Dunes',
    tags: ['desert', 'sand', 'travel', 'landscape'],
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Snowy Peaks',
    tags: ['winter', 'snow', 'mountain', 'adventure'],
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Café Corner',
    tags: ['coffee', 'lifestyle', 'indoor', 'city'],
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Wildflowers',
    tags: ['flowers', 'nature', 'garden', 'color'],
    url: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Night Drive',
    tags: ['road', 'night', 'travel', 'car'],
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
  }
];

const results = document.getElementById('results');
const status = document.getElementById('status');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

function renderResults(items) {
  results.innerHTML = '';

  if (!items.length) {
    status.textContent = 'No matches found. Try another search term.';
    return;
  }

  const query = searchInput.value.trim();
  status.textContent = query
    ? `Showing ${items.length} result${items.length > 1 ? 's' : ''} for “${query}”`
    : `Showing ${items.length} featured images`;

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'result-card';

    const image = document.createElement('img');
    image.src = item.url;
    image.alt = item.title;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h2');
    title.textContent = item.title;

    const tags = document.createElement('p');
    tags.textContent = item.tags.join(' • ');

    body.appendChild(title);
    body.appendChild(tags);
    card.appendChild(image);
    card.appendChild(body);
    results.appendChild(card);
  });
}

function filterImages(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return imagePool;
  }

  return imagePool.filter((item) => {
    const haystack = `${item.title} ${item.tags.join(' ')}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderResults(filterImages(searchInput.value));
});

renderResults(imagePool);
