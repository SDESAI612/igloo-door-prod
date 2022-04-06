import { Button } from "@mui/material";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../src/Utils";

const Home = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.passwords);
    setPass(location.state.passwords);
  }, []);

  const unsafePasswords = (e) => {
    e.preventDefault();
    navigate("/UnsecurePassList", { state: { passwords: pass } });
  };

  const potentialPasswords = (e) => {
    e.preventDefault();
    navigate("/PotentialPassword");
  };

  const generateSecuredPasswords = (e) => {
    e.preventDefault();
    navigate("/GeneratedPassword");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: 840,
      }}
    >
      <img src={logo} height={"30%"} width={"30%"} />
      <br />
      <br /> <br />
      <Button variant="contained" onClick={(e) => unsafePasswords(e)}>
        Unsafe Passwords
      </Button>
      <br /> <br />
      <Button variant="contained" onClick={(e) => potentialPasswords(e)}>
        Check your Potential Passwords
      </Button>
      <br /> <br />
      <Button variant="contained" onClick={(e) => generateSecuredPasswords(e)}>
        Generate Secured Password
      </Button>
    </div>
  );
};

export default Home;
