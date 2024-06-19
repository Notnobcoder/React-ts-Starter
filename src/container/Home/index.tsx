import { Link } from "react-router-dom"
import { ApiClient } from "../../apiClient/get"
import { useQuery } from "react-query"
import { CardDetails } from "../../types";
import { LoadingLayout } from "../../layout/loadingLayout";

export const Home = () => {
  const { data: products, isLoading } = useQuery<CardDetails[]>("fetchProducts", ApiClient.FetchProducts, { staleTime: 5000 });



  return (
    <div>
      <h4 className="text-3xl font-bold">Home Container</h4>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
      <Link to="/shop">Shop</Link>
      <LoadingLayout isLoading={isLoading}>
        <div>
          {products?.map((_) => (
            <div key={_.id}>
              <h4>{_.title}</h4>
            </div>
          ))}
        </div>
      </LoadingLayout>
    </div>
  )
}
