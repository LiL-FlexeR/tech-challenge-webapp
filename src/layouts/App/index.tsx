import { FC } from "react";

import AppProvider from "@app/providers/AppProvider";

import AppRoutes from "./routes";

const App: FC = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
