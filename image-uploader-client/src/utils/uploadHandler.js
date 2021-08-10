import axios from "axios";

export const UploadHandler = (file) => {
  const config = {
    onUploadProgress: function (progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(percentCompleted);
      return percentCompleted;
    },
  };

  let Data = new FormData();
  Data.append("image", file);
  axios
    .post("http://localhost:8000/imageapp/images/", Data, config)
    .then((res) => console.log(res.data.image))
    .then((err) => console.log(err));
};
