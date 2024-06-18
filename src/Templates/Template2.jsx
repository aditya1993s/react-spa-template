import React from "react";
import "./Template.css";

function Template2({
  lightBg,
  lightText,
  headline,
  headline2,
  childComponent,
  childComponent2,
  containerHeader,
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
                <div className="about_card">
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline}
                  </h1>
                  {childComponent}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="about_card">
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline2}
                  </h1>
                  {childComponent2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template2;
