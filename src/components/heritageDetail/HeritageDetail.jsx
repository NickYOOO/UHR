import React from 'react';
import * as Style from './style';
import { useQuery } from '@tanstack/react-query';
import { getHeritageInfo } from '../../api/heritage';
import Loading from '../loading/Loading';

function HeritageDetail() {
  const params = { ccbaKdcd: '11', ccbaCtcd: '11', ccbaAsno: '00030000' };

  function removeSymbolFromValue(dataArray) {
    return dataArray.map(item => ({
      ...item,
      value: item.value.replace(/ >/g, ''),
    }));
  }

  const { data: information, isLoading } = useQuery(['detail'], () => getHeritageInfo(params), {
    select: ({ children }) => {
      const items = children
        .filter(item => {
          return item.name === 'item';
        })
        .map(item => item.children);
      return removeSymbolFromValue(items[0]);
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Style.HeritageDetailLayout>
      <Style.HeritageDetailBox>
        <Style.HeritageImage src={information[18].value} alt="" />
        <Style.HeritageDetailTable>
          <tbody>
            <tr>
              <th>문화재명</th>
              <td>
                {information[2].value}&nbsp;({information[3].value})
              </td>
            </tr>
            <tr>
              <th>문화재 종목</th>
              <td>{information[0].value}</td>
            </tr>
            <tr>
              <th>지정(등록일)</th>
              <td>{information[9].value}</td>
            </tr>
            <tr>
              <th>문화재분류</th>
              <td>
                {information[4].value} / {information[5].value} / {information[6].value} /
                {information[7].value}
              </td>
            </tr>
            <tr>
              <th>시대</th>
              <td>{information[13].value}</td>
            </tr>
            <tr>
              <th>소재지 상세</th>
              <td>{information[12].value}</td>
            </tr>
          </tbody>
        </Style.HeritageDetailTable>
      </Style.HeritageDetailBox>
      <Style.HeritageDetailParagraph>{information[19].value}</Style.HeritageDetailParagraph>
    </Style.HeritageDetailLayout>
  );
}

export default HeritageDetail;
