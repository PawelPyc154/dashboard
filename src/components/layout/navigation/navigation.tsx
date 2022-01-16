import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'
import { Avatar } from '../../common/avatar'

type UserType = 'employer' | 'candidate'

const Navigation = () => {
  const userType: UserType = 'employer'
  return (
    <Containter>
      <LogoWrapper>Logo</LogoWrapper>

      <LinksWrapper>
        {userType === 'employer' && (
          <LinksGroup>
            <Link to="/">Dashboard</Link>
            <Link to="/">Employer profile</Link>
            <Link to="/my-job-offerts">My job offerts</Link>
          </LinksGroup>
        )}
        <LinksGroup>
          <Link to="/employers">Employers</Link>
          <Link to="/">Job offerts</Link>
        </LinksGroup>
        <Link tw="self-end" to="/">
          Settings
        </Link>
      </LinksWrapper>
      {/* {userType === 'employer' && <div />} */}
      <UserWrapper>
        <User>
          <Avatar />
          Paweł Pyc
        </User>
      </UserWrapper>
    </Containter>
  )
}

export { Navigation }

const Containter = tw.nav`bg-white h-screen w-64 grid grid-rows-[max-content 1fr max-content] py-6 gap-6 shadow-lg`
const LogoWrapper = tw.div`text-4xl h-12 rounded-md px-6`
const LinksWrapper = tw.div`grid content-start gap-6 px-2`
const LinksGroup = tw.div`grid gap-1 `
const Link = tw(
  NavLink,
)`rounded-md px-4 py-2 hover:(bg-gray-100) transition-colors`
const UserWrapper = tw.div`grid gap-2 `
const User = tw.div`grid grid-flow-col justify-start gap-4 items-center px-6`
