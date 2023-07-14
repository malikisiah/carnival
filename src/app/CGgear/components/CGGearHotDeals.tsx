import React from 'react';

function CGGearHotdeals() {
  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        //backgroundColor: 'yellow',
      }}
    >
      <Header />
      <BlockOne />
      {/* Other content in CGGearHotdeals */}
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        width: '268px',
        height: '50px',
        backgroundColor: '#EEEEEE',
        marginLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#333',
      }}
    >
      <span style={{ marginLeft: '23px' }}>HOT DEAL OF THIS WEEK</span>
    </div>
  );
}


function BlockOne() {
  return (
    <div
      style={{
        width: '268px',
        height: '400px',
        border: '1px solid #EEEEEE',
        marginLeft: '15px',
      }}
    >
      <Timer />
      {/* Other content in BlockOne */}
    </div>
  );
}

function Timer() {
  return (
    <div
      style={{
        width: '268px',
        height: '66px',
        paddingTop: '23px',
        //backgroundColor: '#EEEEEE',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <TimerBox />
      <TimerBox />
      <TimerBox />
      <TimerBox />
      {/* Content for Timer goes here */}
    </div>
  );
}

function TimerBox() {
  return (
    <div style={{ }}>
      <div
        style={{
          width: '42px',
          height: '34px',
          backgroundColor: 'red',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '16px' }}>00</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '12px', color: 'black' }}>Days</span>
      </div>
    </div>
  );
}


export default CGGearHotdeals;
