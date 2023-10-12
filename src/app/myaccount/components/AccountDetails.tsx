import React from 'react';

function AccountDetailsContent() {
  const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '15px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };
  const input2Style = {
    width: '100%',
    height: '30px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const labelStyle = {
    
  };

  const italicTextStyle = {
    fontStyle: 'italic',
    marginBottom: '15px'
  };

  const borderStyle = {
    borderBottom: '1px solid #000',
    paddingBottom: '1px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>

      {/* First Name */}
      <label style={labelStyle}>First Name *</label>
      <input type="text" placeholder="Enter your first name" style={inputStyle} />

      {/* Last Name */}
      <label style={labelStyle}>Last Name *</label>
      <input type="text" placeholder="Enter your last name" style={inputStyle} />

      {/* Display Name */}
      <label style={labelStyle}>Display Name *</label>
      <input type="text" placeholder="Enter your display name" style={input2Style} />
      <p style={italicTextStyle}>
        This will be how your name will be displayed in the account section and in reviews.
      </p>

      {/* Email Address */}
      <label style={labelStyle}>Email Address *</label>
      <input type="text" placeholder="Enter your email address" style={inputStyle} />

      {/* Password Change */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Password Change</h2>
      <div style={borderStyle}></div>

      {/* Current Password */}
      <label style={labelStyle}>Current Password (leave blank to leave unchanged)</label>
      <input type="password" placeholder="Enter your current password" style={inputStyle} />

      {/* New Password */}
      <label style={labelStyle}>New Password (leave blank to leave unchanged)</label>
      <input type="password" placeholder="Enter your new password" style={inputStyle} />

      {/* Confirm New Password */}
      <label style={labelStyle}>Confirm New Password</label>
      <input type="password" placeholder="Confirm your new password" style={inputStyle} />

      {/* Save Changes Button */}
      <button style={buttonStyle}>Save Changes</button>
    </div>
  );
}

export default AccountDetailsContent;
