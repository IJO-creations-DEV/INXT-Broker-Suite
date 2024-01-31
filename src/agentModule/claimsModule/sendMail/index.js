import React, { useRef, useState } from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import InputTextField from "../../component/inputText";
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { InputTextarea } from "primereact/inputtextarea";
import "./index.scss";
import customHistory from "../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { postSendData } from "./store/sendMailMiddleWare";
import SvgUploadSuccess from "../../../assets/agentIcon/SvgUploadSuccess";
import SvgUploadClose from "../../../assets/agentIcon/SvgUploadClose";

const SendMail = () => {
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const navigate = useNavigate();
  const [pending, setPending] = useState("Pending");
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
    // const file = src.files[0];
    // console.log(file,"file");

    // if (file.size <= 200000) {
    // } else {
    //   console.log("File size exceeds 2 MB. Please select a smaller file.");
    // }
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };

  const formInitialValue = {
    mailSubject: "Claim Request for Policy Number",
    write: `Hello,
    I hope this email finds you well.
    I am writing regarding a claim request for a client [Ritchad] with policy number 001`,
    file: null,
  };
  // const customValidation = (values) => {
  //   const errors = {};

  //   if (!values.mailSubject) {
  //     errors.mailSubject = "This field is required";
  //   }
  //   if (!values.write) {
  //     errors.write = "This field is required";
  //   }

  //   if (!values.file) {
  //     errors.file = "Please select a file";
  //   }
  //   return errors;
  // };
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
   
    dispatch(postSendData(formik.values));
    navigate("/agent/claimrequest/requestapproval/122344");
  };
  const formik = useFormik({
    initialValues: formInitialValue,
    // validate: customValidation,
    onSubmit: handleSubmit,
  });
  // const handleSubmit = () => {
  //   navigate("/agent/claimrequest/requestapproval/122344");
  // };
  const handleBackNavigation = () => {
    customHistory.back();
  };
  return (
    <div className="claimrequest__details__container">
      <div className="claim__details__container__titles">Clients</div>
      <div className="claim__details__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__details__container__back__btn__title">
          Client Id: 12345678
        </div>
      </div>
      <Card>
        <div className="claim__details__container__titles">Claim Request</div>
        <div className="mt-4">
          <InputTextField
            label="Mail Subject"
            value={formik.values.mailSubject}
            onChange={formik.handleChange("mailSubject")}
          />
          {formik.touched.mailSubject && formik.errors.mailSubject && (
            <div style={{ fontSize: 12, color: "red" }} className="mt-3">
              {formik.errors.mailSubject}
            </div>
          )}
        </div>
        <div className="mt-4">
          {/* <InputTextField 
          style={{height:"200px"}}
            label="Write"
          /> */}
          <InputTextarea
            label="Write"
            rows={5}
            cols={30}
            placeholder="Write"
            className="claim__write__field"
            value={formik.values.write}
            onChange={formik.handleChange("write")}
          />
          {formik.touched.write && formik.errors.write && (
            <div style={{ fontSize: 12, color: "red" }} className="mt-3">
              {formik.errors.write}
            </div>
          )}
        </div>

        <div class="col-12 mt-4 p-0">
          <div className="claim__request__upload__subtitle  mb-2">
            Documents
          </div>
          {/* {!imageURL ? ( */}
          <div className="upload__card__container mt-2">
            <div className="file_icon_selector">
              <FileUpload
                url="./upload"
                auto
                customUpload
                mode="basic"
                name="demo"
                accept=".png,.jpg,.jpeg"
                // maxFileSize={2000000}
                uploadHandler={(e) => {
                  formik.setFieldValue("file", e.files[0]);
                  handleUppendImg(e.options.props.name, e.files[0], "the data");
                }}
                // disabled={pending === "Pending"}
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
          {/* ) : ( */}
          {/* <div className="upload__image__area mt-2">
                <img src={imageURL} alt="Image" className="image__view" />
              </div>
            ) */}
          {/* } */}
        </div>

        <div className="claimrequest__back__but">
          <Button
            onClick={handleBackNavigation}
            link
            className="claim__back__but"
          >
            Back
          </Button>
          <Button onClick={formik.handleSubmit} className="claim__snd__but">
            Send
          </Button>
        </div>
      </Card>
      {/* <ClaimDetailsCard /> */}
    </div>
  );
};

export default SendMail;
