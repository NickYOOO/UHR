import axios from 'axios';
import XMLParser from 'react-xml-parser';

const LIST_URL = 'http://www.cha.go.kr/cha/SearchKindOpenapiList.do';
const IMG_URL = 'http://www.cha.go.kr/cha/SearchImageOpenapi.do';
const INFO_URL = 'http://www.cha.go.kr/cha/SearchKindOpenapiDt.do';

export const getHeritages = async () => {
  const res = await axios.get(`${LIST_URL}`);
  const item = new XMLParser().parseFromString(res.data);
  return item;
};

export const getHeritageInfo = async ({ ccbaKdcd, ccbaCtcd, ccbaAsno }) => {
  const res = await axios.get(
    `${INFO_URL}?ccbaKdcd=${ccbaKdcd}&ccbaCtcd=${ccbaCtcd}&ccbaAsno=${ccbaAsno}`
  );
  const item = new XMLParser().parseFromString(res.data);
  return item;
};

export const getHeritageImages = async param => {
  const result = [];
  for (let a of param) {
    const { ccbaKdcd, ccbaCtcd, ccbaAsno } = a;
    const res = await axios.get(
      `${IMG_URL}?ccbaKdcd=${ccbaKdcd}&ccbaCtcd=${ccbaCtcd}&ccbaAsno=${ccbaAsno}`
    );
    const item = new XMLParser().parseFromString(res.data);
    const img = item.children[6].children.filter(a => a.name === 'imageUrl').map(a => a.value)[0];
    result.push(img);
  }
  return result;
};

// export const getHeritageImg = async param => {
//   const result = {};
//   const res = await axios.get(
//     `${IMG_URL}?ccbaKdcd=${ccbaKdcd}&ccbaCtcd=${ccbaCtcd}&ccbaAsno=${ccbaAsno}`
//   );
// };
