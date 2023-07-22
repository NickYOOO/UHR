import React from 'react';
import * as Style from './style';
import { useNavigate } from 'react-router';

import { useSelector } from 'react-redux';

export default function HeritagesTable() {
  const navigate = useNavigate();

  const heritageArr = useSelector(state => state.heritagesBySearch);
  const totalCnt = useSelector(state => state.extraDataHeritagesBySearch.totalItems);

  const handleOnClickTr = ccbaCpno => {
    navigate(`/detail/${ccbaCpno}`);
  };
  return (
    <>
      <p>
        조회된 총 데이터 건 수: <strong style={{ fontWeight: 'bolder' }}>{totalCnt}</strong>
      </p>
      <Style.TableContainer>
        <Style.Table>
          <thead>
            <Style.TableRow>
              <Style.TableHeader>순번</Style.TableHeader>
              <Style.TableHeader>문화재 종목</Style.TableHeader>
              <Style.TableHeader>문화재명</Style.TableHeader>
              <Style.TableHeader>지역</Style.TableHeader>
            </Style.TableRow>
          </thead>
          <tbody>
            {heritageArr.map(item => {
              const key = item.children[1].value; // no(key)
              const num = item.children[0].value; // sn
              const kind = item.children[2].value.replace(/ >/g, ''); // ccmaName
              const nameKr = item.children[4].value.replace(/ >/g, ''); // ccbaMnm1
              const nameCh = item.children[5].value.replace(/ >/g, ''); // ccbaMnm2
              const city1 = item.children[6].value.replace(/ >/g, ''); // ccbaCtcdNm
              const city2 = item.children[7].value.replace(/ >/g, ''); // ccsiName

              const ccbaCpno = item.children[13].value;

              return (
                <Style.TableRow key={key} onClick={() => handleOnClickTr(ccbaCpno)}>
                  <Style.TableCell>{num}</Style.TableCell>
                  <Style.TableCell>{kind}</Style.TableCell>
                  <Style.TableCell>
                    {nameKr}({nameCh})
                  </Style.TableCell>
                  <Style.TableCell>
                    {city1} / {city2}
                  </Style.TableCell>
                </Style.TableRow>
              );
            })}
          </tbody>
        </Style.Table>
      </Style.TableContainer>
    </>
  );
}
