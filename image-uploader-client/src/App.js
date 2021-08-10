import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardUploader from "./components/CardUploader";
import Uploading from "./components/Uploading";
import AfterUpload from "./components/AfterUpload";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  const [File, setFile] = useState();
  const [Link, setLink] = useState("");
  const [status, setstatus] = useState("");
  const [open, setOpen] = useState(false);

  if (status === "uploading") {
    return (
      <div className={classes.app}>
        <Uploading
          status={status}
          setstatus={setstatus}
          File={File}
          setLink={setLink}
        />
        <Typography variant="body2" color="textSecondary" style={{position: "absolute", bottom: 10}}>
        created by{" "}
        <Typography variant="h6" component="span">
          Rexosei111
        </Typography>{" "}
        - devChallenges.io
      </Typography>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className={classes.app}>
        <AfterUpload link={Link} open={open} setOpen={setOpen} />
        <Typography variant="body2" color="textSecondary" style={{position: "absolute", bottom: 10}}>
        created by{" "}
        <Typography variant="h6" component="span">
          Rexosei111
        </Typography>{" "}
        - devChallenges.io
      </Typography>
      </div>
    );
  }

  return (
    <div className={classes.app}>
      <CardUploader
        File={File}
        setFile={setFile}
        setstatus={setstatus}
        open={open}
        setOpen={setOpen}
      />
      <Typography variant="body2" color="textSecondary" style={{position: "absolute", bottom: 10}}>
        created by{" "}
        <Typography variant="h6" component="span">
          Rexosei111
        </Typography>{" "}
        - devChallenges.io
      </Typography>
    </div>
  );
}

export default App;
