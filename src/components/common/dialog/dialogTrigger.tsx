/* eslint-disable no-unused-vars */

import { cloneElement, ReactNode } from 'react'

import { DialogProvider } from './dialogProvider'
import { DialogBase, DialogBaseSizes } from './dialogBase'

interface DialogProps {
  // eslint-disable-next-line no-undef
  trigger: JSX.Element
  children: (options: { onCloseDialog: () => void }) => ReactNode
  title: string
  size?: DialogBaseSizes
}

const DialogTrigger = ({ trigger, title, size, children }: DialogProps) => (
  <DialogProvider>
    {({ isOpenDialog, setIsOpenDialog }) => (
      <>
        {cloneElement(trigger, { onClick: () => setIsOpenDialog(true) })}
        {isOpenDialog && (
          <DialogBase title={title} size={size} onCloseDialog={() => setIsOpenDialog(false)}>
            {children({ onCloseDialog: () => setIsOpenDialog(false) })}
          </DialogBase>
        )}
      </>
    )}
  </DialogProvider>
)

export { DialogTrigger }
