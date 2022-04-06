import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import logo from "./Utils";

const GeneratedPassword = () => {
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    generatePass();
  }, []);

  const [pass, setPass] = useState("");
  const [story, setStory] = useState("");

  const generatePass = () => {
    axios
      .get(
        "https://34kuzq8l87.execute-api.us-east-1.amazonaws.com/abcd/getsecurepassword"
      )
      .then((data) => {
        console.log(data.data.body);
        setPass(data.data.body.generatedpassword);
        setStory(data.data.body.rememberAs);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [storyHighLight, setStoryHighlight] = useState([]);

  const generatePass1 = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://34kuzq8l87.execute-api.us-east-1.amazonaws.com/abcd/getsecurepassword"
      )
      .then((data) => {
        console.log(data.data.body);
        setPass(data.data.body.generatedpassword);
        setStory(data.data.body.rememberAs);
        const story = data.data.body.rememberAs.split(" ");
        setStoryHighlight(data.data.body.rememberAs.split(" "));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const storeData = (e) => {
    e.preventDefault();
    console.log("Password Saved to the database");
    axios
      .post(
        "https://is7tkhxfci.execute-api.us-east-1.amazonaws.com/abcd/storedatavpc",
        {
          username: userName,
          password: pass,
        }
      )
      .then((data) => {
        alert("Password saved to the database");
      })
      .catch((err) => {
        alert(err);
      });
  };

  var index = 0;

  return (
    <>
      {/* <p>
        {storyHighLight.map((item) => {
          if (index == 0) {
            var firstHalf = item.substring(0, 3);
            var secondHalf = item.substring(3);
            return (
              <>
                <div style={{ color: "red" }}>{firstHalf}</div> {secondHalf}{" "}
              </>
            );
          } else {
            <div>{item}</div>;
          }
          index++;
        })}
      </p> */}
      <div
        style={{
          backgroundColor: "black",
          height: 840,
        }}
      >
        <img src={logo} height={"30%"} width={"30%"} />
        <br />
        <div style={{ color: "white", fontSize: 25 }}>Secure password:</div>
        <div style={{ color: "green", fontSize: 60 }}>{pass}</div>
        <p style={{ color: "white", fontSize: 25 }}>Remember this is as:</p>
        <div style={{ color: "green", fontSize: 30 }}>{story}</div>
        <br />
        <Button variant="contained" onClick={(e) => generatePass1(e)}>
          Regenerate Password
        </Button>
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={(e) => storeData(e)}>
          Use this and Store Password For Future Reference
        </Button>
      </div>
    </>
  );
};

export default GeneratedPassword;
