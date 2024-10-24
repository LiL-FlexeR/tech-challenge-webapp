import { FC, PropsWithChildren } from "react";

import theme from "@app/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
