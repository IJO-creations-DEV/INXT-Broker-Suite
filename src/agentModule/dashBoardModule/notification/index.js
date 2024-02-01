import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import { Card } from "primereact/card";
import SvgGreenDots from "../../../assets/agentIcon/SvgGreenDots";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  const handleHomeNavigation = () => {
    navigate("/");
  };
  return (
    <div className="notificaition__container">
      <div className="notificaition__container__titles">Notification</div>
      <div
        className="notificaition__container__back__btn mt-3 cursor-pointer"
        onClick={handleHomeNavigation}
      >
        <SvgLeftArrow />
        <div className="notificaition__container__back__btn__title">Home</div>
      </div>
      <div className="grid mt-2">
        <div className="col-12 md:col-12 lg:col-12">
          <Card>
            <div className="grid mt-2">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Carson Darrin</div>
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgGreenDots />
              </div>
            </div>
            <div className="notificaition__sub__title">
              Policy Number: 123456
            </div>
            <div className="grid" style={{ marginTop: "0.1rem" }}>
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Payment completed</div>
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <div className="notificaition__title__sub__1">
                  Jan 06, 11:49 AM
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notification;
