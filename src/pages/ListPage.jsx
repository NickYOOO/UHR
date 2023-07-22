import React, { useEffect } from 'react';
import Paginate from '../components/common/paginate/Paginate';
import HeritagesTable from '../components/heritagesTable/HeritagesTable';
import HeritagesListQuery from '../components/heritagesListQuery/HeritagesListQuery';
import { useSelector } from 'react-redux';
import Layout from '../components/common/layout/Layout';
import { styled } from 'styled-components';
// 검색 컴포넌트 import 해오면 됩니다

const ListPage = () => {
  const currentPage = useSelector(state => state.extraDataHeritagesBySearch.currentPage);
  const searchedParam = `ccbaCtcd=11&ccbaMnm1=탑&pageIndex=${currentPage}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  HeritagesListQuery(searchedParam);

  return (
    <ListPageBox>
      {/* 검색 컴포넌트 여기에 넣으면 됩니다 */}

      <Layout>
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
