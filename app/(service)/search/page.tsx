import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';

type Props = {};

function SearchPage(props: Props) {
  return (
    <div>
      검색 결과 페이지
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default SearchPage;
