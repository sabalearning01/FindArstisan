import React from "react";
import fa from "../assets/fa.png";

const CustomerTable = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      category: "Plumber",
      status: "InActive",
      imageUrl: fa,
      lastactivity: unknown,
    },

    {
      id: 2,
      name: "Tahiy Donovan",
      email: "tahiy@example.com",
      phone: "+1234567890",
      category: "Plumber",
      status: "InActive",
      imageUrl: fa,
      lastactivity: unknown,
    },

    {
      id: 3,
      name: "Dumelo King",
      email: "dumelo@example.com",
      phone: "+1234567890",
      category: "Plumber",
      status: "Active",
      imageUrl: fa,
      lastactivity: unknown,
    },

    {
      id: 4,
      name: "Bani Kudi",
      email: "bani@example.com",
      phone: "+1234567890",
      category: "Plumber",
      status: "Active",
      imageUrl: fa,
      lastactivity: unknown,
    },

    {
      id: 5,
      name: "Dipo Dina",
      email: "dipo@example.com",
      phone: "+1234567890",
      category: "Plumber",
      status: "Active",
      imageUrl: fa,
      lastactivity: unknown,
    },
  ];

  const getStatusStyle = (status) => {
    return status === "Active"
      ? "text-green-700 bg-green-100"
      : "text-red-700 bg-red-100";
  };

  return (
    <div className="overflow-x-auto mt-[21px]">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-[#BF5A07] ">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Profile Picture
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Contact Information
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Verification
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.imageUrl}
                  alt={user.name}
                />
              </td>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
              </td>
              <td className="px-4 py-3">{user.category}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.lastactivity
                  )}`}
                >
                  {user.lastactivity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
