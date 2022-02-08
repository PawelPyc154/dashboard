import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../../form/button'
import { useDialogContext } from '../dialogProvider'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface DialogContentFormProps {
  className?: string
  isLoading?: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  onReset?: FormEventHandler<HTMLFormElement>
}

const DialogContentForm = ({ children, onSubmit, isLoading, className, onReset }: DialogContentFormProps) => {
  const { setIsOpenDialog } = useDialogContext()

  return (
    <Form onSubmit={onSubmit} onReset={onReset}>
      <FieldsWrapper className={className}>{children}</FieldsWrapper>
      <ButtonsWrapper tw="justify-center">
        <Button color="gray" onClick={() => setIsOpenDialog(false)}>
          Close
        </Button>
        {!!onReset && (
          <Button type="reset" color="gray">
            Reset
          </Button>
        )}
        <Button type="submit" isLoading={isLoading}>
          Filter
        </Button>
      </ButtonsWrapper>
    </Form>
  )
}

export { DialogContentForm }

const Form = tw.form`grid gap-6`
const FieldsWrapper = tw.div`grid gap-4`
