import { Routes, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { lazy, Suspense } from 'react'
import { Navigation } from './components/layout/navigation/navigation'
import { Spinner } from './components/common/spinner'

const Employers = lazy(() => import('./pages/employers'))
const Applications = lazy(() => import('./pages/applications/applications'))
const MyJobOfferts = lazy(() => import('./pages/myJobOfferts/myJobOfferts'))
const SecondTable = lazy(() => import('./pages/secondTable/secondTable'))

const App = () => (
  <Containter>
    <Navigation />
    <Wrapper>
      <Suspense fallback={<Spinner color="green" />}>
        <Routes>
          <Route path="" element={<Employers />} />
          <Route path="/applications/:jobOfferId" element={<Applications />} />
          <Route path="/my-job-offerts" element={<MyJobOfferts />} />
          <Route path="/secondTable" element={<SecondTable />} />
        </Routes>
      </Suspense>
    </Wrapper>
  </Containter>
)

const Containter = tw.div`xl:h-screen grid xl:grid-cols-[max-content 1fr]`
const Wrapper = tw.div`p-2 sm:p-3 xl:p-4 grid`

export { App }
