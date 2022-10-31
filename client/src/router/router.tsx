import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'components/App';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/menus/:item',
      element: <App />,
    },
    {
      path: '/orders',
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
