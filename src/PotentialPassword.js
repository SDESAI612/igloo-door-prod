import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/Utils";

const PotentialPassword = () => {
  const [potentialPassText, setPotentialPassText] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const headers = {
    headers: {
      "X-Amz-Content-Sha256":
        "beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3",
      "X-Amz-Date": "20220406T194640Z",
      Authorization:
        "AWS4-HMAC-SHA256 Credential=/20220406/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=6683f57fb3499a393ea7296bb170c7524044bb9b7ce5d2a7d85832dcbb4a8e98",
      "Content-Type": "application/json",
    },
  };

  const submitData = (e) => {
    e.preventDefault();
    setMessage(
      "You can use secure password generator or Try another password."
    );
    // axios
    //   .post(
    //     "https://6iwa9s96ik.execute-api.us-east-1.amazonaws.com/production/unsafeandcheck",
    //     {
    //       potentialpassword: potentialPassText,
    //       "http-method": "POST",
    //       "resource-path": "/checkpotentialpassword",
    //     },
    //     { headers: headers }
    //   )
    //   .then((data) => {
    //     console.log(data);
    //     setMessage(data.data.body.message);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  };

  const generateSecuredPasswords = (e) => {
    e.preventDefault();
    navigate("/GeneratedPassword");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: 840,
        }}
      >
        <img src={logo} height={"30%"} width={"30%"} />
        <br />
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="text"
            // label="Potential Password"
            placeholder="Potential Password"
            variant="outlined"
            value={potentialPassText}
            onChange={(e) => setPotentialPassText(e.target.value)}
          />
        </FormControl>{" "}
        <br />
        <br />
        <Button variant="contained" onClick={(e) => submitData(e)}>
          Submit
        </Button>
        <br />
        <br />
        <p style={{ color: "red" }}> {message}</p>
        {message.length > 0 ? (
          <Button
            variant="contained"
            onClick={(e) => generateSecuredPasswords(e)}
          >
            Generate Safe password
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default PotentialPassword;
