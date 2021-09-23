import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    minHeight: 469,
    borderRadius: 12,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  media: {
    borderRadius: 12,
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
}));

function AfterUpload({ link, setOpen, setmessage, setSeverity, open }) {
  const matches = useMediaQuery("(min-width:500px)");

  const copy_to_clipboard = () => {
    navigator.clipboard.writeText(link);
    setmessage("Link copied to clipboard");
    setSeverity("success");
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <Card className={classes.paper} style={{ width: matches ? 402 : "100%" }}>
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
        component="img"
        src={link}
        alt="Uploaded Image"
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
                {!matches ? (
                  <IconButton onClick={copy_to_clipboard}>
                    <AssignmentIcon fontSize="small" />
                  </IconButton>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    style={{ backgroundColor: "#2F80ED" }}
                    onClick={copy_to_clipboard}
                  >
                    Copy link
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
      </CardActions>
    </Card>
  );
}

export default AfterUpload;
