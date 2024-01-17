import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import { Image } from "primereact/image";
import AgentProfileEditCard from "./agentProfileEditCard";

const AgentEditProfile = () => {
  return (
    <div className="agent__edit__profile__container">
      <div className="back__btn__container">
        <SvgLeftArrow />
        <div className="back__btn__text">Profile</div>
      </div>
      <div className="agent__profile__detail__container mt-5">
        <Image src="https://i.ibb.co/7jx27CN/Mask-group-1.png" width="65px" height="65px" className="mt-2" />
        <div>
        <div className="agent__profile__name">
        John Visser
        </div>
        <div className="agent__profile__id">Agent ID : 12345678</div>
        </div>
      </div>
      <AgentProfileEditCard/>
    </div>
  )
}

export default AgentEditProfile
