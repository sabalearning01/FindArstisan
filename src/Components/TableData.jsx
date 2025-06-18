import React from "react";
import fa from "../assets/fa.png";
import { FaCircleCheck } from "react-icons/fa6";

const users = [
  {
    id: 1,
    name: "John Doe",
    gender:"male",
    email: "john@example.com",
    phone: "+1234567890",
    category: "Plumber",
    details:"View Details",
    status: "InActive",
    
    imageUrl: fa,
    verification: <FaCircleCheck className="text-black" />,
  },

  {
    id: 2,
    name: "Tahiy Donovan",
    gender:"male",
    email: "tahiy@example.com",
    phone: "+1234567890",
    category: "Plumber",
    details:"View Details",
    status: "InActive",
    imageUrl: fa,
    verification: <FaCircleCheck className="text-black" />,
  },

  {
    id: 3,
    name: "Dumelo King",
    gender:"male",
    email: "dumelo@example.com",
    phone: "+1234567890",
    category: "Plumber",
    details:"View Details",
    status: "InActive",
    imageUrl: fa,
    verification: <FaCircleCheck className="text-black" />,
  },

  {
    id: 4,
    name: "Bani Kudi",
    gender:"female",
    email: "bani@example.com",
    phone: "+1234567890",
    category: "Plumber",
    details:"View Details",
    status: "Active",
    imageUrl: fa,
    verification: <FaCircleCheck className="text-black" />,
  },

  {
    id: 5,
    name: "Dipo Dina",
    gender:"male",
    email: "dipo@example.com",
    phone: "+1234567890",
    category: "Plumber",
    status: "Active",
    details:"View Details",
    imageUrl: fa,
    verification: <FaCircleCheck className="text-black" />,
  },
];

const getStatusStyle = (status) => {
  return status === "Active"
    ? "text-white bg-[#339999]"
    : "text-red-700 bg-red-100";
};

const UserTable = () => {
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
             {/* <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Gender
            </th> */}
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Contact Information
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Status
            </th>
            {/* <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Verification
            </th> */}
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
              <td className="px-4 py-3">
                <div className="font-[DM Sans] text-[16px] text-black">{user.name}</div>
                <div className="font-[DM Sans] text-[16px] text-black capitalize  ">{user.gender}</div>
                </td>
              {/* <td className="px-4 py-3">{user.gender}</td> */}
              <td className="px-4 py-3">
                <div className="font-[DM Sans] text-[16px] text-black">Email: {user.email}</div>
                < div className="font-[DM Sans] text-[16px] text-black">Phone: {user.phone}</div>
              </td>
              <td className="px-4 py-3">
                <div>{user.category}</div>
                <div className="font-[DM Sans]  font-normal text-[12px]">{user.details}</div>
                </td>
              
              <td className="flex justify-between items-center px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
                 <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.verification
                  )}`}
                >
                  {user.verification}
                </span>
              </td>
              </td>

              {/* <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.verification
                  )}`}
                >
                  {user.verification}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" flex justify-between items-center">
        <button className="cursor-pointer mt-[20px] w-[246px] h-[56px] bg-black text-white px-2.5 py-4 font-[Montserrat] font-medium">
          Previous
        </button>
        <button className="cursor-pointer mt-[20px] w-[246px] h-[56px] bg-black text-white  px-2.5 py-4 font-[Montserrat] font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
