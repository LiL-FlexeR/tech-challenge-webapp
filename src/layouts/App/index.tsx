import AppProvider from "@app/providers/AppProvider";
import { FC } from "react";
import AppRoutes from "./routes";

const App: FC = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
