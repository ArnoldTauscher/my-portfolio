import { lazy, Suspense } from 'react';

import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';

const LazyWorkplaces = lazy(() => import("../../components/home/Workplaces"));
const LazyEducation = lazy(() => import("../../components/home/Education"));
const LazyExpertise = lazy(() => import("../../components/home/Expertise"));
const LazyProjects = lazy(() => import("../../components/home/Projects"));

const LoadingFallback = () => <div>Loading...</div>;

const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden">
      <ErrorBoundary fallback={<div>Fehler beim Laden der Arbeitsplätze</div>}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyWorkplaces />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Fehler beim Laden der Ausbildung</div>}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyEducation />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Fehler beim Laden der Expertise</div>}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyExpertise />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Fehler beim Laden der Projekte</div>}>
        <Suspense fallback={<LoadingFallback />}>
          <LazyProjects />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomeScreen
