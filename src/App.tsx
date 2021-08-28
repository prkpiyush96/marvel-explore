import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Characters from './views/characters';

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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;
