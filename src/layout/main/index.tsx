import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import { Stripper } from "../../components/stripper"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Stripper />
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )

}
