import { routes } from "@app/constants/routes";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={routes.HOME} />
      <Route path={routes.NOT_FOUND} />
    </Routes>
  );
};

export default AppRoutes;
