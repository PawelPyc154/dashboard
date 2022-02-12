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
        <LogoWrapper tw="hidden xl:flex">Logo</LogoWrapper>
        <LinksWrapper>
          {userType === 'employer' && (
            <LinksGroup onClick={() => setIsOpenMenu(false)}>
              <NavLink to="/employer">Dashboard</NavLink>
              <NavLink to="/employer/my-job-offerts">My job offerts</NavLink>
            </LinksGroup>
          )}
          <LinksGroup onClick={() => setIsOpenMenu(false)} />
          <NavLink tw="self-end" to="/" onClick={() => setIsOpenMenu(false)}>
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
      <MobileTopBar>
        <IconButton tw="" color="green" onClick={() => setIsOpenMenu((prev) => !prev)}>
          <MdMenu size={23} />
        </IconButton>
        <LogoWrapper tw="text-2xl">Logo</LogoWrapper>
      </MobileTopBar>
    </>
  )
}

interface ContainterProps {
  isOpenMenu: boolean
}
const Containter = styled.nav<ContainterProps>(({ isOpenMenu }) => [
  tw`fixed xl:static bg-white inset-0 xl:w-52 2xl:w-60 grid grid-rows-[max-content 1fr max-content] pt-6 pb-6 gap-6 shadow-lg z-40`,

  isOpenMenu ? tw`grid` : tw`hidden xl:grid`,
])

const LogoWrapper = tw.div`text-3xl h-12 rounded-md px-4 flex items-center`

const LinksWrapper = tw.div`grid content-start gap-6 px-2 row-span-2 mt-2 xl:(row-span-1 mt-4)`

const LinksGroup = tw.div`grid gap-1 `

const LinkStyled = tw(Link)`rounded-md px-2 py-2 hover:(bg-gray-100) transition-colors`

const UserWrapper = tw.div`grid gap-2`

const User = tw.div`grid grid-flow-col justify-start gap-4 items-center px-4`

const MobileTopBar = tw.div`sticky top-0 w-full bg-white xl:hidden p-4 py-1 z-40 flex items-center shadow-sm`

const NavLink = ({ to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  return <LinkStyled css={[match && tw`bg-gray-100 pointer-events-none`]} to={to} {...props} />
}

export { Navigation }
