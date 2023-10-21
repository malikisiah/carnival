"use client";
import React, { useState } from "react";
import DashboardContent from "./Dashboard";
import AddressContent from "./Addresses";
import AccountDetailsContent from "./AccountDetails";
import PurchaseHistory from "./PurchaseHistory";

export default function LinkBar() {
  // Define the available sections
  const sections = {
    dashboard: "Dashboard",
    orders: "Orders",
    downloads: "Downloads",
    addresses: "Addresses",
    accountDetails: "Account Details",
    rmaRequests: "RMA Requests",
    vendors: "Vendors",
    sellerSupportTickets: "Seller Support Tickets",
    logout: "Logout",
  };

  const [currentSection, setCurrentSection] = useState("dashboard"); // Set the initial section

  const handleTextLineClick = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex justify-start mt-12">
      <div style={{ marginRight: "15px" }}>
        {/* Render the first component with 15px margin to the right */}
      </div>
      <div style={{ marginLeft: "15px", marginRight: "15px" }}>
        <Links
          sections={sections}
          currentSection={currentSection}
          handleTextLineClick={handleTextLineClick}
        />
      </div>
      {/* Render the field based on currentSection */}
      {currentSection === "dashboard" && (
        <Dashboard handleClick={handleTextLineClick} />
      )}
      {currentSection === "orders" && <PurchaseHistory />}
      {currentSection === "downloads" && <Downloads />}
      {currentSection === "addresses" && <Addresses />}
      {currentSection === "accountDetails" && <AccountDetails />}
      {currentSection === "rmaRequests" && <RMARequests />}
      {currentSection === "vendors" && <Vendors />}
      {currentSection === "sellerSupportTickets" && <SellerSupportTickets />}
      {currentSection === "logout" && <Logout />}
    </div>
  );
}

// Define the LinksProps type
interface LinksProps {
  sections: Record<string, string>;
  currentSection: string;
  handleTextLineClick: (section: string) => void;
}

function Links({ sections, currentSection, handleTextLineClick }: LinksProps) {
  const linkBarStyle: any = {
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "column", // Display links vertically
    alignItems: "flex-start", // Align text to the left
    padding: "10px 0",
    paddingLeft: "15px", // Add 15px padding to the left
    width: "200px", // Set the width to 200 pixels
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    margin: "5px 0", // Add 5px space between links vertically
    cursor: "pointer",
    padding: "0 0 5px 0",
    marginLeft: "20px",
  };

  return (
    <div style={linkBarStyle}>
      {Object.keys(sections).map((section) => (
        <a
          key={section}
          href="#"
          style={{
            ...linkStyle,
            textDecoration: currentSection === section ? "underline" : "none",
          }}
          onClick={() => handleTextLineClick(section)}
        >
          {sections[section]}
        </a>
      ))}
    </div>
  );
}

type dashProps = {
  handleClick: (section: string) => void;
};
function Dashboard({ handleClick }: dashProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardContent handleClick={handleClick} />
    </div>
  );
}

function Downloads() {
  return <div>Downloads Component</div>;
}

function Addresses() {
  return (
    <div className="flex min-h-screen">
      <AddressContent />
    </div>
  );
}

function AccountDetails() {
  return (
    <div className="flex min-h-screen">
      <AccountDetailsContent /> {/* Render the component */}
    </div>
  );
}

function RMARequests() {
  return <div>RMA Requests Component</div>;
}

function Vendors() {
  return <div>Vendors Component</div>;
}

function SellerSupportTickets() {
  return <div>Seller Support Tickets Component</div>;
}

function Logout() {
  return <div>Logout Component</div>;
}
