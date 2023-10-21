import React from "react";
import LinkBar from "./components/LinkBar";

async function MyAccount() {
  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    borderBottom: "3px solid red",
    marginLeft: "30px",
    marginBottom: "1px",
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-start items-start p-5">
        <h1 style={titleStyle}>My Account</h1>
        {/* Add your content below the title */}
        <LinkBar />
      </div>
    </div>
  );
}

export default MyAccount;
