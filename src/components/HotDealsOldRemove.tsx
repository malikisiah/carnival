import React, { useState } from "react";

export default function DealsComponent() {
  const [currentSection, setCurrentSection] = useState(40);

  const handleTextLineClick = (section: React.SetStateAction<number>) => {
    setCurrentSection(section);
  };

  return (
    <div className='flex justify-center mt-12'>
      <HotDealsSection />
      <TextLinesSection
        handleTextLineClick={handleTextLineClick}
        currentSection={currentSection}
      />
      {currentSection === 40 ? (
        <DealsSection40 />
      ) : currentSection === 50 ? (
        <DealsSection50 />
      ) : currentSection === 60 ? (
        <DealsSection60 />
      ) : (
        <DealsSection70 />
      )}
    </div>
  );
}

function HotDealsSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        padding: "10px",
        width: "50px",
        height: "325px",
      }}
    >
      <p
        style={{
          writingMode: "vertical-lr",
          textOrientation: "upright",
          color: "white",
          fontSize: "24px",
          margin: "10",
        }}
      >
        <span style={{ marginBottom: "8px" }}>H</span>
        <span style={{ marginBottom: "8px" }}>O</span>T{"\u00A0"}
      </p>
      <p
        style={{
          writingMode: "vertical-lr",
          textOrientation: "upright",
          color: "yellow",
          fontSize: "24px",
          margin: "0",
        }}
      >
        <span style={{ marginBottom: "8px" }}>D</span>
        <span style={{ marginBottom: "8px" }}>E</span>
        <span style={{ marginBottom: "8px" }}>A</span>
        <span style={{ marginBottom: "8px" }}>L</span>S
      </p>
    </div>
  );
}

function TextLinesSection({ handleTextLineClick, currentSection }: any) {
  const [hoveredLine, setHoveredLine] = useState(null);

  const handleTextLineMouseEnter = (line: any) => {
    setHoveredLine(line);
  };

  const handleTextLineMouseLeave = () => {
    setHoveredLine(null);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "280px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        padding: "10px",
      }}
    >
      <div style={{ marginBottom: "25px" }}>
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            color:
              currentSection === 40
                ? "red"
                : hoveredLine === 40
                ? "red"
                : "black",
            cursor: "pointer",
          }}
          onClick={() => handleTextLineClick(40)}
          onMouseEnter={() => handleTextLineMouseEnter(40)}
          onMouseLeave={handleTextLineMouseLeave}
        >
          UP TO 40% OFF
        </p>
        <div
          style={{
            borderTop: "1px solid black",
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></div>
      </div>
      <div style={{ marginBottom: "25px" }}>
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            color:
              currentSection === 50
                ? "red"
                : hoveredLine === 50
                ? "red"
                : "black",
            cursor: "pointer",
          }}
          onClick={() => handleTextLineClick(50)}
          onMouseEnter={() => handleTextLineMouseEnter(50)}
          onMouseLeave={handleTextLineMouseLeave}
        >
          UP TO 50% OFF
        </p>
        <div
          style={{
            borderTop: "1px solid black",
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></div>
      </div>
      <div style={{ marginBottom: "25px" }}>
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            color:
              currentSection === 60
                ? "red"
                : hoveredLine === 60
                ? "red"
                : "black",
            cursor: "pointer",
          }}
          onClick={() => handleTextLineClick(60)}
          onMouseEnter={() => handleTextLineMouseEnter(60)}
          onMouseLeave={handleTextLineMouseLeave}
        >
          UP TO 60% OFF
        </p>
        <div
          style={{
            borderTop: "1px solid black",
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></div>
      </div>
      <div>
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            color:
              currentSection === 70
                ? "red"
                : hoveredLine === 70
                ? "red"
                : "black",
            cursor: "pointer",
          }}
          onClick={() => handleTextLineClick(70)}
          onMouseEnter={() => handleTextLineMouseEnter(70)}
          onMouseLeave={handleTextLineMouseLeave}
        >
          UP TO 70% OFF
        </p>
        <div
          style={{
            borderTop: "1px solid black",
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></div>
      </div>
    </div>
  );
}

function DealsSection40() {
  return (
    <div
      style={{
        width: "843px",
        height: "325px",
        background: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Deal 1 */}
      <div>
        <img
          src="HotDealsAssets\hotdealsPlaceholder.jpg"
          alt='Deal 1'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Maecenas consequat</p>
      </div>

      {/* Deal 2 */}
      <div>
        <img
          src="HotDealsAssets\hotdealsPlaceholder.jpg"
          alt='Deal 2'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Maecenas consequat</p>
      </div>

      {/* Deal 3 */}
      <div>
        <img
          src="HotDealsAssets\hotdealsPlaceholder.jpg"
          alt='Deal 3'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Maecenas consequat</p>
      </div>

      {/* Deal  */}
      <div>
        <img
          src="HotDealsAssets\hotdealsPlaceholder.jpg"
          alt='Deal 4'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Maecenas consequat</p>
      </div>
    </div>
  );
}

function DealsSection50() {
  return (
    <div
      style={{
        width: "350px",
        height: "325x",
        background: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Deal 1 */}
      <div>
        <img
          src='image1.jpg'
          alt='Deal 1'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 5</p>
      </div>

      {/* Deal 2 */}
      <div>
        <img
          src='image2.jpg'
          alt='Deal 2'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 6</p>
      </div>

      {/* Deal 3 */}
      <div>
        <img
          src='image3.jpg'
          alt='Deal 3'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 7</p>
      </div>

      {/* Deal 4 */}
      <div>
        <img
          src='image4.jpg'
          alt='Deal 4'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 8</p>
      </div>
    </div>
  );
}

function DealsSection60() {
  return (
    <div
      style={{
        width: "350px",
        height: "325px",
        background: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Deal 1 */}
      <div>
        <img
          src='image1.jpg'
          alt='Deal 1'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 9</p>
      </div>

      {/* Deal 2 */}
      <div>
        <img
          src='image2.jpg'
          alt='Deal 2'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 10</p>
      </div>

      {/* Deal 3 */}
      <div>
        <img
          src='image3.jpg'
          alt='Deal 3'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 11</p>
      </div>

      {/* Deal 4 */}
      <div>
        <img
          src='image4.jpg'
          alt='Deal 4'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 12</p>
      </div>
    </div>
  );
}

function DealsSection70() {
  return (
    <div
      style={{
        width: "350px",
        height: "325px",
        background: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Deal 1 */}
      <div>
        <img
          src='image1.jpg'
          alt='Deal 1'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 13</p>
      </div>

      {/* Deal 2 */}
      <div>
        <img
          src='image2.jpg'
          alt='Deal 2'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 14</p>
      </div>

      {/* Deal 3 */}
      <div>
        <img
          src='image3.jpg'
          alt='Deal 3'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 15</p>
      </div>

      {/* Deal 4 */}
      <div>
        <img
          src='image4.jpg'
          alt='Deal 4'
          style={{ width: "100%", height: "auto" }}
        />
        <p>Descriptive text for Deal 16</p>
      </div>
    </div>
  );
}
