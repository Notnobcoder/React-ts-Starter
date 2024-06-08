import { useEffect } from "react"

export const ScrollOnTop = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })

  }, [])

  return (
    <>
      {children}
    </>
  )

}
