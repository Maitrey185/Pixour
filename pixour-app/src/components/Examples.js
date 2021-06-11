import React from "react";

function Examples(){

  return (
    <div id="ex" className="examples">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Examples</h1>

          <div className="commonBorder"></div>

        </div>
        <div className="row">
        <div className="center22">
        <img src="images/stycon.jpg"/>
        </div>
        <div className="mainContent common3" style={{color:"#ffffff",fontSize:"20px"}}>
          Content And Style Image
        </div>
        </div>
        <br/>
        <br/>
        <div className="row">
        <div className="mainContent common3" style={{color:"#ffffff",fontSize:"20px"}}>
          Output Image
        </div>
        <div className="center22">
        <img src="images/fin.jpg"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
