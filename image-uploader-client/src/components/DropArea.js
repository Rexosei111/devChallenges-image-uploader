import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundSVG from "../assets/image.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    borderRadius: 12,
    border: "1px dashed #97BEF4",
    backgroundColor: "#F6F8FB",
    height: 219,
    width: "100%",
  },
  dropArea: {
    height: "inherit",
    width: "inherit",
    backgroundColor: "transparent",
    backgroundImage: `url(${backgroundSVG})`,
    backgroundPosition: "50% 30%",
    backgroundRepeat: "no-repeat",
  },
  info: {
    position: "absolute",
    top: "53%",
    left: "50%",
    transform: "translate(-50%, 50%)",
  },
}));

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function DropArea({ setFile, setOpen, setmessage, setSeverity }) {
  const dragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (fileTypes.includes(file.type)) {
      setFile(file);
      setSeverity("success");
    } else {
      setSeverity("error");
      setmessage("Unsupported file format!");
      setOpen(true);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.dropArea}
        onDragEnter={dragEnter}
        onDragOver={dragOver}
        onDrop={drop}
      >
        <Typography variant="body1" className={classes.info}>
          Drag & Drop your image here
        </Typography>
      </div>
    </div>
  );
}

export default DropArea;
