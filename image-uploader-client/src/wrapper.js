import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Wrapper({ children }) {
  const classes = useStyles();

  return (
    <Container className={classes.app}>
      {children}

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
