import { FC } from "react";

import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useFetchClientOrdersQuery } from "@app/api/hooks/queries/useFetchClientOrdersQuery";

const DataTable: FC = () => {
  const { data, isLoading } = useFetchClientOrdersQuery();

  if (isLoading) {
    return <Typography>Loading data</Typography>;
  }

  if (!data) {
    return <Typography>No available clients</Typography>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.name}>
            <TableCell>{c.name}</TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap">
                {c.orders.map((o) => (
                  <Chip key={o.id} label={o.name} />
                ))}
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
