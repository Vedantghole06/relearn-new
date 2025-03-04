import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hardcodedEmail = "admin@example.com";
    const hardcodedPassword = "password123";

    if (
      formData.email === hardcodedEmail &&
      formData.password === hardcodedPassword
    ) {
      localStorage.setItem("token", "authenticated");
      localStorage.setItem("tokenTime", new Date().toISOString());
      navigate("/admin-panel");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 opacity-85 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <img src={null} alt="Relearn Logo" className="h-10 mx-auto" />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border bg-white border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border bg-white border-gray-600 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
