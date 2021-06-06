import React from "react";

function About(){

  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader" style={{color:"#1F2235"}}>About Project</h1>
          <p className="mainContent" style={{color:"#1F2235"}}>
              Synthesizes a visually artistic image by separating and combining the content of one image with the style
              of another image using convolutional neural networks (CNN)
          </p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">

            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              </div>
              <div className="about__info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div>
              <div className="info__contacts">
                <div className="row">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
