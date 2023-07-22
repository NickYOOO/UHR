import React, { useEffect } from 'react';
import { getHeritagesBySearch } from '../../api/heritage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';

import { useDispatch, useSelector } from 'react-redux';
import { setHeritagesBySearch } from '../../redux/modules/heritagesBySearchSlice';
import { setTotalItems } from '../../redux/modules/extraDataHeritagesBySearchSlice';

export default function HeritagesListQuery(searchedParam) {
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.extraDataHeritagesBySearch.currentPage);

  // const params = `ccbaCtcd=11&ccbaMnm1=탑&pageIndex=${page}`;
  const params = searchedParam;
  let searchedHeritageArr = [];

  const { data, isLoading } = useQuery({
    queryKey: ['heritageListBySearch', currentPage],
    queryFn: () => getHeritagesBySearch(params),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      data.map(item => {
        if (item.name === 'totalCnt') {
          dispatch(setTotalItems(item.value));
        }
      });
      searchedHeritageArr = data.filter(item => item.name === 'item');
      dispatch(setHeritagesBySearch(searchedHeritageArr));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
}
