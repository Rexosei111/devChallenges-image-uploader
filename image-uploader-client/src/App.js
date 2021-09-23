import React, { useState } from "react";
import CardUploader from "./components/CardUploader";
import Uploading from "./components/Uploading";
import AfterUpload from "./components/AfterUpload";
import Wrapper from "./wrapper";

function App() {
  const [File, setFile] = useState();
  const [Link, setLink] = useState("");
  const [status, setstatus] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState();
  const [severity, setSeverity] = useState("error");

  if (status === "uploading") {
    return (
      <Wrapper>
        <Uploading
          status={status}
          setstatus={setstatus}
          File={File}
          setFile={setFile}
          setLink={setLink}
        />
      </Wrapper>
    );
  }

  if (status === "done") {
    return (
      <Wrapper
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      >
        <AfterUpload
          link={Link}
          setOpen={setOpen}
          setmessage={setmessage}
          setSeverity={setSeverity}
          open={open}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      open={open}
      setOpen={setOpen}
      message={message}
      severity={severity}
    >
      <CardUploader
        File={File}
        setFile={setFile}
        setstatus={setstatus}
        setmessage={setmessage}
        setOpen={setOpen}
        setSeverity={setSeverity}
      />
    </Wrapper>
  );
}

export default App;
