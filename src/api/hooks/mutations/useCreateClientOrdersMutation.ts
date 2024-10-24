import { useMutation } from "react-query";

import createClientOrdersMutation from "@app/api/handlers/mutations/createClientOrdersMutation";

import { TApiProps } from "@app/types/api";

const MUTATION_KEY = "useCreateClientOrdersMutation";

export const useCreateClientOrdersMutation = (props?: TApiProps) => {
  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: createClientOrdersMutation,
    onSuccess: () => {
      props?.onSuccess?.();
    },
    onError: props?.onError,
  });
};
