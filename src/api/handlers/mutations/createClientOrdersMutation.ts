import api from "@app/api";

type TCreateClientOrdersMutationProps = {
  userName: string;
  orderNames: string[];
};

const createClientOrdersMutation = async (
  props: TCreateClientOrdersMutationProps
) => {
  return await api.post("/orders", props);
};

export default createClientOrdersMutation;
