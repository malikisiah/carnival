"use client";
import AddRemove from "@/components/addRemove";
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

type usersProp = {
  users: userAdmin[];
};
export default function Users({ users }: usersProp) {
  const [members, setMembers] = useState(users);
  const [loading, setLoading] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 min-h-screen mt-16">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Team members
        </h3>
        <p className="text-gray-600 mt-2">
          Control which employees will have administrative access
        </p>
      </div>
      <div className="mt-12 shadow-md border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-[#ff4501] text-black font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Admin Status</th>
              <th className="py-3 px-6">Add/Remove Admin</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {members.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  {item.photo ? (
                    <Image
                      alt=""
                      width={500}
                      height={500}
                      src={item.photo}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <Image
                      alt=""
                      width={500}
                      height={500}
                      src="/7856668.png"
                      className="w-10 h-10 rounded-full"
                    />
                  )}

                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.displayName}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      {item.email}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">{`${item.role
                  .charAt(0)
                  .toUpperCase()}${item.role.substring(1)}`}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item.adminStatus ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AddRemove
                    status={item.adminStatus}
                    uid={item.uid}
                    setMembers={setMembers}
                    setLoading={setLoading}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loading ? <Modal /> : null}
    </div>
  );
}
