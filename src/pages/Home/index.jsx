import React from "react";
import HeroComponent from "../../components/HeroComponent";
import Template1 from "../../Templates/Template1";
import Template2 from "../../Templates/Template2";
import img1 from "../../assets/images/home001.svg";
import img2 from "../../assets/images/home002.svg";
import "./style.css";
import TeamComponent from "../../components/TeamComponent";
import TableComponent from "../../components/TableComponent";

const Home = () => {
  const comp1 = (
    <div>
      <div className="dividerLine"></div>
      <h2 className="aboutListHeading">OUR SERVICES</h2>
      <ul className="content1 aboutList">
        <li>Academics and Admissions</li>
        <li>Training and Development/Finishing School</li>
        <li>Career Guidance & Business Incubation</li>
      </ul>
    </div>
  );

  const comp3 = (
    <div>
      <ul className="aboutList3">
        <li>Domestic education consultation services</li>
        <li>Abroad education consultation services</li>
        <li>
          Direct admission to the reputed universities <br />
          and colleges in India
        </li>
        <li>
          Direct admission to the reputed universities <br />
          and colleges abroad
        </li>
        <li>Career guidance and job assistance</li>
        <li>Business incubation</li>
        <li>Training programs</li>
      </ul>
    </div>
  );

  const comp4 = (
    <div>
      <ul className="aboutList4">
        <li>Guarantee placement training and assistance</li>
        <li>Career mapping</li>
        <li>Higher education planning</li>
        <li>Industrial visit</li>
        <li>Finishing school</li>
        <li>Training and development</li>
        <li>Foreign exchange program</li>
        <li>Scholarship program</li>
      </ul>
    </div>
  );
  const comp5 = (
    <div>
      <ul className="aboutList5">
        <li>We are service hands to promote and provide quality education</li>
        <li>We are not commercial organisation but social warriors</li>
        <li>
          We provide SCHOLARSHIP from the college and organisation under
          provisions
        </li>
        <li>We promote scholarship from government</li>
        <li>We promote an entrepreneur inside the student and give support</li>
        <li>
          Organisation is nurtured by experts and we give them counselling
          whenever neccessary
        </li>
      </ul>
    </div>
  );

  const comp14 = (
    <div>
      <ul className="aboutList2 light">
        <li>
          To make sure the student gets quality education with the resources
          available to the student
        </li>
        <li>
          Quality education should never be expensive. The best care we can give
          to a child is EDUCARE
        </li>
        <li>Constructive growth for the student in multiple way</li>
        <li>
          100% placement assistance from day the student enrolls to beyond books
          organisation
        </li>
      </ul>
    </div>
  );

  const aboutObjOne = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    //   topLine: "Exclusive Access",
    headline:
      "WE ARE THE FACILITATORS TO FACILITATE  ANYTHING AND EVERYTHING RELATED TO EDUCATION IN INDIA & ABROAD",
    description: "",
    //   buttonLabel: "Get Started",
    imgStart: "",
    img: img1,
    alt: "Credit Card",
  };

  const aboutObjTwo = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    //   topLine: "Exclusive Access",
    headline: "OUR PROMISE",
    description: "",
    //   buttonLabel: "Get Started",
    imgStart: "start",
    img: img2,
    alt: "Credit Card",
  };

  const aboutObjThree = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    //   topLine: "Exclusive Access",
    headline: "OUR MISSIONS",
    description: "",
    //   buttonLabel: "Get Started",
    imgStart: "start",
    img: img2,
    alt: "Credit Card",
  };

  const aboutObjFour = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    //   topLine: "Exclusive Access",
    headline2: "OUR UNIQUE SELLING PROPOSITIONS",
    headline: "KEY HIGHLIGHTS",
    description: "",
    //   buttonLabel: "Get Started",
    imgStart: "start",
    img: img2,
    alt: "Credit Card",
  };

  return (
    <div>
      <HeroComponent />
      <Template1 {...aboutObjOne} childComponent={comp1} />
      <Template1 {...aboutObjThree} childComponent={comp3} />
      <Template2
        {...aboutObjFour}
        childComponent={comp5}
        childComponent2={comp4}
      />
      <Template1 {...aboutObjTwo} childComponent={comp14} />
      <div style={{ marginTop: "100px" }}></div>
      <TeamComponent />
      <div style={{ marginTop: "100px" }}></div>
      <TeamComponent />
      <TableComponent />
    </div>
  );
};

export default Home;
