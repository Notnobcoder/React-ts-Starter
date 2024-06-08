import { useQuery } from "react-query"
import { ApiClient } from "../../apiClient/get"
import { LoadingLayout } from "../../layout/loadingLayout"
import { CardDetails } from "../../types"
import { Link } from "react-router-dom"

export const Shop = () => {
  const { data: hotels, isLoading } = useQuery<CardDetails[]>("fetchProducts", ApiClient.fetchMyHotels)
  return (
    <div>
      <h4>Shop Container</h4>
      <Link to="/">Home</Link>
      <div>
        <LoadingLayout isLoading={isLoading}>
          <div className="grid grid-cols-4">
            {hotels?.map((_) => (
              <div key={_.id}>
                <h5>{_.title}</h5>
              </div>
            ))}

          </div>
        </LoadingLayout>
      </div>
    </div>
  )
}
