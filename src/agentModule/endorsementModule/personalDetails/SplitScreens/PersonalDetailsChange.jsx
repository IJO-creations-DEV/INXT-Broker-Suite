import React from "react";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
const PersonalDetailsChange = () => {
  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">
        Personal Details Change
      </div>
      <div class="grid m-0">
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="First Name*" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Last Name" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Preferred Name*" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Contact Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="House No / Unit No / Street " />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Barangay / Subd" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Country" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Province" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="City" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="ZIP Code" />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsChange;
