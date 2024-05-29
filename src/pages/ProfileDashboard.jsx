import React from "react";
import useAuth from "../hooks/useAuth";

const ProfileDashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{user.displayName}</h2>
        <p>{user.email}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
