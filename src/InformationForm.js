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

  const [nativeplace, setNativeplace] = useState("");
  const [currentcity, setCurrentcity] = useState("");
  const [company, setCompany] = useState("");
  const [university, setUniversity] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [spouse, setSpouse] = useState("");
  const [petname, setPetname] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const { userName, setUserName } = useContext(UserContext);

  const submitData = (e) => {
    axios
      .post("https://nr5ieu7dcc.execute-api.us-east-1.amazonaws.com/abcd/abc", {
        firstname: firstName,
        lastname: lastName,
        city: city,
        school: school,
        nativeplace: nativeplace,
        currentcity: currentcity,
        company: company,
        university: university,
        fathername: fathername,
        mothername: mothername,
        spouse: spouse,
        petname: petname,
        nickname: nickname,
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
          height: 1500,
        }}
      >
        <img src={logo} height={"20%"} width={"20%"} />
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
            placeholder="Born City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="nativeplace"
            placeholder="Native Place"
            variant="outlined"
            value={nativeplace}
            onChange={(e) => setNativeplace(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="currentcity"
            placeholder="Current City"
            variant="outlined"
            value={currentcity}
            onChange={(e) => setCurrentcity(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="company"
            placeholder="Company"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="university"
            placeholder="University"
            variant="outlined"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="fathername"
            placeholder="Father Name"
            variant="outlined"
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="mothername"
            placeholder="Mother Name"
            variant="outlined"
            value={mothername}
            onChange={(e) => setMothername(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="spouse"
            placeholder="Spouse"
            variant="outlined"
            value={spouse}
            onChange={(e) => setSpouse(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="petname"
            placeholder="Pet Name"
            variant="outlined"
            value={petname}
            onChange={(e) => setPetname(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="nickname"
            placeholder="Nickname"
            variant="outlined"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
