import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/Utils";

const PotentialPassword = () => {
  const [potentialPassText, setPotentialPassText] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("https://nr5ieu7dcc.execute-api.us-east-1.amazonaws.com/abcd/abc", {
        potentialpassword: potentialPassText,
        "http-method": "POST",
        "resource-path": "/checkpotentialpassword",
      })
      .then((data) => {
        console.log(data.data);
        setMessage(data.data.body.message);
      })
      .catch((err) => {
        alert(err);
      });
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
