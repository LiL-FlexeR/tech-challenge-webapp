import { FC, PropsWithChildren, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "react-query";

const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <ReactQueryClientProvider client={client}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
