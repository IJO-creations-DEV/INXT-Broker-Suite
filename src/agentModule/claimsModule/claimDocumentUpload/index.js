import React from "react";
import "./index.scss";
import { Card } from "primereact/card";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import InputTextField from "../../component/inputText";
import DatepickerField from "../../component/datePicker";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ClaimDocumentUpload = () => {
  const { claimDocumentUploadData, loading } = useSelector(
    ({ claimDocumentUploadMainReducers }) => {
      return {
        loading: claimDocumentUploadMainReducers?.loading,
        claimDocumentUploadData: claimDocumentUploadMainReducers?.claimDocumentUploadData,

      };
    }
  );
  const cityData = [
    { label: claimDocumentUploadData.city, value: claimDocumentUploadData.city }
  ]
  const provinceData = [
    { label: claimDocumentUploadData.province, value: claimDocumentUploadData.province }
  ]
  const cuntryData = [
    { label: claimDocumentUploadData.country, value: claimDocumentUploadData.country }
  ]
  console.log(claimDocumentUploadData, "claimDocumentUploadData");
  const Navigate = useNavigate();

  const handleCommonAction = () => {
    Navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="claim__docupload__upload__container">
      <div className="claim__request__upload__main__title">Clients</div>
      <div
        className="claim__request__upload__back__btn mt-3 cursor-pointer"
        onClick={handleCommonAction}
      >
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4 border-round-3xl">
        <div className="claim__request__upload__title">Claim Request</div>

        <div class="grid m-0 ">
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Adjuster Name"
              value={claimDocumentUploadData.adjusterName}
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Claim Number"
              value={claimDocumentUploadData.claimNumber}
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField label="Date of Reported"
              value={
                new Date(claimDocumentUploadData.dateOfReported)
              }
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField label="Date of Loss"

              value={
                new Date(claimDocumentUploadData.dateOfLoss)
              }
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Place of Accident"
              value={claimDocumentUploadData.placeOfAccident}
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Driver’s name"
              value={claimDocumentUploadData.driversName}
            />
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="House No / Unit No / Street "
              value={claimDocumentUploadData.houseNumber}
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="Barangay / Subd"
              value={claimDocumentUploadData.barangay}
            />
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Country"
              value={claimDocumentUploadData.country}
              options={cuntryData}
              optionLabel={"label"}

            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Province"
              value={claimDocumentUploadData.province}
              options={provinceData}
              optionLabel={"label"}

            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="City"
              value={claimDocumentUploadData.city}
              options={cityData}
              optionLabel={"label"}

            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField label="ZIP Code"
              value={claimDocumentUploadData.zipCode}
            />
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

          <div className="uploaddoc__conatiner">
            <img
              src="https://i.ibb.co/0Qv0kzR/document.png"
              className="claimtitle__img__container"
            />
            <img
              src="https://i.ibb.co/0Qv0kzR/document.png"
              className="claimtitle__img__container"
            />
          </div>

          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handleCommonAction}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClaimDocumentUpload;
