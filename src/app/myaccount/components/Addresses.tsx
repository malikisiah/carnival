import React, { useState } from 'react';

interface AddressContentDefaultProps {
  toggleAddressInfo: () => void;
}

function AddressContent() {
  const [displayAddressInfo, setDisplayAddressInfo] = useState(false);

  const toggleAddressInfo = () => {
    setDisplayAddressInfo(!displayAddressInfo);
  };

  return (
    <div>
      {displayAddressInfo ? (
        <EnterAddressInfo toggleAddressInfo={toggleAddressInfo} />
      ) : (
        <AddressContentDefault toggleAddressInfo={toggleAddressInfo} />
      )}
    </div>
  );
}

function AddressContentDefault({ toggleAddressInfo }: AddressContentDefaultProps) {
  const handleAddClick = () => {
    toggleAddressInfo();
  };
  const sectionStyle = {
    display: 'flex',
  };

  const mainTextSectionStyle = {
    flex: 1,
    padding: '10px',
  };

  const addressSectionStyle = {
    flex: 1,
    padding: '10px',
    marginRight: '10px', // Add margin between sections
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textAddStyle = {
    fontSize: '12px',
    marginTop: '5px',
    color: 'blue',
    cursor: 'pointer',
  };
  const textUnderHeaderStyle = {
    fontSize: '12px',
    marginTop: '5px',
  };

  return (
    <div>
      {/* Main Text */}
      <div style={mainTextSectionStyle}>
        The following addresses will be used on the checkout page by default.
      </div>

      <div style={sectionStyle}>
        {/* First Section */}
        <div style={addressSectionStyle}>
          <div style={headerStyle}>Billing Address</div>
          <div style={textAddStyle} onClick={handleAddClick}>Add</div>
          <div style={textUnderHeaderStyle}>
            You have not set up this type of address yet.
          </div>
        </div>

        {/* Second Section (Identical) */}
        <div style={addressSectionStyle}>
          <div style={headerStyle}>Shipping Address</div>
          <div style={textAddStyle} onClick={handleAddClick}>Add</div>
          <div style={textUnderHeaderStyle}>
            You have not set up this type of address yet.
          </div>
        </div>
      </div>
    </div>
  );
}

function EnterAddressInfo({ toggleAddressInfo }: AddressContentDefaultProps) {
    const headerStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
    };
  
    const labelStyle = {
      marginTop: '10px',
      display: 'block',
      fontWeight: 'bold',
    };
  
    const inputStyle = {
      width: '100%',
      height: '30px',
      marginBottom: '10px',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    };
  
    const selectStyle = {
      width: '100%',
      height: '30px',
      marginBottom: '10px',
      padding: '5px',
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
        <div style={headerStyle}>Enter Address</div>
        <label style={labelStyle}>First Name *</label>
        <input
          type="text"
          placeholder="Enter your first name"
          style={inputStyle}
        />
        <label style={labelStyle}>Last Name *</label>
        <input
          type="text"
          placeholder="Enter your last name"
          style={inputStyle}
        />
        <label style={labelStyle}>Company Name (optional)</label>
        <input
          type="text"
          placeholder="Enter your company name"
          style={inputStyle}
        />
        <label style={labelStyle}>Country / Region *</label>
        <input
          type="text"
          placeholder="Enter your country/region"
          style={inputStyle}
        />
        <label style={labelStyle}>Street Address *</label>
        <input
          type="text"
          placeholder="Enter your street address"
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          style={inputStyle}
        />
        <label style={labelStyle}>Town / City *</label>
        <input
          type="text"
          placeholder="Enter your town/city"
          style={inputStyle}
        />
        <label style={labelStyle}>State *</label>
<select style={selectStyle}>
  <option value="">Select State</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
</select>

        <label style={labelStyle}>Zip *</label>
        <input
          type="text"
          placeholder="Enter your zip code"
          style={inputStyle}
        />
        <button style={buttonStyle}>Save Address</button>
        <button onClick={toggleAddressInfo} style={{ marginLeft: '10px' }}>Cancel</button>
      </div>
    );
  }
  

export default AddressContent;
