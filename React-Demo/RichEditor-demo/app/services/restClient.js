import axios from 'axios';

const handleNetwork = axiosPromise => new Promise((resolve, reject) => {
  axiosPromise.then(response => resolve(response.data))
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          window.location = `${error.response.data.message}?retUrl=${encodeURIComponent(window.location.href)}`;
        } else {
          reject(error.response.data, error.response.status);
        }
      } else {
        reject(error);
      }
    });
});

export default class RestClient {
  constructor(path, timeout) {
    this.path = path;
    this.timeout = timeout || 3e4;
    this.source = axios.CancelToken.source();
  }

  addItem(item, query) {
    return handleNetwork(
      axios.post(`${this.path}/${query}`, item, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }));
  }
}