import tw from 'twin.macro'

const statuses = {
  active: 'Aktywna',
  draft: 'Draft',
  closed: 'Closed',
  banned: 'Banned',
}
const colors = {
  active: tw`text-green-600`,
  draft: tw``,
  closed: tw``,
  banned: tw`text-red-600`,
}
export type OfferStatuses = keyof typeof statuses

interface OfferStatusProps {
  status: OfferStatuses
}
const OfferStatus = ({ status }: OfferStatusProps) => (
  <div css={[tw`font-medium`, colors[status]]}>{statuses[status]}</div>
)

export { OfferStatus }
