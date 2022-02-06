import { useState } from 'react'
import { DialogBase } from '../components/common/dialog/dialogBase'
import { Menu, MenuItem } from '../components/common/menu'
import { Button } from '../components/form/button'
import { useDialog } from '../hook/useDialog'
import 'twin.macro'
import 'styled-components/macro'

const Employers = () => {
  const { isOpenDialog, handleOpenDialog, handleCloseDialog } = useDialog()
  const [inputValue, setInputValue] = useState('')
  return (
    <div tw="flex">
      <Button onClick={handleOpenDialog}>open Dialog </Button>
      {isOpenDialog && (
        <DialogBase title="Test dialog" onCloseDialog={handleCloseDialog}>
          test
        </DialogBase>
      )}
      <a href="/">test</a>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <a href="https://pawelpyc.pl">test</a>
      {inputValue}
      <div tw="font-bold">{localStorage.getItem('test')}</div>
      <Menu openButton={<Button>open Dialog </Button>}>{() => <MenuItem>test</MenuItem>}</Menu>
    </div>
  )
}

export { Employers }
