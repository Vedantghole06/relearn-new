import React from "react";

const Profile = () => {
  return (
    <div className="flex  mt-10 justify-center items-center h-screen ">
      <section className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="text-gray-700">
          <p className="mb-2">
            <span className="font-bold">Name: </span>Yogesh Mishra
          </p>
          <p className="mb-2">
            <span className="font-bold">E-mail: </span>
            <a href="mailto:vedantghole@gm.com" className="text-blue-600">
              yogeshmishra@gm.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-bold">Specialization: </span>
            <span className="text-blue-600">Neurologist</span>
          </p>
          <p>
            <span className="font-bold">Country: </span>India
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
