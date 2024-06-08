import { ScrollOnTop } from './components/scrollOnTop'
import { Application } from './container/Application'
import { MainLayout } from './layout/main'
import { QueryClientProvider, QueryClient } from "react-query"

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
        <MainLayout>
          <ScrollOnTop>
            <Application />
          </ScrollOnTop>
        </MainLayout>
      </QueryClientProvider>
    </>
  )
}

export default App
