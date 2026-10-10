import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center text-white">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-3xl font-bold uppercase text-indigo-600 shadow-md">
          {user.name.firstname.charAt(0)}
        </div>

        <h2 className="mt-3 text-xl font-bold capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="mt-1 text-sm text-indigo-100">
          @{user.username}
        </p>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">

        {/* Email */}
        <div className="flex items-start gap-3">
          <span className="text-lg">📧</span>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Email
            </p>

            <p className="break-all text-sm font-medium text-gray-700">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <span className="text-lg">📱</span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Phone
            </p>

            <p className="text-sm font-medium text-gray-700">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <span className="text-lg">📍</span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Address
            </p>

            <p className="text-sm capitalize text-gray-700">
              {user.address.number}, {user.address.street}
            </p>

            <p className="text-sm capitalize text-gray-500">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>

        {/* Geolocation */}
        <div className="flex items-start gap-3">
          <span className="text-lg">🌍</span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Geolocation
            </p>

            <p className="text-sm text-gray-700">
              Latitude: {user.address.geolocation.lat}
            </p>

            <p className="text-sm text-gray-700">
              Longitude: {user.address.geolocation.long}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-4">
          <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            User ID: {user.id}
          </span>
        </div>

      </div>
    </div>
  );
};

export default UserCard;