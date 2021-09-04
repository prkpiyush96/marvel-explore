import axios from 'axios';

const get = async (url: string, paramsObj: Object) => {
  try {
    const res = await axios.get(url, {
      params: {
        ts: 1,
        apikey: '96c29bda100ea829ab3f03af3ffbc182',
        hash: '02c5c0c8e08cc91e335fed164e660d65',
        ...paramsObj,
      },
    });
    return res.data;
  } catch (err) {
    return console.error(err);
  }
};

export { get };
