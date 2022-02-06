import { GoPlus } from 'react-icons/go'
import { DialogTrigger } from '../../../../components/common/dialog/dialogTrigger'
import { Button } from '../../../../components/form/button'
import { IconButton } from '../../../../components/form/iconButton'
import { AddEditMyJobOfferForm } from './addEditMyJobOfferForm'
import 'styled-components/macro'
import 'twin.macro'

const AddEditMyJobOfferDialog = () => (
  <DialogTrigger
    title="Add job offer"
    trigger={
      <>
        <Button color="green" tw="hidden xl:flex">
          Add
        </Button>
        <IconButton tw="xl:hidden" color="green">
          <GoPlus size="20" />
        </IconButton>
      </>
    }
  >
    {() => <AddEditMyJobOfferForm mode="edit" id={undefined} />}
  </DialogTrigger>
)

export { AddEditMyJobOfferDialog }
