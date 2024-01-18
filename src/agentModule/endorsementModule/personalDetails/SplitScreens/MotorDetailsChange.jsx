import React from "react";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
const MotorDetailsChange = () => {
  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">
        Motor Details Change
      </div>
      <div class="grid m-0">
        <div class="col-12 mt-2 p-0">
          <div class="grid m-0">
            <div class="col-12 md:col-6 lg:col-6 xl:col-6">
              <DropdownField label="TNVS" disabled={true} />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Motor Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Chassis Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Mortgage" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Cert Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Plate Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="MV File Number" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Authen Code" />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Vehicle Brand" />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Model Year" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Model Variant" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Vehicle Model" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Vehicle Color" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Seating Capacity" />
        </div>
      </div>
    </div>
  );
};

export default MotorDetailsChange;
