import React from "react";
import "./Template.css";

function Template1({
  lightBg,
  lightText,
  headline,
  containerHeader,
  childComponent,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section lightBg" : "home__hero-section darkBg"
        }
      >
        {containerHeader ? (
          <h1 className={lightBg ? "founders_text dark" : "founders_text"}>
            {containerHeader}
          </h1>
        ) : (
          <div></div>
        )}
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                {childComponent}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template1;
