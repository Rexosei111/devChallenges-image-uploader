import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./components/Alert";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Wrapper({ children, open, setOpen, message, severity }) {
  const classes = useStyles();

  return (
    <Container className={classes.app} maxWidth="md">
      {children}

      <Alert
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ position: "absolute", bottom: 10 }}
      >
        created by{" "}
        <Typography variant="h6" component="span">
          Rexosei111
        </Typography>{" "}
        - devChallenges.io
      </Typography>
    </Container>
  );
}

export default Wrapper;
