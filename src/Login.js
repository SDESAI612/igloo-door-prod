import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo from "../src/Utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userName, setUserName } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://mkobw63l9l.execute-api.us-east-1.amazonaws.com/default/igloodoorapi"
      )
      .then((data) => {
        console.log(data);
      });
  }, []);

  const [values, setValues] = React.useState({
    password: "",
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log("Email" + email);
    console.log("Password" + password);

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        setUserName(email);
        console.log(data);
        navigate("/InformationForm");
      },
      onFailure: (err) => {
        alert(err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: 800,
        }}
      >
        <img src={logo} height={"30%"} width={"30%"} />
        <div
          style={{
            paddingTop: "2ch",
            fontSize: 40,
            textAlign: "center",
            color: "orange",
          }}
        >
          Sign In
        </div>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            style={{
              color: "fff",
              background: "white",
            }}
            id="email"
            placeholder="Email Id"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          style={{
            color: "fff",
            background: "white",
          }}
        >
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          />
        </FormControl>
        <br /> <br />
        <Button variant="contained" onClick={(e) => submitData(e)}>
          SIGN IN
        </Button>
      </div>
    </>
  );
};

export default Login;
