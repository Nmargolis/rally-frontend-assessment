import { Dialog, DialogProps } from "@mui/material";
import { useState } from "react";

export const CustomDialog = ({ onClose, children }: DialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        setOpen(false);
        if (onClose) onClose(event, reason);
      }}
    >
      {children}
    </Dialog>
  );
};
