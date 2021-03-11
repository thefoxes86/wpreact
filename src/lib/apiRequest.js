export default function apiRequest(endpoint, headers = null) {
  return new Promise((resolve, reject) => {
    const result = fetch(endpoint);
    result
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
