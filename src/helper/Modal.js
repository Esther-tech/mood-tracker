import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

const Modal = ({ open, title, description, handleClose, handleAction, actionTitle, beforeAction }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableScrollLock={true}
    >
      <DialogTitle style={{ fontWeight: "600" }} id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" component={'div'}>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        {handleAction &&
          <Button onClick={() => handleAction()} color="primary" disabled={beforeAction}>
            {actionTitle}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}
export default Modal;