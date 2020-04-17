import fetch from 'isomorphic-unfetch';

const MOVIES_SERVICE_URL = 'https://api.themoviedb.org/3/';
const API_TOKEN = process.env.MOVIES_API_TOKEN;

const moviesRequest = (resourceUrl: string) => {
  return fetch(`${MOVIES_SERVICE_URL}${resourceUrl}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
};

export default moviesRequest;
