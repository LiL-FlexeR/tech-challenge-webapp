import { FC } from "react";

import DataTable from "./components/DataTable";
import Heading from "./components/Heading";

const HomePage: FC = () => {
  return (
    <>
      <Heading />
      <DataTable />
    </>
  );
};

export default HomePage;
