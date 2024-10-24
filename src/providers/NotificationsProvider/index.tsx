import { SnackbarProvider } from "notistack";
import { FC, PropsWithChildren } from "react";

const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => (
  <SnackbarProvider maxSnack={5}>{children}</SnackbarProvider>
);

export default NotificationsProvider;
