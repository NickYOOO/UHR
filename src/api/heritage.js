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

export const getHeritagesBySearch = async params => {
  // ?ccbaCtcd=도시코드&ccbaLcto=시군구코드&ccbaMnm1=문화재국문명
  // ?ccbaCtcd=11&ccbaLcto=11&ccbaMnm1=원각사지
  const res = await axios.get(`${LIST_URL}?${params}`);
  const item = new XMLParser().parseFromString(res.data);
  return item.children;

export const getHeritageImg = async ({ ccbaKdcd, ccbaCtcd, ccbaAsno }) => {
  const result = [];
  const res = await axios.get(
    `${IMG_URL}?ccbaKdcd=${ccbaKdcd}&ccbaCtcd=${ccbaCtcd}&ccbaAsno=${ccbaAsno}`
  );
  const item = new XMLParser().parseFromString(res.data);
  const img = item.children[6].children.filter(a => a.name === 'imageUrl').slice(0, 9);
  img.forEach(image => {
    result.push(image.value);
  });
  return result;
};
