import React, { useEffect } from 'react';
import Paginate from '../components/common/paginate/Paginate';
import HeritagesTable from '../components/heritagesTable/HeritagesTable';
import HeritagesListQuery from '../components/heritagesListQuery/HeritagesListQuery';
import { useSelector } from 'react-redux';
import Layout from '../components/common/layout/Layout';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import Search from '../components/common/search/Search';
// 검색 컴포넌트 import 해오면 됩니다

const ListPage = () => {
  const location = useLocation();
  let { ccbaCtcd, ccbaLcto, ccbaMnm1 } = location.state;
  const searchParams = { ccbaCtcd, ccbaLcto, ccbaMnm1 };
  if (ccbaCtcd === '00' || ccbaCtcd === '77') {
    ccbaCtcd = '';
  }
  if (ccbaCtcd === '0') {
    ccbaCtcd = 'ZZ';
  }
  if (ccbaLcto === '0') {
    ccbaLcto = 'ZZ';
  }
  const params = `${ccbaCtcd && `ccbaCtcd=${ccbaCtcd}`}${ccbaCtcd && `&ccbaLcto=${ccbaLcto}`}${
    ccbaMnm1 ? `&ccbaMnm1=${ccbaMnm1}` : ''
  }`;

  const currentPage = useSelector(state => state.extraDataHeritagesBySearch.currentPage);
  const searchedParam = `${params}&pageIndex=${currentPage}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  HeritagesListQuery(searchedParam);

  return (
    <ListPageBox>
      <Layout>
        <SearchBox>
          <Search bg="#082141ad" />
        </SearchBox>
        <HeritagesTable />
        <Paginate />
      </Layout>
    </ListPageBox>
  );
};

export default ListPage;

const ListPageBox = styled.div`
  padding: 60px 0px;
`;

const SearchBox = styled.div`
  padding-bottom: 60px;
`;
