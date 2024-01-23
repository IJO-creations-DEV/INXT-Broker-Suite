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
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useDispatch, useSelector } from "react-redux";
import UpcommingEventCard from "./UpcommingEventCard";
import { useFormik } from "formik";
import moment from "moment";
import { postOpenItemsListMiddleware } from "../store/openItemsMiddleware";

const initialValues = {
  reminder: "",
  client: "",
  date: new Date(),
  startTime: "",
  endTime: "",
  notes: "",
};

const customValidation = (values) => {
  const errors = {};
  return errors;
};

const OpenItems = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (value) => {
    if (value) {
      dispatch(postOpenItemsListMiddleware(value));
      handleclickClose();
      console.log(value, "out Value");
    }
    // toastRef.current.showToast();
    // setTimeout(() => {
    //   setVisible(false);
    // }, 2000);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: handleSubmit,
  });

  const handleclickOpen = () => {
    setVisible(true);
  };
  const handleclickClose = () => {
    setVisible(false);
  };
  const timeSlots = [
    { label: "00:00", value: "00:00" },
    { label: "01:00", value: "01:00" },
    { label: "02:00", value: "02:00" },
    { label: "03:00", value: "03:00" },
    { label: "04:00", value: "04:00" },
    { label: "05:00", value: "05:00" },
    { label: "06:00", value: "06:00" },
    { label: "07:00", value: "07:00" },
    { label: "08:00", value: "08:00" },
    { label: "09:00", value: "09:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
    { label: "13:00", value: "13:00" },
    { label: "14:00", value: "14:00" },
    { label: "15:00", value: "15:00" },
    { label: "16:00", value: "16:00" },
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
    { label: "23:00", value: "23:00" },
  ];

  const { upcommingList } = useSelector(({ openitemsReducers }) => {
    return {
      upcommingList: openitemsReducers?.upcommingEventsList,
    };
  });
  // const handlesubmit = () => {
  //   toastRef.current.showToast();
  //   setTimeout(() => {
  //     setVisible(false);
  //   }, 2000);
  // };

  const handleSeeMore = () => {
    navigate("/agent/openitems/upcomingevents");
  };
  const handlePolicyExpiry = () => {
    navigate("/agent/openitems/expiringpolicy");
  };

  const handlePendingPayments = () => {
    navigate("/agent/payments");
  };
  const handleDateSelect = (info) => {
    console.log("Selected dates:", info.start, info.end);
  };
  return (
    <div className="open__item__container  mt-3">
      <CustomToast ref={toastRef} message="Event Added Successfully" />
      <div className="open__item__title">Open Items</div>
      {/* <div className="open__item__back_container mt-4">
        <SvgLeftArrow />
        <label className="arrowlabel_txt">Home</label>
      </div>
      <div className="card__title mt-3">Notes</div> */}

      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <Card>
            <div class="grid" onClick={handlePolicyExpiry}>
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
            <div class="grid" onClick={handlePendingPayments}>
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
            onClick={handleclickOpen}
          />
        </div>
      </div>

      <div class="grid mt-3">
        <div class="col-12 md:col-8 lg:col-8">
          <Card>
            <div className="custom__full__calendar">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                // select={handleDateSelect}
              />
            </div>
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
            <div>
              {upcommingList.length > 0 ? (
                <div>
                  {upcommingList?.map((singleData, i) => (
                    <UpcommingEventCard data={singleData} />
                  ))}
                  {upcommingList.length > 4 && (
                    <div
                      className="see__more__container mt-2"
                      onClick={() => handleSeeMore()}
                    >
                      <div className="see__more__text">See More</div>
                      <SvgArrow />
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: "center", paddingTop: "40px" }}>
                  No data available
                </div>
              )}
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
            <DropdownField
              value={formik.values.reminder}
              options={[
                {
                  label: "Reminder",
                  value: "reminder",
                },
                {
                  label: "Appointment",
                  value: "appointment",
                },
                {
                  label: "Follow Back",
                  value: "followBack",
                },
              ]}
              onChange={(e) => formik.setFieldValue("reminder", e.value)}
              label="Select Remainder Type"
            />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-12 lg:col-12">
            <InputTextField
              label="Search Client"
              value={formik?.values?.client}
              onChange={(e) => formik.setFieldValue("client", e.target.value)}
            />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-4 md:col-4 lg:col-4">
            <DatepickerField
              label="Date"
              value={formik?.values?.date}
              onChange={(e) => formik.setFieldValue("date", e.value)}
            />
          </div>
          <div class="col-4 md:col-4 lg:col-4">
            <DropdownField
              label="Time"
              options={timeSlots}
              value={formik?.values?.startTime}
              onChange={(e) => formik.setFieldValue("startTime", e.value)}
            />
          </div>
          <div class="col-4 md:col-4 lg:col-4">
            <DropdownField
              label="Time"
              options={timeSlots}
              value={formik?.values?.endTime}
              onChange={(e) => formik.setFieldValue("endTime", e.value)}
            />
          </div>
        </div>
        <div className="mt-2">
          <InputTextarea
            rows={5}
            cols={30}
            value={formik?.values?.notes}
            onChange={(e) => formik.setFieldValue("notes", e.target.value)}
            autoResize
            label="Notes"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="add__event__btn__container mt-2"
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button label="Add Event" onClick={formik.handleSubmit} />
        </div>
      </Dialog>
    </div>
  );
};

export default OpenItems;
