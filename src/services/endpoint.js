export function getPictures(page) {
  return fetch(`http://localhost:8000/upload?page=${page}&size=12`, {
    credentials: 'include',
  }).then((response) => response.json())
}
