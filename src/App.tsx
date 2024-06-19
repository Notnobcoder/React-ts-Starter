import { ScrollOnTop } from './components/scrollOnTop'
import { Application } from './container/Application'
import { MainLayout } from './layout/main'
import { QueryClientProvider, QueryClient } from "react-query"
import AuthProvider from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <MainLayout>
              <ScrollOnTop>
                <Application />
              </ScrollOnTop>
            </MainLayout>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
