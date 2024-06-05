import { Application } from './container/Application'
import { MainLayout } from './layout/main'

function App() {
  return (
    <>
      <MainLayout>
        <Application />
      </MainLayout>
    </>
  )
}

export default App
