import React from "react";
import { Card } from "primereact/card";
import Linkedin from "../../Images/Linkedin.png";
import Github from "../../Images/Github.png";
import Twitter from "../../Images/Twitter.png";
import "./style.css";

function CardComponent({ cardDetail }) {


  return (
    <Card className="eachcardDetail">
      <img
        className="employeeImg"
        src={cardDetail.imagePortraitUrl}
        alt="EmpImg"
      ></img>
      <div className="details">
        <span className="empnameContainer">
          <span className="empName">{cardDetail.name}</span>
          <span>
            <a target="_blank" rel="noreferrer" href={cardDetail.linkedIn}>
              <img className="icons" src={Linkedin} alt="noImage"></img>
            </a>
            <a target="_blank" rel="noreferrer" href={cardDetail.gitHub}>
              <img className="icons" src={Github} alt="noImage"></img>
            </a>
            <a target="_blank" rel="noreferrer" href={cardDetail.twitter}>
              <img className="icons" src={Twitter} alt="noImage"></img>
            </a>
          </span>
        </span>
        <span className="empOffice">Office:{cardDetail.office}</span>
      </div>
    </Card>
  );
}

export default CardComponent;
