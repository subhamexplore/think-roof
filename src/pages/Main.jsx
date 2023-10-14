import React from "react";
import "../assets/styles/Main.css";
import brochure from "../components/brochure.pdf";
import img1 from "../assets/images/fp1.jpeg";
import img2 from "../assets/images/fp2.jpeg";

const Main = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = "Brochure";

    link.href = brochure;

    link.click();
  };

  const data = [
    {
      Sno: 1,
      head: "Foundation & Plinth",
      detail: "RCC M-25 Grade Concrete by RMC",
    },
    {
      Sno: 2,
      head: "Superstructure",
      detail: "RCC M-25 Grade Concrete by RMC",
    },
    {
      Sno: 3,
      head: "Cement to be used",
      detail: "Ultratech / Ramco",
    },
    {
      Sno: 4,
      head: "Steel Reinforcement",
      detail: "TATA / VIZAC / SAIL",
    },
    {
      Sno: 5,
      head: "Brick Wall",
      detail: "1st class KB bricks/ Fly ash bricks",
    },
    {
      Sno: 6,
      head: "Main Door (4’0”x 8’0” size)",
      detail: "Teak Wood door with lock & eye piece",
    },
    {
      Sno: 7,
      head: "Internal Doors",
      detail: "Pannel / Factory made Flush door.",
    },
    {
      Sno: 8,
      head: "Front Grill Shutter",
      detail: "Stainless grill shutter",
    },
    {
      Sno: 9,
      head: "Windows (of 6’6” height)",
      detail: "Glazed shutter with UPVC frame and MS Grill",
    },
    {
      Sno: 10,
      head: "Flooring",
      detail:
        "Premium quality of Vitrified tile (4ft x 2ft size) flooring, Marble/ Granite flooring in Staircase, Antiskid ceramic tiles in Bathroom & Kitchen",
    },
    {
      Sno: 11,
      head: "Wall Cladding",
      detail:
        "Up to 3ft above kitchen slab, up to 8ft height in Toilets and up to 7ft height in Balcony",
    },
    {
      Sno: 12,
      head: "Toilets",
      detail:
        "Provisions of Wash Basin, EWC Pan and facility for Geyser & exhaust fan.",
    },
    {
      Sno: 13,
      head: "PH Fittings",
      detail: "Jaguar / Asian / Equivalent brand fittings",
    },
    {
      Sno: 14,
      head: "Water proofing",
      detail: "Water proofing treatment in toilets.",
    },
    {
      Sno: 15,
      head: "Painting",
      detail: "With Asian paints / Berger paints",
    },
  ];

  return (
    <div className="main">
      <div id="home">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/images/1.jpeg")}
                height={600}
                className="carousal-img d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <button onClick={handleClick} className="brochure-button">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/2.jpeg")}
                height={600}
                className="carousal-img d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <button onClick={handleClick} className="brochure-button">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/3.jpeg")}
                height={600}
                className="carousal-img d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <button onClick={handleClick} className="brochure-button">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/4.jpeg")}
                height={600}
                className="carousal-img d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <button onClick={handleClick} className="brochure-button">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/5.jpeg")}
                height={600}
                className="carousal-img d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <button onClick={handleClick} className="brochure-button">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />

        <div className="card" id="about">
          <div className="card-body">
            <h1 className="card-title">
              <span style={{ color: "rgba(21, 150, 150, 1)" }}>Think</span>{" "}
              <span style={{ color: "rgba(107, 21, 107, 1)" }}>Roof</span>{" "}
              <span
                style={{
                  backgroundColor: " rgb(3, 3, 81, 0.8)",
                  color: "white",
                  borderRadius: "8px",
                  padding: "5px",
                }}
              >
                Ekayan
              </span>
            </h1>
            <br />
            <h3 className="card-subtitle text-body-secondary">
              A project of ThinkRoof Infra PVT. LTD.
            </h3>
            <br />
            <p style={{ fontSize: "18px" }} className="card-text">
              Discover the true bliss of life in a new paradise, Nestled at
              Patrapada, near MoBus Depot. The east facing apartment has
              different ranges of flats available with luxury living and
              fantastic amenities to flaunt the elegance of your dream home. All
              the flats are taken care to be well ventilated and vastu complaint
              so that you will find your sacred heaven within the gates of Think
              Roof Ekayan. The flats are spacious and have considerably good
              room sizes.The project connects to three side approach roads. The
              opposite side of 60 ft front approach road is connected to a
              forest green land and exercise & yoga field, a rare combination
              hard to get nowadays in overly crowded cities like Bhubaneswar.
              The backside 40ft approach road is connected to kalinganagar K9-A
              Colony.
            </p>
            <h4 style={{ color: "rgba(21, 150, 150, 1)" }}>
              {" "}
              Project Approved by BMC
            </h4>
            <h4 style={{ color: "rgba(107, 21, 107, 1)" }}>
              Project registered under ORERA - RP/19/2023/00994
            </h4>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />

        <div>
          <h1 style={{ textAlign: "center" }}>Floor Plan and Area Statement</h1>
          <br />
          <div className="card-img">
            <div className="card-ka-img">
              <img src={img1} className="card-img-top" alt="..." />
            </div>
            <div className="card-ka-img">
              <img src={img2} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          <h1 style={{ textAlign: "center" }}>
            {" "}
            <span style={{ color: "rgba(21, 150, 150, 1)" }}>
              Structural
            </span>{" "}
            <span style={{ color: "rgba(107, 21, 107, 1)" }}>Details</span>
          </h1>
          <br />
          <table className="table" style={{ textAlign: "justify" }}>
            <tbody>
              {data.map((e) => (
                <tr>
                  <th scope="row" className="py-1">
                    {e.Sno}
                  </th>
                  <td className="table-head px-5 py-1">{e.head}</td>
                  <td className="table-detail px-5 py-1">{e.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <div className="card" id="about">
            <div className="card-body">
              <p style={{ fontSize: "18px" }} className="card-text">
                Customers are allowed to visit the work during the working
                period. Program of works shall be informed time to time to them
                in advance. We will try our best to take care of the sentiments
                of the customers.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <h1 style={{ textAlign: "center" }}>Facilities</h1>
        <br />
        <div>
          <div className="card facility">
            <p>24 hrs Water Supply</p>
            <p>CCTV @Security Area</p>
            <p>Strecher Lift</p>
            <p>Provision of Fire Extinguisher</p>
            <p>Flats have four sides opening</p>
            <p>Both front and back side road faclity</p>
            <p>Community/Society Hall</p>
            <p>Transformer for Appartment Occupants only</p>
            <p>24hrs Power Backup by Generator</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Main;
