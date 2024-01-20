import React, { useState } from "react";
import "../index.scss";
import { Card } from "primereact/card";
import DropdownField from "../../../component/DropdwonField";
import InputTextField from "../../../component/inputText";
import { RadioButton } from "primereact/radiobutton";
import DatepickerField from "../../../component/datePicker";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const LeadEditCrad = () => {
  const [ingredient, setIngredient] = useState();
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/agent/clientlisting");
  };

  const handlecancel = () => {
    navigate("/agent/clientlisting");
  };

  return (
    <div className="edit__card_overall_container mt-5">
      <Card title="Edit Client">
        <div className="category__container mt-4">
          <div className="category__text">Category :</div>
          <div className="category__id">Individual</div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="First Name*" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="Last Name" />
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="Preferred Name*" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Date of Birth" />
          </div>
        </div>

        <div className="subheadinglabel_txt mt-3">Select Gender</div>
        <div className="flex flex-wrap gap-3  mt-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === "Cheese"}
            />
            <label htmlFor="ingredient1" className="labeltxt_container">
              Male
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient2"
              name="pizza"
              value="Mushroom"
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === "Mushroom"}
            />
            <label htmlFor="ingredient2" className="labeltxt_container">
              Female
            </label>
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="Email ID" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="Contact Number" />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="House No / Unit No / Street " />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="Barangay / Subd" />
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <DropdownField label="Country" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <DropdownField label="Province" />
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <DropdownField label="City" />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField label="ZIP Code" />
          </div>
        </div>

        <div className="save_continue_conatiner">
          <Button
            label="Cancel"
            onClick={() => {
              handlecancel();
            }}
            text
            className="btn_lable_container"
          />
          <div className="btn_lable_save_container">
            <Button
              onClick={() => {
                handleclick();
              }}
              label="Update"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LeadEditCrad;
