function apiRequest(endpoint, headers) {
  return new Promise((resolve, reject) => {
    const result = fetch(endpoint);

    if (result === 200) {
      return resolve(result);
    } else {
      return reject(result);
    }
  });
}
