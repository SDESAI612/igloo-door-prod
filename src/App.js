import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import InformationForm from "./InformationForm";
import UnsecurePassList from "./UnsecurePassList";
import Home from "./Home";
import PotentialPassword from "./PotentialPassword";
import GeneratedPassword from "./GeneratedPassword";
import { UserContext } from "./UserContext";
import { useState } from "react";
import NoLogin from "./NoLogin";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{ userName, setUserName }}>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="/InformationForm" element={<InformationForm />} />
          <Route path="/UnsecurePassList" element={<UnsecurePassList />} />
          <Route path="/PotentialPassword" element={<PotentialPassword />} />
          <Route path="/GeneratedPassword" element={<GeneratedPassword />} />
          <Route path="*" element={<NoLogin />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
