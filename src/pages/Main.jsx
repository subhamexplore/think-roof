import React from "react";
import "../assets/styles/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div id="home">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/images/1.jpeg")}
                height={600}
                className="car-img d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/2.jpeg")}
                height={600}
                className="car-img d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/3.jpeg")}
                height={600}
                className="car-img d-block w-100"
                alt="...0"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/4.jpeg")}
                height={600}
                className="car-img d-block w-100"
                alt="...0"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/5.jpeg")}
                height={600}
                className="car-img d-block w-100"
                alt="...0"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
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
            data-bs-target="#carouselExample"
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
      </div>

      <div className="card" id="about">
        <div className="card-body">
          <h1 className="card-title">Card title</h1>
          <br />
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            eum. Natus aliquid expedita quam, vel sed beatae quia qui possimus,
            itaque labore assumenda? Aperiam quos ratione molestiae quam velit
            dolores tempore repellat autem hic recusandae. Et sint ipsam amet
            aliquid dolorum rem quia provident velit commodi. Maxime molestias
            consectetur cupiditate non, voluptas iusto harum labore voluptatum
            perferendis dolores nemo veniam minima sed, unde est officiis
            incidunt soluta pariatur qui asperiores nisi ipsum expedita. Eum,
            esse et vitae quia suscipit rem, explicabo necessitatibus iste
            quibusdam odio sapiente hic ab harum, rerum dolorum ullam cum?
            Inventore esse ratione quae, voluptas voluptate provident
            reprehenderit nihil rerum quis blanditiis, officiis pariatur quo
            aperiam doloremque at aliquam distinctio fuga ullam facere
            temporibus! Iure temporibus delectus ab soluta maxime voluptate
            dolore. Aut quas mollitia perspiciatis facere ullam. Magnam non
            praesentium nostrum excepturi cumque voluptas odio consectetur ipsum
            ipsam quis eligendi ex a commodi amet, vitae eum maxime, animi,
            quasi facere. Expedita, ullam rerum. Fuga totam earum, accusantium
            enim expedita reprehenderit, autem alias ipsam itaque quae odio
            vitae cumque incidunt temporibus, accusamus voluptatibus inventore?
            Fugit amet est dolor, distinctio velit impedit facilis magni
            voluptate ipsam repudiandae. Odit sint fuga doloremque commodi et?
            Possimus facilis consequuntur obcaecati quo dolor alias soluta
            reprehenderit quisquam fuga, deleniti nulla doloremque voluptatibus
            repellendus rem quam repudiandae est iure quae molestiae molestias
            ratione officia voluptas exercitationem. Ullam quaerat, ea quia
            quidem velit a rem quibusdam minima debitis. Quidem fugiat quibusdam
            explicabo accusantium exercitationem ipsam blanditiis eum esse nam
            eligendi inventore, ea pariatur labore similique harum aperiam
            itaque necessitatibus, temporibus facere veniam expedita possimus.
            Nam, architecto laboriosam nostrum perspiciatis accusamus tempore
            impedit vero sint perferendis cupiditate quo cumque aspernatur
            tempora voluptatem accusantium dignissimos earum molestias magnam
            quaerat tenetur! Voluptatum aliquid, rerum dignissimos fugit dolor
            ratione accusantium? Explicabo quae vitae atque quibusdam, accusamus
            ducimus aperiam!
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Main;
