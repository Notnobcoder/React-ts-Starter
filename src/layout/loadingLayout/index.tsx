import { ImSpinner3 } from "react-icons/im"

export const LoadingLayout = ({ children, isLoading }: { children: React.ReactNode, isLoading: boolean }) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <ImSpinner3 size={37} className="animate-spin" />
        </div>
      ) : (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}
