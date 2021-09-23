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
      <Wrapper>
        <AfterUpload link={Link} open={open} setOpen={setOpen} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CardUploader
        File={File}
        setFile={setFile}
        setstatus={setstatus}
        open={open}
        setOpen={setOpen}
      />
    </Wrapper>
  );
}

export default App;
