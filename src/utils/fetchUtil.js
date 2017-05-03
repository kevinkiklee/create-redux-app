export const fetchJSON = (path) => {
  return fetch(path).then((res) => res.json());
};
