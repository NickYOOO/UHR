import axios from 'axios';

export const getComment = async id => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments?user=${id}`);
  return res.data;
};

export const getHeritageComments = async hId => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments?hId=${hId}`);
  return res.data;
};

export const addHeritageComment = async newComment => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, newComment);
};

export const deleteHeritageComment = async id => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`);
};

export const editHeritageComment = async ({ id, updatedComment }) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`, updatedComment);
};
