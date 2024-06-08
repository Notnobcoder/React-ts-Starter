const AuthLayout = ({ firstBody }: { firstBody: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex-1">
        {firstBody}
      </div>
      <div className="flex-1">
        <h4>Auth layout page</h4>
      </div>
    </div>
  )
}

export default AuthLayout
