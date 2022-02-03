import { Routes, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { Navigation } from './components/layout/navigation/navigation'
import { Employers } from './pages/employers'
import { MyJobOfferts } from './pages/myJobOfferts'
import { TablePage } from './pages/tablePage'

const App = () => (
  <Containter>
    <Navigation />
    <Wrapper>
      <Routes>
        <Route path="/" element={<Employers />} />
        <Route path="/my-job-offerts" element={<MyJobOfferts />} />
        <Route path="/table-page" element={<TablePage />} />
      </Routes>
    </Wrapper>
  </Containter>
)

const Containter = tw.div`lg:h-screen grid lg:grid-cols-[max-content 1fr]`
const Wrapper = tw.div`p-4 lg:p-6 grid`

export { App }
