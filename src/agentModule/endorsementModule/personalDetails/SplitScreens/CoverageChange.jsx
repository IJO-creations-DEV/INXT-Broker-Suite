import React from "react";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
const CoverageChange = () => {
  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">Coverage Change</div>
      <div class="grid m-0">
        <div class="col-12 mt-2">
          <InputTextField label="Loss and Damage coverage" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField label="Loss and Damage coverage Rate" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Loss and Damage coverage premium"
            value="1,170.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Acts of Nature Rate" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Acts of Nature premium"
            value="1,170.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Bodily Injury" />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Bodily Injury Coverage Premium"
            value="345.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="Property Damage" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Property Damage Coverage Premium"
            value="1,170.00"
          />
        </div>
        <div class="col-12 mt-2">
          <DropdownField label="Auto passenger personal Accident" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField label="APPA Total Coverage" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Acts of Nature premium"
            value="1,170.00"
          />
        </div>
        <div class="col-12 mt-2">
          <CalculaitionTextInputs
            label="Total Sum Insured"
            value="3,20,000.00"
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="NET premium" value="1,100.00" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="Value Added Tax" value="1,500.00" />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Others(Acc. premium)"
            value="1,300.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Documentary Stamp Tax"
            value="1,000.00"
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="Local Gov’t Tax" value="1,100.00" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="Discount" value="00.00" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="Others" value="1,100.00" />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs label="Gross premium" value="11,000.00" />
        </div>
      </div>
    </div>
  );
};

export default CoverageChange;
