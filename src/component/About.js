import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle1 = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Developer
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Welcome to TextUtils,</strong> the brainchild of Jaimin
                Pansuriya, a talented 17-year-old developer. Jaimin's passion
                for coding and his innovative mindset led him to create this
                powerful website. As the mastermind behind TextUtils, Jaimin has
                poured his skills and expertise into crafting a user-friendly
                platform for all your text-related needs. From formatting text
                to removing duplicates, TextUtils offers a range of features
                designed to streamline your tasks.
                <br />
                When Jaimin isn't immersed in coding, you'll likely find him
                pursuing his hobby of traveling. Exploring new places not only
                provides him with incredible experiences but also fuels his
                creativity, driving him to constantly enhance and improve
                TextUtils.
                <br /> Join Jaimin and the TextUtils community on this
                professional, or simply someone looking to make the most out of
                exciting journey of text manipulation. Whether you're a student,
                your text, TextUtils is here to simplify your tasks and elevate
                your productivity.
                <br />
                <strong>
                  Start unleashing the potential of your text with TextUtils
                  today!{" "}
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a powerful online platform for text manipulation,
                offering a diverse range of tools and features. With its
                user-friendly interface, it simplifies tasks like text
                formatting, analysis, and extraction.{" "}
                <strong>
                  Whether you need to remove duplicates, count words, or
                  transform text, TextUtils has you covered
                </strong>
                . Boost your productivity and efficiency with this intuitive
                platform. Experience the convenience and versatility of
                TextUtils today.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                About Terms & Conditions
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                While we strive to provide accurate and reliable text
                manipulation tools,{" "}
                <strong>
                  we cannot guarantee the absolute accuracy or suitability of
                  the results obtained through TextUtils
                </strong>
                , and{" "}
                <strong>
                  users are responsible for verifying and validating any output
                  generated from the website.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
