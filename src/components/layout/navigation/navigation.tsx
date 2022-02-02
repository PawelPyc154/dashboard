import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'
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
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/table-page">Employer profile</NavLink>
              <NavLink to="/my-job-offerts">My job offerts</NavLink>
            </LinksGroup>
          )}
          <LinksGroup>
            <NavLink to="/employers">Employers</NavLink>
            <NavLink to="/">Job offerts</NavLink>
          </LinksGroup>
          <NavLink tw="self-end" to="/">
            Settings
          </NavLink>
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
        tw="fixed z-40 bottom-4 right-4 lg:!hidden"
        color="green"
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        <MdMenu size={23} />
      </IconButton>
    </>
  )
}

interface ContainterProps {
  isOpenMenu: boolean
}
const Containter = styled.nav<ContainterProps>(({ isOpenMenu }) => [
  tw`fixed lg:static bg-white h-screen w-64 grid grid-rows-[max-content 1fr max-content] py-6 gap-6 shadow-lg z-50`,
  isOpenMenu ? tw`grid` : tw`hidden lg:grid`,
])
const LogoWrapper = tw.div`text-4xl h-12 rounded-md px-6`
const LinksWrapper = tw.div`grid content-start gap-6 px-2`
const LinksGroup = tw.div`grid gap-1 `
const LinkStyled = tw(Link)`rounded-md px-4 py-2 hover:(bg-gray-100) transition-colors`
const UserWrapper = tw.div`grid gap-2 `
const User = tw.div`grid grid-flow-col justify-start gap-4 items-center px-6`
const NavLink = ({ to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  return <LinkStyled css={[match && tw`bg-gray-100 pointer-events-none`]} to={to} {...props} />
}

export { Navigation }
