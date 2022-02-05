/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { cloneElement, createContext, ReactNode, useContext } from 'react'
import { useArray } from '../../../hook/useArray'
import { Dialog, DialogSizes } from './dialog'

type DialogItem = {
  id: string
  dialogComponentContent: JSX.Element
  title: string
  size?: DialogSizes
}

type DialogContextValue = {
  closeDialogById: (id: string) => void
  addDialog: (element: DialogItem) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

interface DialogProviderProps {
  // eslint-disable-next-line no-unused-vars
  children: ReactNode
}
const DialogProvider = ({ children }: DialogProviderProps) => {
  const { push, array, filter } = useArray<DialogItem>([])
  const closeDialogById = (id: string) => {
    filter((item) => item.id !== id)
  }

  const openDialog = (dialogItem: DialogItem) => {
    push(dialogItem)
  }

  return (
    <DialogContext.Provider value={{ closeDialogById, addDialog: openDialog }}>
      {array.map(({ id, title, dialogComponentContent, size }) => (
        <Dialog key={id} id={id} title={title} size={size}>
          {cloneElement(dialogComponentContent, { dialogId: id })}
        </Dialog>
      ))}
      {children}
    </DialogContext.Provider>
  )
}

const useDialog = () => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

export { DialogProvider, useDialog }
