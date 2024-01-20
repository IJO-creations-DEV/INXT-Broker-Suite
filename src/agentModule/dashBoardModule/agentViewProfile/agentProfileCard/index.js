import { Card } from "primereact/card";
import React from "react";
import InputTextField from "../../../component/inputText/index";
import { Button } from "primereact/button";

const AgentProfileCard = () => {
  return (
    <div>
      <Card className="mt-5">
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="First Name*" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Last Name" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Preferred Name*" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Date of Birth" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Gender" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Email ID" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Contact Number" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="House No / Unit No / Street" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Barangay / Subd" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Country" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Province" />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="City" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="ZIP Code" />
          </div>
        </div>
        <div className="profile__container__btn mt-2">
            <Button
              label="Edit Profile"
              className="profile__container__add__btn"
              aria-controls="popup_menu_right"
              aria-haspopup
            />
          </div>
      </Card>
    </div>
  );
};

export default AgentProfileCard;
