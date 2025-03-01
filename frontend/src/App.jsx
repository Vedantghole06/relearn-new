import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import LibraryTemplate from "./pages/LibraryTemplate";
import CreateForm from "./pages/CreateForm";
import TermsAndCondition from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivateRoute from './PrivateRoute'

import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/create-form" element={<PrivateRoute><CreateForm /></PrivateRoute>} />
        <Route path="/library-template" element={<PrivateRoute><LibraryTemplate /></PrivateRoute>} />
        <Route path="/project-details" element={<PrivateRoute><ProjectDetails /></PrivateRoute>} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

export default App;
