import { useDialog } from '../components/common/dialog/dialogProvider'

const Employers = () => {
  const { closeDialogById, addDialog } = useDialog()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          addDialog({
            id: 'addPost',
            title: 'test',
            dialogComponentContent: (
              <>
                <button type="button" onClick={() => closeDialogById('addPost')}>
                  test
                </button>
                <button
                  type="button"
                  onClick={() =>
                    addDialog({
                      id: 'addPost 2',
                      title: 'test',
                      dialogComponentContent: <>dialog 2</>,
                    })
                  }
                >
                  add Dialog 2
                </button>
              </>
            ),
          })
        }
      >
        openDialog
      </button>
    </div>
  )
}

export { Employers }
