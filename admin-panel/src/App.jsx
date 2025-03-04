import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminPanel from "./components/AdminHome";
import CreateForm from "./components/CreateForm";
import FormFill from "./components/FormFill";
import FormDataPage from "./components/FormDataPage";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/create-form"
          element={
            <PrivateRoute>
              <CreateForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/form/:link"
          element={
            <PrivateRoute>
              <FormFill />
            </PrivateRoute>
          }
        />
        <Route
          path="/form-data"
          element={
            <PrivateRoute>
              <FormDataPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
