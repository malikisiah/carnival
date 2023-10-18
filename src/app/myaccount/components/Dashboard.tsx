import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../../../firebase/config";
type dashContProps = {
  handleClick: (section: string) => void;
};

function DashboardContent({ handleClick }: dashContProps) {
  const [user] = useAuthState(firebaseAuth);

  const handleSignOut = () => {
    firebaseAuth.signOut();
  };

  const marginStyle = {
    margin: "25px 0", // 15px top and bottom margin, 0 left and right margin
  };

  const linkStyle = {
    color: "blue", // Set text color to blue
    textDecoration: "underline", // Add underline for links
    cursor: "pointer", // Add pointer cursor for links
  };

  const usernameStyle = {
    fontWeight: "bold", // Make usernames bold
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Hello <span style={usernameStyle}>{user.displayName}</span> (not{" "}
            <span style={usernameStyle}>{user.displayName}</span> ?{" "}
            <span onClick={handleSignOut} style={linkStyle}>
              Logout
            </span>
            )
          </p>
          {/* Add your dashboard content and widgets here */}
          <p style={marginStyle}>
            From your account you can view{" "}
            <button onClick={() => handleClick("orders")} style={linkStyle}>
              recent orders
            </button>
            , manage{" "}
            <a href="#" style={linkStyle}>
              shipping and billing addresses
            </a>
            , and edit your
            <a href="#" style={linkStyle}>
              password and account details.
            </a>
          </p>
          <VendorElement />
        </div>
      ) : (
        <p>You are not signed in.</p> //GPT just put this here, im leaving it for you to fix once you do backend as the logout should just redirect users to a different page
      )}
    </div>
  );
}

function VendorElement() {
  const vendorStyle: any = {
    display: "flex",
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Center-align items vertically
    width: "700px",
    padding: "10px",
    border: "1px solid #ccc",
  };

  const textContainerStyle = {
    flex: 1, // Allow the text container to take available space
  };

  const headerStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const textUnderHeaderStyle = {
    fontSize: "12px",
    marginTop: "5px",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <div style={vendorStyle}>
      <div style={textContainerStyle}>
        <div style={headerStyle}>Become a Vendor</div>
        <div style={textUnderHeaderStyle}>
          Vendors can sell products and manage a store with a vendor dashboard.
        </div>
      </div>
      <button style={buttonStyle}>Become a Vendor</button>
    </div>
  );
}

export default DashboardContent;
