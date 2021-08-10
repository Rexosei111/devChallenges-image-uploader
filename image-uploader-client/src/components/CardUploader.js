import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import DropArea from "./DropArea";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    width: 402,
    height: 469,
    borderRadius: 12,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
}));

function CardUploader() {
  const [File, setFile] = useState({});

  const handleChange = (e) => {
    
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" component="h1">
        Upoload your image
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        File should be jpeg, Png...
      </Typography>
      <DropArea />
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
    </Paper>
  );
}

export default CardUploader;
