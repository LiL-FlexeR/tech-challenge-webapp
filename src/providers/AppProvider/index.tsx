import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import NotificationsProvider from "../NotificationsProvider";
import QueryClientProvider from "../QueryClientProvider";
import ThemeProvider from "../ThemeProvider";

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <QueryClientProvider>
      <NotificationsProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </NotificationsProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppProvider;
