import React from "react";
import "./Program.css";
import programImage1 from "../../assets/program-1.png";
import programImage2 from "../../assets/program-2.png";
import programImage3 from "../../assets/program-3.png";
import program1 from "../../assets/program-icon-1.png";
import program2 from "../../assets/program-icon-2.png";
import program3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={programImage1} alt="Program" />
        <div className="caption">
          <img src={program1} alt="" srcset="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={programImage2} alt="Program" />
        <div className="caption">
          <img src={program2} alt="" srcset=""/>
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={programImage3} alt="Program" />
        <div className="caption">
          <img src={program3} alt="" srcset="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
