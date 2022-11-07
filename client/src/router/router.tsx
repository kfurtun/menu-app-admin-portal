import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'components/App';
import { data } from 'data/data';
import { convertToLowerCase } from 'helpers/convertToLowerCase';
import Dashboard from 'components/Organisms/Dashboard';
import { Item } from 'data/data';

interface Routes {
  path: string;
  element?: JSX.Element;
}

function Router() {
  const generateRoutes = (): Routes[] => {
    const routes: Routes[] = [];
    Object.values(data.sideBar).forEach((section) =>
      Object.values(section.items).forEach((route) => {
        'main' in section.items
          ? routes.push({
              path: `/${route.url}`,
              element:
                'component' in route ? (route as Item).component : <App />,
            })
          : routes.push({
              path: `/${convertToLowerCase(section.text)}/${route.url}`,
              element:
                'component' in route ? (route as Item).component : <App />,
            });
      })
    );

    return routes;
  };

  const router = createBrowserRouter(generateRoutes());

  return <RouterProvider router={router} />;
}

export default Router;
