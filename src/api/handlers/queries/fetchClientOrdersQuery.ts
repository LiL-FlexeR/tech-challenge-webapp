import api from "@app/api";

import { TClient } from "@app/types/client";

const fetchClientOrdersQuery = async () => {
  const response = await api.get<TClient[]>("/orders");

  return response.data;
};

export default fetchClientOrdersQuery;
