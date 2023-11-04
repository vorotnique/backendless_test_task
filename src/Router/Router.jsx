import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

const DummyTable = lazy(
  () => import('../tabs/DummyTable') /* webpackChunkName: "DummyTable" */,
);

const DummyList = lazy(
  () => import('../tabs/DummyList') /* webpackChunkName: "DummyList" */,
);

const DummyChart = lazy(
  () => import('../tabs/DummyChart') /* webpackChunkName: "DummyChart" */,
);

export default function Router() {
  return (
    <>
      <Suspense fallback={<h1>Loading…</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/dummyTable" element={<DummyTable />} />
            <Route path="/dummyList" element={<DummyList />} />
            <Route path="/dummyChart" element={<DummyChart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
