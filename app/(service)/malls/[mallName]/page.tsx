import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import { mallNameToMallId } from '@/utils/mallNameToMallId';
import MallIntroduction from '@/components/Mall/MallIntroduction';

type Props = {
  params: {
    mallName: string;
  };
};

function MallPage({ params: { mallName } }: Props) {
  const mallId = mallNameToMallId(decodeURI(mallName));
  return (
    <div>
      <MallIntroduction mallId={mallId} />
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default MallPage;
