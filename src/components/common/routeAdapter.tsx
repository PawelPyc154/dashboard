import React from 'react'

import { useLocation, Location as RouterLocation, useNavigate } from 'react-router-dom'
import { Location } from 'history'

const RouteAdapter = ({
  children,
}: {
  // eslint-disable-next-line no-unused-vars
  children: (value: {
    // eslint-disable-next-line no-unused-vars
    history: { replace(location: Location): void; push(location: Location): void }
    location: RouterLocation
  }) => void
}) => {
  const navigate = useNavigate()
  const routerLocation = useLocation()

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: Location) {
        navigate(location, { replace: true, state: location.state })
      },
      push(location: Location) {
        navigate(location, { replace: false, state: location.state })
      },
    }),
    [navigate],
  )

  return children({ history: adaptedHistory, location: routerLocation })
}

export { RouteAdapter }
