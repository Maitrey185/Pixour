import React from "react";

function About(){

  return (
    <div id="abt" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader" style={{color:"#1F2235"}}>About Project</h1>
          <p className="mainContent" style={{color:"#1F2235"}}>
              Synthesizes a visually artistic image by separating and combining the content of one image with the style
              of another image using convolutional neural networks (CNN)
          </p>
          <div className="commonBorder"></div>
        </div>

          <div className="common2">
            <div className="about__info">

              <div className="mainContent" style={{color:"#1F2235"}}>
                A Convolutional Neural Network is a Deep Learning algorithm which can take in an input image,
                assign importance to various aspects/objects in the image and be able to differentiate one from the other, and
                  thus can be used for feature extraction.
              </div>
              <br/>
              <div className="mainContent" style={{color:"#1F2235"}}>
                VGG-19 is a convolutional neural network that is 19 layers deep. You can load a pretrained version of
                the network trained on more than a million images from the ImageNet database.
                The pretrained network can classify images into 1000 object categories.
                 As a result, the network has learned rich feature representations for a wide range of images.
              </div>
              <br/>
              <div className="mainContent" style={{color:"#1F2235"}}>
                In this project, we have loaded VGG19, and fed in our input tensor to the model.
                This will allow us to extract the feature maps
                and subsequently the content and style representations of the content,
                style, and generated images.
              </div>
              <div className="info__contacts">
                <div className="row">


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
