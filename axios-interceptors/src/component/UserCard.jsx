import { useState } from "react";
import React from "react";
const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg border border-gray-200">
      
      {/* User Avatar */}
      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 capitalize">
        {user.name.firstname} {user.name.lastname}
      </h2>

      {/* Username */}
      <p className="text-center text-gray-500">
        @{user.username}
      </p>

      {/* User Details */}
      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email</span>
          <span className="text-gray-800">{user.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Phone</span>
          <span className="text-gray-800">{user.phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">City</span>
          <span className="capitalize text-gray-800">
            {user.address.city}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Zipcode</span>
          <span className="text-gray-800">
            {user.address.zipcode}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;