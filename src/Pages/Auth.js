import React, { useEffect, useRef, useState } from "react";
import Sawo from "sawo";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Auth({ history }) {
  const [sawo, setSawo] = useState(null);
  var config = {
    containerID: "sawo-container",
    identifierType: "email",
    apiKey: "5909adaf-c3e0-4f3c-854a-8e4b2afbdd20",
    onSuccess: (payload) => {
      console.log(payload);
      axios
        .post(process.env.BACKEND_URL, {
          credentials: payload,
          user_id: payload.user_id,
          deviceID: "123456789",
        })
        .then(() => {
          history.push("/");
        });
    },
  };
  useEffect(() => {
    !sawo && setSawo(new Sawo(config));
  }, [document.getElementById("sawo-container")]);
  return <div id="sawo-container">{sawo && sawo.showForm()}</div>;
}

export default withRouter(Auth);
