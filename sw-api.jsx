// src/services/sw-api.jsx
const SW_API_BASE_URL = 'https://swapi.dev/api';

export function getAllStarships() {
  return fetch(`${SW_API_BASE_URL}/starships/`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.error('Error fetching starships:', error));
}