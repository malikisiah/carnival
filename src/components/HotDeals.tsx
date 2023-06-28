
export default function DealsComponent(){
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'red',
            padding: '10px',
          }}
        >
          <p
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'upright',
              color: 'white',
              fontSize: '16px',
              margin: '0',
            }}
          >
            HOT{'\u00A0'} 
          </p>
          <p
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'upright',
              color: 'yellow',
              fontSize: '16px',
              margin: '0',
            }}
          >
            DEALS
          </p>
        </div>
        <div
          style={{
            width: '350px',
            height: '300px',
            background: 'lightblue',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="image1.jpg"
              alt="Deal 1"
              style={{ width: '100%', height: 'auto' }}
            />
            <p>Descriptive text for Deal 1</p>
          </div>
          <div>
            <img
              src="image2.jpg"
              alt="Deal 2"
              style={{ width: '100%', height: 'auto' }}
            />
            <p>Descriptive text for Deal 2</p>
          </div>
          <div>
            <img
              src="image3.jpg"
              alt="Deal 3"
              style={{ width: '100%', height: 'auto' }}
            />
            <p>Descriptive text for Deal 3</p>
          </div>
          <div>
            <img
              src="image4.jpg"
              alt="Deal 4"
              style={{ width: '100%', height: 'auto' }}
            />
            <p>Descriptive text for Deal 4</p>
          </div>
        </div>
      </div>
    );
  };
