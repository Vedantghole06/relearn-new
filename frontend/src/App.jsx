<<<<<<< HEAD
// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import LibraryTemplate from './pages/LibraryTemplate'
import CreateForm from './pages/CreateForm'
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import LibraryTemplate from "./pages/LibraryTemplate";
>>>>>>> 3f1ca6a5846796a34a0eb1c29f6622461905f0ae
// import LoginForm from './pages/LoginForm'
// import SignupForm from './pages/SignupForm'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> */}
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/create-form" element={<CreateForm />} />
=======
>>>>>>> 3f1ca6a5846796a34a0eb1c29f6622461905f0ae
        <Route path="/library-template" element={<LibraryTemplate />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
