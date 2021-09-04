import Characters from "../views/characters";
import { APP_ROUTES, SIDEBAR_LABELS } from "../utils/constants";

interface IRoute {
  name: string;
  path: string;
  component: () => JSX.Element;
}

const Routes: IRoute[] = [
  {
    name: SIDEBAR_LABELS.characters,
    path: APP_ROUTES.characters,
    component: Characters,
  }
]

export default Routes;