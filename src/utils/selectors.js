export const getData = ({ data }) => (
  Object.keys(data).map(id => data[id])
);
