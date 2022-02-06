import React, { ReactNode, useState, useRef, cloneElement } from 'react'
import { usePopper } from 'react-popper'
import tw from 'twin.macro'
import { useOnClickOutside } from '../../hook/useOnClickOutside'

const colors = {
  white: tw`bg-white`,
  red: tw`bg-red-600 text-white font-medium `,
}

interface MenuProps {
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
  // eslint-disable-next-line no-unused-vars
  children: (options: { onCloseMenu: () => void }) => ReactNode
  color?: keyof typeof colors
}

const Menu = ({ openButton, children, color = 'white' }: MenuProps) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = React.useState<HTMLButtonElement | null>(null)
  const { styles, attributes, state } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    strategy: 'fixed',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          padding: 10,
          altBoundary: true,
        },
      },
      {
        name: 'flip',
        options: {
          altBoundary: true,
        },
      },
    ],
  })

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const ref = useRef<any>(null)
  useOnClickOutside<HTMLDivElement>(
    ref as any,
    () => {
      setIsOpenMenu(false)
    },
    'dialogContent',
  )
  return (
    <>
      {cloneElement(openButton, { ref: setReferenceElement, onClick: () => setIsOpenMenu((prev) => !prev) })}

      {isOpenMenu && (
        <div
          ref={setPopperElement as any}
          style={{ ...styles.popper }}
          {...attributes.popper}
          css={[
            colors[color],
            tw`bg-white shadow-base rounded-md overflow-hidden py-2 z-40`,
            state?.modifiersData.hide?.isReferenceHidden && tw`hidden`,
          ]}
        >
          <div tw="grid divide-y divide-gray-100" ref={ref}>
            {children({ onCloseMenu: () => setIsOpenMenu(false) })}
          </div>
        </div>
      )}
    </>
  )
}

const MenuItem = tw.button`h-10 px-4 flex items-center hover:(bg-green-600 text-white)`

export { Menu, MenuItem }
