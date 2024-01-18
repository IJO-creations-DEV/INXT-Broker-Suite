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

const UploadPolicyCard = () => {
  const [imageURL, setimageURL] = useState();
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const handleclick = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/policydetailedview");
    }, 2000);
  };

  const handleUppendImg = (name, src) => {
    setimageURL(src.objectURL);
    console.log(name, src.objectURL, "find handleUppendImg");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };
  console.log(imageURL, "imageURL");

  return (
    <div className="upload__policy__card__container mt-4">
      <CustomToast ref={toastRef} message="Policy Converted Successfully" />
      <Card>
        <div className="upload__policy__card__container__title">
          Upload Policy
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Insurance Company" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Policy Number" />
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Production" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Inception" />
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Issued Date" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DatepickerField label="Expiry" />
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
                  handleclick();
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
