import axios from 'axios';

export const getComment = async id => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments?user=${id}`);
  return res.data;
};
