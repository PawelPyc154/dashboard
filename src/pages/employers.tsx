import { DialogBase } from '../components/common/dialog/dialogBase'
import { Button } from '../components/form/button'
import { useDialog } from '../hook/useDialog'

const Employers = () => {
  const { isOpenDialog, handleOpenDialog, handleCloseDialog } = useDialog()
  return (
    <div tw="grid justify-end items-start h-80 bg-yellow-300 overflow-y-scroll">
      <Button onClick={handleOpenDialog}>open Dialog </Button>
      {isOpenDialog && (
        <DialogBase title="Test dialog" onCloseDialog={handleCloseDialog}>
          test
        </DialogBase>
      )}
    </div>
  )
}

export { Employers }
