/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */

import { ReactNode } from 'react'

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
        <div onClick={() => setIsOpenDialog(true)}>{trigger}</div>
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
