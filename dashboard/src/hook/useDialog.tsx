import { useState } from 'react'

const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  return {
    isOpenDialog,
    handleCloseDialog: () => setIsOpenDialog(false),
    handleOpenDialog: () => setIsOpenDialog(true),
  }
}

export { useDialog }
