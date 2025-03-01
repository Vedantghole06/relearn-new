import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminHome";
import CreateForm from "./components/CreateForm";
import FormFill from "./components/FormFill";
import FormDataPage from "./components/FormDataPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/form/:link" element={<FormFill />} />
        <Route path="/form-data" element={<FormDataPage />} />
        <Route path="/" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
