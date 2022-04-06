import axios from "axios";
import React, { useContext, useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo from "../src/Utils";

const InformationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");

  const navigate = useNavigate();

  const { userName, setUserName } = useContext(UserContext);

  const submitData = (e) => {
    alert(userName);
    axios
      .post("https://nr5ieu7dcc.execute-api.us-east-1.amazonaws.com/abcd/abc", {
        firstname: firstName,
        lastname: lastName,
        city: city,
        school: school,
        "http-method": "POST",
        "resource-path": "/unsafepasswords",
      })
      .then((data) => {
        console.log(data.data.body);
        navigate("/Home", { state: { passwords: data.data.body } });
      })
      .catch((err) => {
        alert(err);
      });
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
        <div style={{ color: "white", fontSize: 25 }}>
          Please Enter Your Publicly Available details
        </div>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="fname"
            placeholder="First Name"
            variant="outlined"
            value={firstName}
            style={{
              color: "fff",
              background: "white",
            }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="lname"
            placeholder="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="school"
            placeholder="School"
            variant="outlined"
            value={school}
            style={{
              color: "fff",
              background: "white",
            }}
            onChange={(e) => setSchool(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="city"
            placeholder="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <br /> <br />
        <Button variant="contained" onClick={(e) => submitData(e)}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default InformationForm;
