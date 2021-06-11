import React from "react";

function Home(){
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">

                <h1 style={{color:"#1F2235"}}>Pixour</h1>
                <p style={{color:"#1F2235"}}>A deep learning model based on neural style transfer</p>
                <div className="header__buttons">
                  <a href="https://colab.research.google.com/drive/1uN5gu2ZQhNA6KhRG2XRa31DnfYddsyh4?usp=sharing" className="btn btn-outline" style={{color:"#1F2235"}}>
                    Open With Colab
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src="images/bg1.jpg" style={{height:"600px",width:"700px",marginTop:"100px"}}className="col-12" alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
