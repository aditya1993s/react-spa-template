import React, { Suspense, lazy } from "react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import "hero-slider/dist/index.css";

const HeroComponent = () => {
  return (
    <>
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Basic Setup</Title>
            <Subtitle>
              Check out the documentation for more advanced examples.
            </Subtitle>
          </Wrapper>
        </Overlay>

        <Slide
          shouldRenderMask
          label="Hero1"
          background={{
            backgroundImageSrc: hero1,
          }}
        />

        <Slide
          shouldRenderMask
          label="Hero2"
          background={{
            backgroundImageSrc: hero2,
          }}
        />

        <Slide
          shouldRenderMask
          label="Hero3"
          background={{
            backgroundImageSrc: hero3,
          }}
        />

        <Slide
          shouldRenderMask
          label="Hero4"
          background={{
            backgroundImageSrc: hero4,
          }}
        />

        {/* <MenuNav /> */}
      </HeroSlider>
    </>
  );
};

export default HeroComponent;
