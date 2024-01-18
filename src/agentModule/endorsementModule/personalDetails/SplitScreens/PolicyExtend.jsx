import React from "react";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import DatepickerField from "../../../component/datePicker";
import { InputTextarea } from "primereact/inputtextarea";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
const PolicyExtend = () => {
  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">Policy Extend</div>
      <div class="grid m-0">
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DatepickerField label="From" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DatepickerField label="To" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Number of Days" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Loss and Damage coverage"
            value="00.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Loss and Damage coverage Rate" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Loss and Damage coverage premium"
            value="00.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Acts Of Nature Rate" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Acts of Nature premium"
            value="00.00"
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Bodily Injury" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Bodily Injury Coverage Premium"
            value="00.00"
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Property Damage" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Property Damage Coverage Premium"
            value="00.00"
          />
        </div>
        <div class="col-12  mt-2">
          <CalculaitionTextInputs label="Title" value="00.00" />
        </div>
        <div class="col-12  mt-2">
          <InputTextarea
            placeholder="Declaration"
            rows={6}
            cols={30}
            className="text__area__container"
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyExtend;
