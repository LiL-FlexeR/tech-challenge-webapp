import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "../ThemeProvider";

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

export default AppProvider;
