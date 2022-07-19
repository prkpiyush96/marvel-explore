import Characters from '../views/characters';
import { APP_ROUTES } from '../utils/constants';
import Details from '../views/details';

interface IRoute {
  name: string;
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
}

const Routes: IRoute[] = [
  {
    name: "characters",
    path: APP_ROUTES.characters,
    component: Characters,
    exact: true,
  },
  {
    name: "details",
    path: APP_ROUTES.details,
    component: Details,
  },
];

export default Routes;
