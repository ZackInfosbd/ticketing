import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the Server

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We must be on the Browser
    return axios.create({
      baseURL: '/',
    });
  }
};
