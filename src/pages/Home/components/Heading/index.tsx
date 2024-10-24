import { FC, useCallback, useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import CreateClientModal from "../CreateClientModal";

const Heading: FC = () => {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Client table</Typography>
        <Button variant="contained" onClick={onOpen}>
          + Add
        </Button>
      </Box>
      <CreateClientModal onClose={onClose} open={open} />
    </>
  );
};

export default Heading;
