import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import tw, { styled } from 'twin.macro'
import { Avatar } from '../../common/avatar'
import { IconButton } from '../../form/iconButton'

type UserType = 'employer' | 'candidate'

const Navigation = () => {
  const userType: UserType = 'employer'
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <>
      <Containter isOpenMenu={isOpenMenu}>
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

      <IconButton
        tw="fixed z-40 bottom-4 right-4 xl:hidden"
        color="green"
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        <MdMenu size={23} />
      </IconButton>
    </>
  )
}

export { Navigation }
interface ContainterProps {
  isOpenMenu: boolean
}
const Containter = styled.nav<ContainterProps>(({ isOpenMenu }) => [
  tw`fixed xl:static bg-white h-screen w-64 grid grid-rows-[max-content 1fr max-content] py-6 gap-6 shadow-lg z-50`,
  isOpenMenu ? tw`grid` : tw`hidden xl:grid`,
])
const LogoWrapper = tw.div`text-4xl h-12 rounded-md px-6`
const LinksWrapper = tw.div`grid content-start gap-6 px-2`
const LinksGroup = tw.div`grid gap-1 `
const Link = tw(NavLink)`rounded-md px-4 py-2 hover:(bg-gray-100) transition-colors`
const UserWrapper = tw.div`grid gap-2 `
const User = tw.div`grid grid-flow-col justify-start gap-4 items-center px-6`
