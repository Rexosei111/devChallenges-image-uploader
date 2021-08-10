import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MUIAlert from '@material-ui/lab/Alert'
// import Slide from "@material-ui/core/Slide";

function Alert(props) {
  

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <MUIAlert onClose={handleClose} severity={props.severity}>
          {props.message ? props.message : "link copied to clipboard"}
        </MUIAlert>
      </Snackbar>
  );
}

export default Alert;
