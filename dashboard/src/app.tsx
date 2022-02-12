import { Routes, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { lazy, Suspense } from 'react'
import { Navigation } from './components/layout/navigation/navigation'
import { Spinner } from './components/common/spinner'
import Dashboard from './pages/dashboard'

const Employers = lazy(() => import('./pages/employers'))
const Applications = lazy(() => import('./pages/applications/applications'))
const MyJobOfferts = lazy(() => import('./pages/myJobOfferts/myJobOfferts'))

const App = () => (
  <Containter>
    <Navigation />
    <Wrapper>
      <Suspense fallback={<Spinner color="green" />}>
        <Routes>
          <Route path="" element={<Employers />} />
          <Route path="/employer" element={<Dashboard />} />
          <Route path="/employer/applications/:jobOfferId" element={<Applications />} />
          <Route path="/employer/my-job-offerts" element={<MyJobOfferts />} />
        </Routes>
      </Suspense>
    </Wrapper>
  </Containter>
)

const Containter = tw.div`xl:h-screen grid xl:grid-cols-[max-content 1fr]`
const Wrapper = tw.div`all-child:(p-2 sm:p-3 xl:(px-4 py-4) xl:h-screen)`

export { App }
