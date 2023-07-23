import axios from 'axios';
import XMLParser from 'react-xml-parser';

const LIST_URL = 'http://www.cha.go.kr/cha/SearchKindOpenapiList.do';
const IMG_URL = 'http://www.cha.go.kr/cha/SearchImageOpenapi.do';
const INFO_URL = 'http://www.cha.go.kr/cha/SearchKindOpenapiDt.do';

export const getTopTenHeritages = async () => {
  const res = await axios.get(`${LIST_URL}`);
  const item = new XMLParser().parseFromString(res.data);
  return item;
};

export const getHeritageInfoById = async id => {
  const resById = await getHeritage(id);
  const ccbaKdcd = resById.children[9].value;
  const ccbaCtcd = resById.children[10].value;
  const ccbaAsno = resById.children[11].value;
  const res = await axios.get(
    `${INFO_URL}?ccbaKdcd=${ccbaKdcd}&ccbaCtcd=${ccbaCtcd}&ccbaAsno=${ccbaAsno}`
  );
  const item = new XMLParser().parseFromString(res.data);
  const infoHead = item.children.slice(0, 6);
  const infoBody = item.children
    .slice(6)
    .map(item => item.children)[0]
    .map(item => ({ ...item, value: item.value.replace(/ >/g, '') }));
  const info = { infoHead, infoBody };
  return info;
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
};

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

export const getHeritage = async ccbaCpno => {
  try {
    const res = await axios.get(`${LIST_URL}?ccbaCpno=${ccbaCpno}`);
    const item = new XMLParser().parseFromString(res.data);
    return item.children[3];
  } catch (error) {
    console.error('Error fetching heritage:', error);
    throw error;
  }
};
