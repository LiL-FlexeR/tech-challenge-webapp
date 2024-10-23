import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default AppProvider;
