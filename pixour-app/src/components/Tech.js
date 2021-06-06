import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import opencvIcon from '@iconify-icons/simple-icons/opencv';
import pythonIcon from '@iconify-icons/cib/python';
import tensorflowIcon from '@iconify-icons/cib/tensorflow';


function Tech(){


  const [state] = React.useState([
    {
      id: 1,
      icon: <Icon icon={tensorflowIcon} className="commonIcons"/>,
      heading: "Tensorflow",
      text:
        "TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets developers easily build and deploy ML powered applications.",
    },
    {
      id: 2,
      icon: <Icon icon={opencvIcon} className="commonIcons"/>,
      heading: "OpenCV",
      text:
        "OpenCV is a cross-platform library using which we can develop real-time computer vision applications. It mainly focuses on image processing, video capture and analysis including features like face detection and object detection.",
    },
    {
      id: 3,
      icon: <Icon icon={pythonIcon} className="commonIcons" />,
      heading: "Python",
      text:
        "Python is an interpreted high-level general-purpose programming language. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    },

  ]);


  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">Technology Used</h1>

            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
