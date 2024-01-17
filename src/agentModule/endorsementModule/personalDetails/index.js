import React, { useRef } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import InputTextField from "../../component/inputText";
import DropdownField from "../../component/DropdwonField";
import { Button } from "primereact/button";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { FileUpload } from "primereact/fileupload";
import { useNavigate } from "react-router-dom";
import CalculaitionTextInputs from "../../component/calculaitionTextInputs";
import DatepickerField from "../../component/datePicker";
import { InputTextarea } from "primereact/inputtextarea";
import CustomToast from "../../../components/Toast";
const PersonalDetails = () => {
  const navigate = useNavigate();
  const toastRef = useRef(null);

  const handleclick = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/uploadendorsement");
    }, 2000);
  };

  return (
    <div className="endorsement__personal__detail__change__container">
      <CustomToast ref={toastRef} message="Endorsement Created" />
      <div className="customer__info__main__title">Clients</div>
      <div className="customer__info__back__btn mt-3">
        <div className="customer__info__back__btn__title">
          <span className="cursor-poiter icon__container">
            <SvgLeftArrow />
          </span>
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4">
        <div className="customer__info__title">Endorsement Request</div>
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
        <div className="customer__info__subtitle mt-2 mb-2">
          Coverage Change
        </div>
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
          
          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={() => {
                    handleclick();
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalDetails;
