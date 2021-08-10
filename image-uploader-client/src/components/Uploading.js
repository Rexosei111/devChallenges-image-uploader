import { Box, LinearProgress, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  uploading: {
    width: 400,
    height: 144,
    borderRadius: 12,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    gap: 35,
    alignItems: "flex-start",
  },
}));

function Uploading(props) {
  const [Progress, setProgress] = useState(0);
  
  const classes = useStyles();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Paper className={classes.uploading}>
      <Typography variant="h6" component="h1">
        Uploading...
      </Typography>
      <Box display="flex" alignItems="center" style={{width: "100%"}}>
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={Progress} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {`${Math.round(Progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Uploading;
