import React, { useState } from "react";
import kids1 from "../../assets/kids-img-1.jpg";
import kids2 from "../../assets/kids-img-2.jpg";
import kidsteaching from "../../assets/kids-teaching.jpg";
import "./styles/homepage.css";
export const Homepage: React.FC = () => {
  return (
    <div className="container ">
      <div
        id="carouselExampleIndicators"
        className="carousel slide homepage__carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={kids1}
              style={{ height: "350px" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "350px" }}
              src={kids2}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="homepage__service ">
        <h3>What Services we Offer</h3>
        <div className="homepage__aboutcontent">
          <p id="homepage__aboutcontent__text">
            We use ChatGPT to generate awesome stories for children in order to
            enjoy and have better day end after tough homeworks and to learn
            about the different context of stories with the help of advancement
            of AI
          </p>
        </div>
        <br />
        <div className="col homepage__contentbtns">
          <button id="btn1">CHATGPT</button>
          <button id="btn2">OPENAI</button>
          <button id="btn3">RLHF</button>
          <button id="btn4">InstructGPT</button>
        </div>
        <br />
      </div>
      <div className="homepage__kids__content">
        <div className="col">
          <img
            src={kidsteaching}
            style={{ height: "300px", width: "350px", borderRadius: "25px" }}
          />
        </div>
        <div className="col homepage__kids__content__text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
      </div>
    </div>
  );
};
