"use client";
import { addRemoveAdmin } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type AddRemoveProps = {
  status: boolean;
  uid: string;
  setMembers: Dispatch<SetStateAction<userAdmin[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
export default function AddRemove({
  status,
  uid,
  setMembers,
  setLoading,
}: AddRemoveProps) {
  const handleClick = async () => {
    setLoading(true);
    await addRemoveAdmin(uid, status);
    setMembers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.uid === uid) {
          return { ...user, adminStatus: !status };
        }
        return user;
      });
    });
    setLoading(false);
  };

  return (
    <>
      {status ? (
        <button className="btn btn-error normal-case" onClick={handleClick}>
          Remove Access
        </button>
      ) : (
        <button className="btn btn-success normal-case" onClick={handleClick}>
          Grant Access
        </button>
      )}
    </>
  );
}
