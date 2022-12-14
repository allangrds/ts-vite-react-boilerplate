import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import { Home } from '../modules'

export const RoutesList = () => {
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

export const Routes = () => (
  <Router>
    <RoutesList />
  </Router>
)
