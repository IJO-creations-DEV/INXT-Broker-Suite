import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";


const Notification = () => {
  const navigate = useNavigate();

  const handlesubmit = () =>{
    navigate("/agent/openitems/expiringpolicy");
  }

  return (
    <div className="overall__upcoming__event__container">
      <div className="notificaition__container__titles">Upcoming Events</div>
      <div className="notificaition__container__back__btn mt-4">
        <SvgLeftArrow />
        <div className="notificaition__container__back__btn__title">
          Open Items
        </div>
      </div>
      <div className="grid mt-2">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="today__text mt-2">Today</div>
          <Card className="mt-4" onClick={()=>{handlesubmit()}}>
            <div className="grid">
              <div className="col-12 md:col-6 lg:col-6">
                <div className="card__title">Meeting with Client</div>
                <div className="client__name mt-2">Client Name : Carson Darrin</div>
                <div className="client__name mt-2">Timing : 17:00 PM to 18:00 PM</div>
              </div>
              <div className="col-12 md:col-6 lg:col-6">
              </div>
              </div>
   
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notification;
