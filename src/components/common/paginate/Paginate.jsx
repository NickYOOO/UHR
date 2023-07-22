import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { setCurrentPage } from '../../../redux/modules/extraDataHeritagesBySearchSlice';

export default function Paginate() {
  const totalCnt = useSelector(state => state.extraDataHeritagesBySearch.totalItems);
  const items = Array(+totalCnt)
    .fill()
    .map((_, i) => i + 1);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const dispatch = useDispatch();

  const handlePageClick = e => {
    dispatch(setCurrentPage(e.selected + 1));
  };

  return (
    <PaginateBox>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="react-paginate"
        activeClassName="active"
        disabledLinkClassName="inactive"
      />
    </PaginateBox>
  );
}

const PaginateBox = styled.div`
  & .react-paginate {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  & li {
    cursor: pointer;
  }

  & li:first-child {
    margin-right: 20px;
  }

  & li:last-child {
    margin-left: 20px;
  }

  & .active {
    font-weight: bold;
    color: #ff7c1d;
  }

  & .inactive {
    color: #acacac;
    cursor: default;
  }
`;
