import { Routes, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { Navigation } from './components/layout/navigation/navigation'
import { Employers } from './pages/employers'
import { MyJobOfferts } from './pages/myJobOfferts/myJobOfferts'
import { Applications } from './pages/applications/applications'

const App = () => (
  <Containter>
    <Navigation />
    <Wrapper>
      <Routes>
        <Route path="/" element={<Employers />} />
        <Route path="/applications/:jobOfferId" element={<Applications />} />
        <Route path="/my-job-offerts" element={<MyJobOfferts />} />
      </Routes>
    </Wrapper>
  </Containter>
)

const Containter = tw.div`xl:h-screen grid xl:grid-cols-[max-content 1fr]`
const Wrapper = tw.div`p-2 sm:p-3 xl:p-4 grid`

export { App }
