import React, { useState, useRef } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import InputTextField from "../../component/inputText";
import DatepickerField from "../../component/datePicker";
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { useNavigate } from "react-router-dom";
import SvgUploadClose from "../../../assets/agentIcon/SvgUploadClose";
import customHistory from "../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { postAdjusterSubmission } from "./store/adjusterSubmissionMiddleWare";

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
  const handleBackNavigation = () => {
    customHistory.back();
  };
  const codeOptions = [
    { label: "India", value: "India" },
    { label: "America", value: "America" },
  ];
  const codeOptionsProvice = [
    { label: "Karnataka", value: "Karnataka" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Hydrabad", value: "Hydrabad" },
  ];
  const codeOptionsCity = [
    { label: "Davanagere", value: "Davanagere" },
    { label: "Channai", value: "Channai" },
    { label: "Banglore", value: "Banglore" },
  ];
  const formInitialValue = {
    adjusterName: "",
    claimNumber: "",
    dateOfReported: "",
    dateOfLoss: "",
    placeOfAccident: "",
    driversName: "",
    houseNumber: "",
    barangay: "",
    country: "",
    province: "",
    city: "",
    zipCode: "",
    name: "",
    contactNumber: "",
    plateNumber: "",
    unit: "",
    shop: "",
    insuranceCompanyName: "",
    file: null,
  };
  const customValidation = (values) => {
    const errors = {};
    if (!values.adjusterName) {
      errors.adjusterName = "This field is required";
    }
    if (!values.claimNumber) {
      errors.claimNumber = "This field is required";
    }
    if (!values.dateOfReported) {
      errors.dateOfReported = "This field is required";
    }
    if (!values.dateOfLoss) {
      errors.dateOfLoss = "This field is required";
    }
    if (!values.placeOfAccident) {
      errors.placeOfAccident = "This field is required";
    }
    if (!values.driversName) {
      errors.driversName = "This field is required";
    }
    if (!values.houseNumber) {
      errors.houseNumber = "This field is required";
    }
    if (!values.barangay) {
      errors.barangay = "This field is required";
    }

    if (!values.country) {
      errors.country = "This field is required";
    }

    if (!values.province) {
      errors.province = "This field is required";
    }

    if (!values.city) {
      errors.city = "This field is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "This field is required";
    }
    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "This field is required";
    }
    if (!values.plateNumber) {
      errors.plateNumber = "This field is required";
    }
    if (!values.unit) {
      errors.unit = "This field is required";
    }
    if (!values.shop) {
      errors.shop = "This field is required";
    }
    if (!values.insuranceCompanyName) {
      errors.insuranceCompanyName = "This field is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "This field is required";
    }
    if (!values.file) {
      errors.file = "Please select a file";
    }
    return errors;
  };
  const dispatch = useDispatch();
  // const toastRef = useRef(null);
  // dispatch(postEndromentMiddleWare(formik.values))
  // toastRef.current.showToast();
  // setTimeout(() => {
  //   navigate(`/agent/endorsementdetailedview/${123}`);
  // }, 2000);
  const handleSubmit = (values) => {
    if (!values.file) {
      alert("please select file");
      return;
    }
    dispatch(postAdjusterSubmission(formik.values));
    Navigate("/agent/claimrequest/settlementapproval");
  };
  const formik = useFormik({
    initialValues: formInitialValue,
    validate: customValidation,
    onSubmit: handleSubmit,
  });

  return (
    <div className="claim__request__upload__container">
      <div className="claim__request__upload__main__title">Clients</div>
      <div className="claim__request__upload__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4">
        <div className="claim__request__upload__title">Claim Request</div>

        <div class="grid mt-2">
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Adjuster Name"
              value={formik.values.adjusterName}
              onChange={formik.handleChange("adjusterName")}
            />
            {formik.touched.adjusterName && formik.errors.adjusterName && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.adjusterName}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Claim Number"
              value={formik.values.claimNumber}
              onChange={formik.handleChange("claimNumber")}
            />
            {formik.touched.claimNumber && formik.errors.claimNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.claimNumber}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField
              label="Date of Reported"
              // value={
              //   formik.values.dateOfReported
              //     ?
              //      new Date(formik.values.dateOfReported)
              //     : null
              // }
              // onChange={(e) => {
              //   formik.handleChange("dateOfReported")(
              //     e.value.toISOString().split("T")[0]
              //   );
              // }}
              value={new Date(formik?.values?.dateOfReported)}
              onChange={(e) =>
                formik.setFieldValue(
                  "dateOfReported",
                  e.value.toISOString().split("T")
                )
              }
              dateFormat="yy-mm-dd"
            />
            {formik.touched.dateOfReported && formik.errors.dateOfReported && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.dateOfReported}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <DatepickerField
              label="Date of Loss"
              // value={
              //   formik.values.dateOfLoss
              //     ? new Date(formik.values.dateOfLoss)
              //     : null
              // }
              // onChange={(e) => {
              //   formik.handleChange("dateOfLoss")(
              //     e.value.toISOString().split("T")[0]
              //   );
              // }}
              value={new Date(formik?.values?.dateOfLoss)}
              onChange={(e) =>
                formik.setFieldValue(
                  "dateOfLoss",
                  e.value.toISOString().split("T")
                )
              }
              dateFormat="yy-mm-dd"
            />
            {formik.touched.dateOfLoss && formik.errors.dateOfLoss && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.dateOfLoss}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Place of Accident"
              value={formik.values.placeOfAccident}
              onChange={formik.handleChange("placeOfAccident")}
            />
            {formik.touched.placeOfAccident &&
              formik.errors.placeOfAccident && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.placeOfAccident}
                </div>
              )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Driver’s name"
              value={formik.values.driversName}
              onChange={formik.handleChange("driversName")}
            />
            {formik.touched.driversName && formik.errors.driversName && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.driversName}
              </div>
            )}
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="House No / Unit No / Street "
              value={formik.values.houseNumber}
              onChange={formik.handleChange("houseNumber")}
            />
            {formik.touched.houseNumber && formik.errors.houseNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.houseNumber}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Barangay / Subd"
              value={formik.values.barangay}
              onChange={formik.handleChange("barangay")}
            />
            {formik.touched.barangay && formik.errors.barangay && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.barangay}
              </div>
            )}
          </div>

          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="Country"
              value={formik.values.country}
              onChange={(e) => formik.setFieldValue("country", e.target.value)}
              options={codeOptions}
              optionLabel="value"
            />
            {formik.touched.country && formik.errors.country && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.country}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="Province"
              value={formik.values.province}
              onChange={formik.handleChange("province")}
              options={codeOptionsProvice}
              optionLabel="value"
            />
            {formik.touched.province && formik.errors.province && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.province}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange("city")}
              options={codeOptionsCity}
              optionLabel="value"
            />
            {formik.touched.city && formik.errors.city && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.city}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="ZIP Code"
              value={formik.values.zipCode}
              onChange={formik.handleChange("zipCode")}
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.zipCode}
              </div>
            )}
          </div>
          <div className="col-12 claim__request__upload__subtitle mt-2 mb-2">
            Third Party Details (If Applicable)
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Contact Number"
              value={formik.values.contactNumber}
              onChange={formik.handleChange("contactNumber")}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.contactNumber}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Plate Number"
              value={formik.values.plateNumber}
              onChange={formik.handleChange("plateNumber")}
            />
            {formik.touched.plateNumber && formik.errors.plateNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.plateNumber}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Unit"
              value={formik.values.unit}
              onChange={formik.handleChange("unit")}
            />
            {formik.touched.unit && formik.errors.unit && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.unit}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Shop"
              value={formik.values.shop}
              onChange={formik.handleChange("shop")}
            />
            {formik.touched.shop && formik.errors.shop && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.shop}
              </div>
            )}
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <InputTextField
              label="Insurance Company Name*"
              value={formik.values.insuranceCompanyName}
              onChange={formik.handleChange("insuranceCompanyName")}
            />
            {formik.touched.insuranceCompanyName &&
              formik.errors.insuranceCompanyName && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.insuranceCompanyName}
                </div>
              )}
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
                // uploadHandler={(e) => {
                //   handleUppendImg(e.options.props.name, e.files[0]);
                // }}
                uploadHandler={(e) => {
                  formik.setFieldValue("file", e.files[0]);
                  handleUppendImg(e.options.props.name, e.files[0], "the data");
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
          {formik.touched.file && formik.errors.file && (
            <div style={{ fontSize: 12, color: "red" }} className="mt-3">
              {formik.errors.file}
            </div>
          )}
          {uploadImage && (
            <div class="col-12 mt-2 ">
              <span onClick={handleCancelUplaoded}>
                <SvgUploadClose />
              </span>
            </div>
          )}

          <div className="col-12 mt-2">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button onClick={handleBackNavigation} className="back__btn">
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button className="next__btn" onClick={formik.handleSubmit}>
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
