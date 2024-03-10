import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './nav/NavBar';
import Home from './nav/Home';
import Onlinevoting from './nav/Onlinevoting';
import LogIn from "./LogIn";
import Voting from "./nav/Voting";
import Signup from "./nav/signup";
import Result from "./nav/result";

const App = () => {
  const [signIn, setSignIn] = useState(true);
  const [backendData, setBackendData] = useState([{}]);
  const [members, setMembers] = useState([
    {
      name: "AP ELECTIONS",
      image: "./image/TDP.png",
      options: "Telugu Desam Party",
      noofvotes: 0,
    },
    {
      name: "AP ELECTIONS",
      image: "./image/JSP.png",
      options: "Jana Sena Party",
      noofvotes: 0,
    },
    {
      name: "AP ELECTIONS",
      image: "./image/YSRCP.png",
      options: "YSRCP",
      noofvotes: 0,
    },
    {
      name: "AP ELECTIONS",
      image: "./image/CONGRESS.png",
      options: "CONGRESS PARTY",
      noofvotes: 0,
    },
  ]);

  const updateVoteCount = (selectedOption) => {
    const updatedMembers = members.map((member) => {
      if (member.options === selectedOption) {
        return { ...member, noofvotes: member.noofvotes + 1 };
      }
      return member;
    });
    setMembers(updatedMembers);
  };

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  const toggle = () => {
    setSignIn(!signIn);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Voting" element={<Voting members={members} updateVoteCount={updateVoteCount} />} />
        <Route path="/Onlinevoting" element={<Onlinevoting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<Result members={members} />} />
        <Route path="/LogIn" element={<LogIn toggle={toggle} />} />
      </Routes>
    </Router>
  );
};

export default App;
