import { useMutation, useQueryClient } from "react-query";

import createClientOrdersMutation from "@app/api/handlers/mutations/createClientOrdersMutation";

import { TApiProps } from "@app/types/api";

import { QUERY_KEY as FETCH_CLIENT_ORDERS_QUERY_KEY } from "../queries/useFetchClientOrdersQuery";

const MUTATION_KEY = "useCreateClientOrdersMutation";

export const useCreateClientOrdersMutation = (props?: TApiProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: createClientOrdersMutation,
    onSuccess: () => {
      props?.onSuccess?.();

      queryClient.invalidateQueries({
        queryKey: [FETCH_CLIENT_ORDERS_QUERY_KEY],
      });
    },
    onError: props?.onError,
  });
};
