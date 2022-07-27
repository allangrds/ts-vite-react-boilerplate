import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

import { Home } from '../modules'

function RoutesList () {
  const routes = useRoutes([
    {
      children: [
        {
          element: <Home />,
          path: 'expenses',
        },
      ],
      element: <Home />,
      path: '/',
    },
    {
      element: <p>Nothing here</p>,
      path: '*',
    },
  ])

  return routes
}

export function Routes () {
  return (
    <Router>
      <RoutesList />
    </Router>
  )
}
