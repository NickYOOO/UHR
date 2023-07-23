import React from 'react';
import * as Style from './style';

function HeritageDetail({ information }) {
  return (
    <Style.HeritageDetailLayout>
      <Style.HeritageDetailBox>
        {information[18].value !== '' ? (
          <Style.HeritageImage src={information[18].value} alt="" />
        ) : (
          <Style.HeritageImageParagraph>대표 이미지가 없습니다</Style.HeritageImageParagraph>
        )}
        <Style.HeritageDetailTable>
          <tbody>
            <tr>
              <th>문화재명</th>
              {information[3].value !== '>' ? (
                <td>
                  {information[2].value}&nbsp;({information[3].value})
                </td>
              ) : (
                <td>{information[2].value}</td>
              )}
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
                {information[4].value.replace(/>/g, '')}&nbsp;/&nbsp;
                {information[5].value.replace(/>/g, '')}&nbsp;/&nbsp;
                {information[6].value.replace(/>/g, '')}&nbsp;/&nbsp;
                {information[7].value.replace(/>/g, '')}
              </td>
            </tr>
            <tr>
              <th>시대</th>
              <td>{information[13].value.replace(/>/g, '')}</td>
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
