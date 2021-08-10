import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

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
  box: {
    height: 224,
    width: "100%",
    borderRadius: 12,
  },
  uploadeImage: {
    height: "inherit",
    width: "inherit",
    borderRadius: "inherit",
  },
  root: {
    borderRadius: 8,
    height: 34,
  },
}));

function AfterUpload({ link }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <CheckCircleIcon fontSize="large" style={{ color: "#219653" }} />
      <Typography variant="h6" component="h1">
        Uploaded Successfully
      </Typography>
      <Box className={classes.box}>
        <img alt="" src={link} className={classes.uploadeImage} />
      </Box>
      <TextField
        value={link}
        variant="outlined"
        label="Link to image"
        fullWidth
        className={classes.root}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ backgroundColor: "#2F80ED" }}
              >
                Copy link
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
}

export default AfterUpload;
