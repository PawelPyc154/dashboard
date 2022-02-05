/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import tw from 'twin.macro'
import { useOnClickOutside } from '../../hook/useOnClickOutside'
import 'styled-components/macro'

const sizes = {
  base: tw`w-48`,
}

interface MenuProps {
  // eslint-disable-next-line no-unused-vars
  children: (options: { setIsOpenMenu: Dispatch<SetStateAction<boolean>> }) => ReactNode
  trigger: ReactNode
  size?: keyof typeof sizes
}
const Menu = ({ children, trigger, size = 'base' }: MenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => {
    setIsOpenMenu(false)
  })
  return (
    <Containter ref={ref}>
      <div onClick={() => setIsOpenMenu(true)}>{trigger}</div>

      {isOpenMenu && <MenuWrapper css={[sizes[size]]}>{children({ setIsOpenMenu })}</MenuWrapper>}
    </Containter>
  )
}

const Containter = tw.div`relative`
const MenuWrapper = tw.div`absolute bg-white  rounded-md z-40 right-0 -bottom-1 translate-y-full shadow-base divide-y divide-gray-200 grid overflow-hidden`

const MenuItem = tw.button`h-10 flex px-4 justify-start items-center hover:(bg-green-600 text-white) font-medium`

export { Menu, MenuItem }
