import React, { useState } from "react";

export default function DealsComponent() {
  const [currentSection, setCurrentSection] = useState(40);

  const handleTextLineClick = (section : React.SetStateAction<number>) => {
    setCurrentSection(section);
  };

  const dealPercent = currentSection === 40 ? deals40 :
                     currentSection === 50 ? deals50 :
                     currentSection === 60 ? deals60 :
                     deals70;

  return (
    <div className="flex justify-center mt-12">
      <HotDealsSection />
      <TextLinesSection
        handleTextLineClick={handleTextLineClick}
        currentSection={currentSection}
      />
      <DealsSection deals={dealPercent} />
    </div>
  );
}

type Deal = {
  image: string;
  title: string;
  newPrice: string;
  oldPrice: string;
};

type DealsSectionProps = {
  deals: Deal[];
};

function DealsSection({ deals }: DealsSectionProps) {
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
        {deals.map((deal: Deal, index : number) => (
          <div key={index}>
            <img
              src={deal.image}
              alt={deal.title}
              style={{ width: "100%", height: "auto" }}
            />
            <p>{deal.title}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{deal.newPrice}</p>
            <p style={{ textDecoration: "line-through" }}>{deal.oldPrice}</p>
              
            </div>
          </div>
        ))}
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

  const deals40 = [
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "40% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "40% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "40% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "40% deals",
      oldPrice: "$45",
      newPrice: "$52",
    }
    // Add more deals as needed...
  ];

  const deals50 = [
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "50% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "50% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "50% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "50% deals",
      oldPrice: "$45",
      newPrice: "$52",
    }
    // Add more deals as needed...
  ];

  const deals60 = [
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "60% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "60% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "60% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "60% deals",
      oldPrice: "$45",
      newPrice: "$52",
    }
    // Add more deals as needed...
  ];

  const deals70 = [
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "70% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "70% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "70% deals",
      oldPrice: "$45",
      newPrice: "$52",
    },
    {
      image: "HotDealsAssets/hotdealsPlaceholder.jpg",
      title: "70% deals",
      oldPrice: "$45",
      newPrice: "$52",
    }
    // Add more deals as needed...
  ];
  
