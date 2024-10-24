import { FC, PropsWithChildren, ReactNode } from "react";

import CloseIcon from "@app/icons/Close";
import {
  DialogContent as MuiDialogContent,
  IconButton as MuiIconButton,
  DialogTitle as MuiDialogTitle,
} from "@mui/material";
import { Dialog as MuiDialog } from "@mui/material";

type TDialogProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
} & PropsWithChildren;

const Dialog: FC<TDialogProps> = ({ onClose, open, title, children }) => (
  <MuiDialog open={open} fullWidth>
    <MuiDialogTitle
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {title}
      <MuiIconButton onClick={onClose}>
        <CloseIcon />
      </MuiIconButton>
    </MuiDialogTitle>
    <MuiDialogContent>{children}</MuiDialogContent>
  </MuiDialog>
);

export default Dialog;
