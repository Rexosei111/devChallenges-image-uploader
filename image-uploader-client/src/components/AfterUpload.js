import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Alert from "./Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    width: 402,
    minHeight: 469,
    borderRadius: 12,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  media: {
    height: 0,
    borderRadius: 12,
    width: "100%",
    paddingTop: "56.25%",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
}));

function AfterUpload({ link, open, setOpen, setTransition }) {
  const copy_to_clipboard = () => {
    navigator.clipboard.writeText(link);
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <CardHeader
        className={classes.header}
        avatar={
          <CheckCircleIcon fontSize="large" style={{ color: "#219653" }} />
        }
        title="Uploaded Successfully!"
        titleTypographyProps={{ variant: "h6", component: "h1" }}
      />
      <CardMedia
        className={classes.media}
        image={link}
        title="Uploaded Image"
      />
      <CardActions
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <TextField
          value={link}
          variant="outlined"
          label="Link to image"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  style={{ backgroundColor: "#2F80ED" }}
                  onClick={copy_to_clipboard}
                >
                  Copy link
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </CardActions>
      <Alert open={open} setOpen={setOpen} />
    </Card>
  );
}

export default AfterUpload;
