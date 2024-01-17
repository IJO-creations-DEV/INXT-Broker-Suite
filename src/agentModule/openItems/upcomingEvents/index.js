import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import { Card } from "primereact/card";
import SvgDelete from "../../../assets/agentIcon/SvgDelete";

const Notification = () => {
  return (
    <div className="overall__upcoming__event__container">
      <div className="notificaition__container__titles">Upcoming Events</div>
      <div className="notificaition__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="notificaition__container__back__btn__title">
          Open Items
        </div>
      </div>
      <div className="grid mt-2">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="today__text">Today</div>
          <Card className="mt-3">
            <div className="grid">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Meeting with Client</div>
              </div>
            </div>

            <div className="delete__icon">
              <div className="notificaition__sub__title">
                Client Name : Carson Darrin
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgDelete />
              </div>
            </div>
            <div className="grid">
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Timing : 17:00 PM to 18:00 PM</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="grid">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Policy Expiring</div>
              </div>
            </div>

            <div className="delete__icon">
              <div className="notificaition__sub__title">
                Client Name : Carson Darrin
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgDelete />
              </div>
            </div>
            <div className="grid">
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Timing : 17:00 PM to 18:00 PM</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="grid">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Meeting with Client</div>
              </div>
            </div>

            <div className="delete__icon">
              <div className="notificaition__sub__title">
                Client Name : Carson Darrin
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgDelete />
              </div>
            </div>
            <div className="grid">
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Timing : 17:00 PM to 18:00 PM</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="grid">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Meeting with Client</div>
              </div>
            </div>

            <div className="delete__icon">
              <div className="notificaition__sub__title">
                Client Name : Carson Darrin
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgDelete />
              </div>
            </div>
            <div className="grid">
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Timing : 17:00 PM to 18:00 PM</div>
              </div>
            </div>
          </Card>
          <div className="yesterday__text mt-3">Yesterday</div>
          <Card>
            <div className="grid">
              <div className="notificaition__title col-12 md:col-6 lg:col-6">
                <div>Policy Expiring</div>
              </div>
            </div>

            <div className="delete__icon">
              <div className="notificaition__sub__title">
                Client Name : Client Name : Carson Darrin
              </div>
              <div className="notificaition__dots col-12 md:col-6 lg:col-6">
                <SvgDelete />
              </div>
            </div>
            <div className="grid">
              <div className="notificaition__title__sub col-12 md:col-6 lg:col-6">
                <div>Timing : 17:00 PM to 18:00 PM</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notification;
