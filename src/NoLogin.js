import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const NoLogin = () => {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);

  const submitData = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <>
      <div style={{ paddingTop: "5ch", fontSize: 40, textAlign: "center" }}>
        {userName.length > 0
          ? "Please Login to View the Page"
          : "The Page does not exist"}
      </div>
      <Button variant="contained" onClick={(e) => submitData(e)}>
        Submit
      </Button>
    </>
  );
};

export default NoLogin;
