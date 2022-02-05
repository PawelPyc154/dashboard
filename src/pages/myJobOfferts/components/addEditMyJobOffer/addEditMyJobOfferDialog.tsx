import { GoPlus } from 'react-icons/go'
import { Dialog } from '../../../../components/common/dialog/dialog'
import { Button } from '../../../../components/form/button'
import { IconButton } from '../../../../components/form/iconButton'
import { AddEditMyJobOfferForm } from './addEditMyJobOfferForm'
import 'styled-components/macro'
import 'twin.macro'

const AddEditMyJobOfferDialog = () => (
  <Dialog
    title="Add job offer"
    trigger={
      <>
        <Button color="green" tw="hidden lg:flex">
          Add
        </Button>
        <IconButton tw="lg:hidden" color="green">
          <GoPlus size="20" />
        </IconButton>
      </>
    }
  >
    {() => <AddEditMyJobOfferForm mode="edit" id={undefined} />}
  </Dialog>
)

export { AddEditMyJobOfferDialog }
