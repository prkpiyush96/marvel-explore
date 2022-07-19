import axios from 'axios';

const get = async (url: string, paramsObj?: Object) => {
  try {
    const res = await axios.get(url, {
      params: {
        ts: 1,
        apikey: process.env.REACT_APP_API_KEY,
        hash: process.env.REACT_APP_API_HASH,
        ...paramsObj,
      },
    });
    return res.data;
  } catch (err) {
    return console.error(err);
  }
};

export { get };
