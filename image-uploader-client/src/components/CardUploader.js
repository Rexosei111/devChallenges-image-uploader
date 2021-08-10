import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import DropArea from "./DropArea";
import Alert from "./Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "36px 31px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    width: 400,
    height: 455,
    borderRadius: 12,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
}));

function CardUploader({ File, setFile, setstatus, open, setOpen }) {
  const [message, setmessage] = useState();
  const [severity, setSeverity] = useState("success");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    File ? setstatus("uploading") : setstatus("");
  }, [File, setstatus]);

  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" component="h1">
        Upoload your image
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        File should be jpeg, Png...
      </Typography>
      <DropArea
        setFile={setFile}
        File={File}
        setOpen={setOpen}
        setmessage={setmessage}
        setSeverity={setSeverity}
      />
      <Typography variant="body2">Or</Typography>
      <input
        type="file"
        accept="image/*"
        id="image"
        name="image"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <label htmlFor="image">
        <Button
          variant="contained"
          color="primary"
          component="span"
          disableElevation
          style={{ backgroundColor: "#2F80ED", borderRadius: 8 }}
        >
          Choose a file
        </Button>
      </label>
      <Alert
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </Paper>
  );
}

export default CardUploader;
