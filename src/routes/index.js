import { lazy } from 'react';

export const TableLazy = lazy(() => import('../components/tabs/dummyTable.js'));
export const ListLazy = lazy(() => import('../components/tabs/dummyList.js'));
export const ChartLazy = lazy(() => import('../components/tabs/dummyChart.js'));
