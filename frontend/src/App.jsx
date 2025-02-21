// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import LibraryTemplate from './pages/LibraryTemplate'
import CreateForm from './pages/CreateForm'
// import LoginForm from './pages/LoginForm'
// import SignupForm from './pages/SignupForm'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/library-template" element={<LibraryTemplate />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App
