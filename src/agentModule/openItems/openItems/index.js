import React, { useRef, useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import SvgpolicyExpire from "../../../assets/agentIcon/SvgpolicyExpire";
import SvgAdd from "../../../assets/agentIcon/SvgAdd";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import SvgpendingPayment from "../../../assets/agentIcon/SvgpendingPayment";
import { Button } from "primereact/button";
import SvgCalendertracker from "../../../assets/agentIcon/SvgCalendertracker";
import DropdownField from "../../component/DropdwonField";
import DatepickerField from "../../component/datePicker";
import InputTextField from "../../component/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import CustomToast from "../../../components/Toast";
import SvgArrow from "../../../assets/agentIcon/SvgArrow";
import { useNavigate } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const OpenItems = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const handleclick = () => {
    setVisible(true);
  };

  const handlesubmit = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleSeeMore = () => {
    navigate("/agent/openitems/upcomingevents");
  }

  return (
    <div className="open__item__container  mt-3">
      <CustomToast ref={toastRef} message="Event Added Successfully" />
      <div className="open__item__title">Open Items</div>
      <div className="open__item__back_container mt-4">
        <SvgLeftArrow />
        <label className="arrowlabel_txt">Home</label>
      </div>
      <div className="card__title mt-3">Notes</div>

      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <Card>
            <div class="grid">
              <div
                class="col-1 md:col-1 lg:col-1"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <SvgpolicyExpire />
              </div>
              <div
                class="col-5 md:col-5 lg:col-5"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <div className="sub__title">Policies Expiring soon</div>
              </div>
              <div class="col-6 md:col-6 lg:col-6">
                <div className="sub__number">15</div>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-12 md:col-6 lg:col-6">
          <Card>
            <div class="grid">
              <div
                class="col-1 md:col-1 lg:col-1"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <SvgpendingPayment />
              </div>
              <div
                class="col-5 md:col-5 lg:col-5"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="sub__title">Pending Payments</div>
              </div>
              <div class="col-6 md:col-6 lg:col-6">
                <div className="sub__number">09</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <div className="activity__tracker">Activity Tracker</div>
        </div>
        <div class="btn__container__new__event col-12 md:col-6 lg:col-6">
          <Button
            icon={<SvgAdd />}
            label="New Event"
            onClick={() => handleclick()}
          />
        </div>
      </div>

      <div class="grid mt-3">
        <div class="col-12 md:col-8 lg:col-8">
          <Card>

            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </Card>
        </div>
        <div class="col-12 md:col-4 lg:col-4">
          <Card className="upcoming__event__main___container">
            <div className="upcoming__event__container mt-3">
              Upcoming events
            </div>
            <div className="upcoming__event__container__sub__title mt-1">
              Based on the Activity Monitor
            </div>
            <div class="grid mt-3">
              <div class="col-2 md:col-2 lg:col-2">
                <div className="date__number__container">
                  <div className="month__text">JAN</div>
                  <div className="month__date">22</div>
                </div>
              </div>
              <div class="col-8 md:col-8 lg:col-8">
                <div className="date__text__container">
                  <div className="event__name">Meeting with Client</div>
                  <div className="event__time">17:00 to 18:00</div>
                </div>
              </div>
              <div class="date__svg__main__container col-2 md:col-2 lg:col-2">
                <div className="date__svg__container">
                  <SvgCalendertracker />
                </div>
              </div>
            </div>
            <div className="see__more__container mt-2" onClick={() => handleSeeMore()}>
              <div className="see__more__text">See More</div>
              <SvgArrow />
            </div>
          </Card>
        </div>
      </div>
      <Dialog
        header="New Event"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
      >
        <div class="grid mt-2">
          <div class="col-12 md:col-12 lg:col-12">
            <DropdownField label="Select Remainder Type" />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-12 lg:col-12">
            <InputTextField label="Search Client" />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-4 md:col-4 lg:col-4">
            <DatepickerField label="Date" />
          </div>
          <div class="col-4 md:col-4 lg:col-4">
            <DropdownField label="Time" />
          </div>
          <div class="col-4 md:col-4 lg:col-4">
            <DropdownField label="Time" />
          </div>
        </div>
        <div className="mt-2">
          <InputTextarea
            rows={5}
            cols={30}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoResize
            label="Notes"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="add__event__btn__container mt-2"
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button label="Add Event" onClick={() => handlesubmit()} />
        </div>
      </Dialog>
    </div>
  );
};

export default OpenItems;
