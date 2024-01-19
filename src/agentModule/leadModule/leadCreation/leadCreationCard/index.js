import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { Button } from "primereact/button";
import DatepickerField from "../../../component/datePicker";
import CustomToast from "../../../../components/Toast";
import { useNavigate } from "react-router-dom";

const LeadCreationCard = () => {
  const [ingredient, setIngredient] = useState("");
  const [show, setShow] = useState(false);
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const [buttonAction, setbuttonAction] = useState(null);

  const handleclick = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/createquote/policydetails");
    }, 2000);
  };

  const handleSaveLead = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/quotelisting");
    }, 2000);
  };

  return (
    <div className="card_overall_container mt-4">
      <CustomToast ref={toastRef} message="Lead Created Successfully" />
      <Card title="Create Lead">
        <div className="subheadinglabel_txt mt-3">Select Category</div>
        <div className="flex flex-wrap gap-3 mt-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
              onChange={(e) => {
                setIngredient(e.value);
                setShow(false);
              }}
              checked={ingredient === "Cheese"}
            />
            <label htmlFor="ingredient1" className="labeltxt_container">
              Individual
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="ingredient2"
              name="pizza"
              value="Mushroom"
              onChange={(e) => {
                setIngredient(e.value);
                setShow(true);
              }}
              checked={ingredient === "Mushroom"}
            />
            <label htmlFor="ingredient2" className="labeltxt_container">
              Company
            </label>
          </div>
        </div>
        {show === true ? (
          <div class="grid mt-2">
            <div class="col-12 md:col-6 lg:col-6">
              <InputTextField label="Company Name*" />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputTextField label="Tax Information Number*" />
            </div>
          </div>
        ) : null}

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
            {/* <InputTextField label="Date of Birth" /> */}
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
              // onChange={(e) => setIngredient(e.value)}
              // checked={ingredient === "Cheese"}
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
              // onChange={(e) => setIngredient(e.value)}
              // checked={ingredient === "Mushroom"}
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
            {/* <InputTextField label="First Name*"/> */}
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
            label="Save Lead"
            onClick={handleSaveLead}
            text
            className="btn_lable_container"
          />
          <div className="btn_lable_save_container">
            <Button
              onClick={() => {
                handleclick();
              }}
              label="Save & Continue"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LeadCreationCard;
