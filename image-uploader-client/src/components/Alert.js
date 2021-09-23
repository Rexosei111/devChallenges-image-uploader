import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MUIAlert from "@material-ui/lab/Alert";

function Alert(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={handleClose}
      style={{ position: "absolute", bottom: 10 }}
    >
      <MUIAlert onClose={handleClose} severity={props.severity}>
        {props.message}
      </MUIAlert>
    </Snackbar>
  );
}

export default Alert;
