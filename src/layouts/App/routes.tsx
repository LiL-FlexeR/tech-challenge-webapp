import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "@app/constants/routes";

import HomePage from "@app/pages/Home";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />} />
      <Route path={routes.NOT_FOUND} />
    </Routes>
  );
};

export default AppRoutes;
