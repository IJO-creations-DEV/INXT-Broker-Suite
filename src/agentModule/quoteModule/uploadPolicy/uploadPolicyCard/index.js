import { Card } from "primereact/card";
import React, { useRef, useState } from "react";
import InputTextField from "../../../component/inputText";
import DatepickerField from "../../../component/datePicker";
import SvgUpload from "../../../../assets/agentIcon/SvgUpload";
import { FileUpload } from "primereact/fileupload";
import SvgUploadClose from "../../../../assets/agentIcon/SvgUploadClose";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../../../components/Toast";
import customHistory from "../../../../routes/customHistory";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postUploadPolicyMiddleWare } from "../store/uploadPolicyMiddleWare";
const initialValues = {
  PolicyNumber:"",
  InsuranceCompany:"",
  Production: new Date(),
  Inception: new Date(),
  IssuedDate: new Date(),
  Expiry:new Date()
};


const UploadPolicyCard = () => {
  const [imageURL, setimageURL] = useState();
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    toastRef.current.showToast();
    console.log("122",value)
     dispatch(postUploadPolicyMiddleWare(value));
    setTimeout(() => {
      navigate("/agent/policydetailedview");
    }, 2000);
  };
  // const minDate = new Date();
  // minDate.setDate(minDate.getDate() + 1);

  const handleUppendImg = (name, src) => {
    setimageURL(src.objectURL);
    console.log(name, src.objectURL, "find handleUppendImg");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };
  console.log(imageURL, "imageURL");

  const formik = useFormik({
    initialValues: initialValues,
    // validate: customValidation,
    onSubmit: handleSubmit,
  });


  return (
    <div className="upload__policy__card__container mt-4">
      <CustomToast ref={toastRef} message="Policy Converted Successfully" />
      <Card>
        <div className="upload__policy__card__container__title">
          Upload Policy
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Insurance Company" 
            value={formik.values.InsuranceCompany}
            onChange={formik.handleChange("InsuranceCompany")}/>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Policy Number" 
            value={formik.values.PolicyNumber}
            onChange={formik.handleChange("PolicyNumber")}/>
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Production"
            value={formik.values.Production}
            // minDate={minDate}
            onChange={(e) => { 
              formik.setFieldValue("Production", e.target.value);
            }}
            dateFormat="yy-mm-dd"
            // error={formik.errors.Production}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Inception" 
            value={formik.values.Inception}
            // minDate={minDate}
            onChange={(e) => { 
              formik.setFieldValue("Inception", e.target.value);
            }}
            dateFormat="yy-mm-dd"
            />
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Issued Date" 
            value={formik.values.IssuedDate}
            // minDate={minDate}
            onChange={(e) => { 
              formik.setFieldValue("IssuedDate", e.target.value);
            }}
            dateFormat="yy-mm-dd"/>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Expiry" 
            value={formik.values.Expiry}
            // minDate={minDate}
            onChange={(e) => { 
              formik.setFieldValue("Expiry", e.target.value);
            }}
            dateFormat="yy-mm-dd" />
          </div>
        </div>

        <div className="upload__policy__card__sub__title mt-2">
          Upload Policy
        </div>

        <div className="upload__card__container mt-2">
          <div className="file_icon_selector">
            <FileUpload
              url="./upload"
              auto
              customUpload
              mode="basic"
              name="demo"
              accept=".png,.jpg,.jpeg"
              maxFileSize={2000000}
              uploadHandler={(e) => {
                handleUppendImg(e.options.props.name, e.files[0], "the data");
              }}
            />
            <div className="icon_click_option">
              <SvgUpload />
            </div>
            <div className="upload__caption text-center">Upload</div>
            <div className="upload__caption text-center">Maximum 2 MB</div>
          </div>
        </div>
        {imageURL === undefined ? null : (
          <div className="mt-4">
            <SvgUploadClose />
          </div>
        )}

        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-12 lg:col-12 back__complete__btn__container ">
            <div className="back__btn__container">
              <Button className="back__btn" onClick={handleBackNavigation}>
                Back
              </Button>
            </div>
            <div className="complete__btn__container">
              <Button
                className="complete__btn"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Complete
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UploadPolicyCard;
