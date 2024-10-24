import { useQuery } from "react-query";

import fetchClientOrdersQuery from "@app/api/handlers/queries/fetchClientOrdersQuery";

export const QUERY_KEY = "useFetchClientOrdersQuery";

export const useFetchClientOrdersQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchClientOrdersQuery,
  });
};
