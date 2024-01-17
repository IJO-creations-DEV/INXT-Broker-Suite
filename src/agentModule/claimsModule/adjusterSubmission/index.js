import React, { useState, useRef } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import SvgCountPlusIcon from "../../../assets/icons/SvgCountPlusIcon";
import SvgCountMinusIcon from "../../../assets/icons/SvgCountMinusIcon";
import CalculaitionTextInputs from "../../component/calculaitionTextInputs";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import InputTextField from "../../component/inputText";
import DatepickerField from "../../component/datePicker";
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import SvgImageShow from "../../../assets/agentIcon/SvgHelp";
import { useNavigate } from "react-router-dom";
import SvgUploadClose from "../../../assets/agentIcon/SvgUploadClose";

const AdjusterSubmission = () => {
  const Navigate = useNavigate();
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };
  const handlenext = () => {
    Navigate("/agent/claimrequest/settlementapproval");
  };
  return (
    <div className="claim__request__upload__container">
      <div className="claim__request__upload__main__title">Clients</div>
      <div className="claim__request__upload__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4 border-round-3xl">
        <div className="claim__request__upload__title">Claim Request</div>

        <div class="grid m-0 ">
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Adjuster Name" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Claim Number" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField label="Date of Reported" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField label="Date of Loss" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Place of Accident" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Driver’s name" />
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="House No / Unit No / Street " />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Barangay / Subd" />
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Country" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Province" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="City" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="ZIP Code" />
          </div>
          <div className="col-12 claim__request__upload__subtitle mt-2 mb-2">
            Third Party Details (If Applicable)
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Name" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Contact Number" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Plate Number" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Unit" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Shop" />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Insurance Company Name*" />
          </div>
          <div className="col-12 claim__request__upload__subtitle mt-2 mb-2">
            Proof of Documents
          </div>
          <div className="col-12">
            <div className="file_icon_selector">
              <FileUpload
                ref={fileUploadRef}
                url="./upload"
                auto
                customUpload
                mode="basic"
                name="demo"
                accept=".png,.jpg,.jpeg,.pdf"
                maxFileSize={2000000}
                uploadHandler={(e) => {
                  handleUppendImg(e.options.props.name, e.files[0]);
                }}
              />
              <div className="icon_click_option">
                <SvgImageUpload />
              </div>
              <div className="upload__caption text-center">Upload</div>
              <div className="upload__caption text-center">
                Maximum 2 MB (PNG, JPEG and PDF Files Only)
              </div>
            </div>
          </div>
          {uploadImage && (
            <div class="col-12 mt-2 ">
              <span onClick={handleCancelUplaoded}>
                <SvgUploadClose />
              </span>
            </div>
          )}
          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn">Back</Button>
              </div>
              <div className="next__btn__container">
                <Button className="next__btn" onClick={handlenext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdjusterSubmission;
