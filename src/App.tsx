import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Routes from './routes';
import { APP_ROUTES } from './utils/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to={APP_ROUTES.characters} />
          </Route>
          <QueryClientProvider client={queryClient}>
            {Routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                component={route.component}
              />
            ))}
          </QueryClientProvider>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
