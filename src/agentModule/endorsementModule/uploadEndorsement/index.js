import React, { useRef, useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import SvgUpload from "../../../assets/agentIcon/SvgUpload";
import { FileUpload } from "primereact/fileupload";
import SvgUploadClose from "../../../assets/agentIcon/SvgUploadClose";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../../components/Toast";
import InputTextField from "../../component/inputText";
import DatepickerField from "../../component/datePicker";
import SvgBlueArrow from "../../../assets/agentIcon/SvgBlueArrow";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { postEndromentMiddleWare } from "./store/uploadEndrosementMiddleWare";

const UploadEndorsement = () => {
  const [imageURL, setimageURL] = useState();
  const toastRef = useRef(null);

  const navigate = useNavigate();
  const fileUploadRef = useRef(null);

  const initialValues = {
    policyNumber: "001",
    endrosementNumber: "013",
    production: "20/10/2023",
    inception: "25/01/2024",
    issuedDate: "29/01/2024",
    expiry: "01/02/2024",
    file: null
  }

  const customValidation = (values) => {
    const errors = {};
    if (!values.policyNumber) {
      errors.policyNumber = "This field is required";
    }
    if (!values.endrosementNumber) {
      errors.endrosementNumber = "This field is required";
    }
    if (!values.production) {
      errors.production = "This field is required";
    }
    if (!values.inception) {
      errors.inception = "This field is required";
    }
    if (!values.issuedDate) {
      errors.issuedDate = "This field is required";
    }
    if (!values.expiry) {
      errors.expiry = "This field is required";
    }
    if (!values.file) {
      errors.file = "Please select a file";
    }
    return errors;
  };
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    if (!values.file) {
      alert("please select file")
      return;
    }
    dispatch(postEndromentMiddleWare(formik.values))
    toastRef.current.showToast();
    setTimeout(() => {
      navigate(`/agent/endorsementdetailedview/${123}`);
    }, 2000);
  }
  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: handleSubmit,
  });


  const handleUppendImg = (name, src) => {
    setimageURL(src.objectURL);
    console.log(name, src.objectURL, "find handleUppendImg");
  };
  const handleCancelUplaoded = () => {
    setimageURL(null);
    fileUploadRef.current.clear();
  };

  console.log(imageURL, "imageURL");
  return (
    <div className="upload__endorsement__container">
      <div className="upload__endorsement__container__title">Clients</div>
      <div className="mt-3">
        <div className="upload__endorsement__container__back__btn__container">
          <SvgLeftArrow />
          <div className="upload__endorsement__container__back__btn__title">
            Client ID :123456
          </div>
        </div>
      </div>
      <div className="upload__endorsement__card__container mt-4">
        <CustomToast ref={toastRef} message="Endorsement Completed" />
        <Card className="card__container">
          <div className="upload__endorsement__card__container__title">
            Upload Endorsement
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Policy Number"
                value={formik.values.policyNumber}
                onChange={formik.handleChange('policyNumber')}
              />
              {formik.touched.policyNumber && formik.errors.policyNumber && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.policyNumber}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Endorsement Number"
                value={formik.values.endrosementNumber}
                onChange={formik.handleChange('endrosementNumber')}
              />
              {formik.touched.endrosementNumber && formik.errors.endrosementNumber && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.endrosementNumber}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">

              <DatepickerField
                label="Production"
                // value={
                //   formik.values.production
                //     ? new Date(formik.values.production)
                //     : null
                // }
                // onChange={(e) => {
                //   formik.handleChange("production")(
                //     e.value.toISOString().split("T")[0]
                //   );
                // }}
                value={formik.values.production}
              
                onChange={(e) => {
                  formik.setFieldValue("production", e.target.value);
                }}
                dateFormat="yy-mm-dd"
              />
              {formik.touched.production && formik.errors.production && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.production}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              {/* <InputTextField
                label="Inception"
                value="12/12/2023"
                disabled={true}
              /> */}
              <DatepickerField
                label="Inception"
                value={formik.values.inception}
              
                onChange={(e) => {
                  formik.setFieldValue("inception", e.target.value);
                }}

                dateFormat="yy-mm-dd"
              />
              {formik.touched.inception && formik.errors.inception && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.inception}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              {/* <InputTextField
                label="Issued Date"
                value="12/12/2023"
                disabled={true}
              /> */}
              <DatepickerField
                label="Issued Date"
                value={formik.values.issuedDate}
              
                onChange={(e) => {
                  formik.setFieldValue("issuedDate", e.target.value);
                }}

                dateFormat="yy-mm-dd"
              />
              {formik.touched.issuedDate && formik.errors.issuedDate && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.issuedDate}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              {/* <InputTextField
                label="Expiry"
                value="12/12/2023"
                disabled={true}
              /> */}
              <DatepickerField
                label="Expiry"
                value={formik.values.expiry}
              
                onChange={(e) => {
                  formik.setFieldValue("expiry", e.target.value);
                }}
                // value={
                //   formik.values.expiry
                //     ? new Date(formik.values.expiry)
                //     : null
                // }
                // onChange={(e) => {
                //   formik.handleChange("expiry")(
                //     e.value.toISOString().split("T")[0]
                //   );
                // }}

                dateFormat="yy-mm-dd"
              />
              {formik.touched.expiry && formik.errors.expiry && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.expiry}
                </div>
              )}
            </div>
          </div>

          <div className="upload__endorsement__card__sub__title mt-2 mb-2">
            Document
          </div>

          <div className="upload__card__container mt-2">
            <div className="file_icon_selector">
              <FileUpload
                ref={fileUploadRef}
                url="./upload"
                auto
                customUpload
                mode="basic"
                name="demo"
                accept=".png,.jpg,.jpeg"
               
                // uploadHandler={(e) => {
                //   handleUppendImg(e.options.props.name, e.files[0], "the data");
                // }}
                uploadHandler={(e) => {
                  formik.setFieldValue("file", e.files[0]);
                  handleUppendImg(e.options.props.name, e.files[0], "the data");
                }}
              />
              <div className="icon_click_option">
                <SvgUpload />
              </div>
              <div className="upload__caption text-center">Upload</div>
              <div className="upload__caption text-center">
              (PNG, JPEG and PDF Files Only)
              </div>
            </div>
          </div>
          {formik.touched.file && formik.errors.file && (
            <div style={{ fontSize: 12, color: "red" }} className="mt-3">
              {formik.errors.file}
            </div>
          )}

          {imageURL && (
            <div className="mt-4" onClick={handleCancelUplaoded}>
              <SvgUploadClose />
            </div>
          )}

          <div className="grid m-0 mt-4">
            <div className="col-12 md:col-12 lg:col-12 p-0 back__complete__btn__container ">
              <div className="complete__btn__container">
                <Button
                  className="complete__btn"
                  onClick={formik.handleSubmit}
                // onClick={() => {
                //   handleCompleteAction();
                // }}
                >
                  Complete
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UploadEndorsement;
