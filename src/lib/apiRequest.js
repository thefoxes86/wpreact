export default function apiRequest(endpoint, headers = null) {
  return new Promise((resolve, reject) => {
    const result = fetch(endpoint);

    if (result === 200) {
      return resolve(result);
    } else {
      return reject(result);
    }
  });
}
