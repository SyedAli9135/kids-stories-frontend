import React from "react";
import "./styles/about.css";
import aboutimg from "../../assets/about-img.png";
export const About: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center about__container">
        <div className="about__container__img">
          <img src={aboutimg} style={{ height: "400px", width: "700px" }} />
          <h3 className="about__container__title">ABOUT US</h3>
        </div>
      </div>
      <div className="about__content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};
