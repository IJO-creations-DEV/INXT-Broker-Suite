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
import { getEndrosementViewData } from "../endorsementDetailedView/store/endrosementViewMiddleWare";

const UploadEndorsement = () => {
  const [imageURL, setimageURL] = useState();
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const fileUploadRef = useRef(null);
const dispatch=useDispatch()
  const handleCompleteAction = () => {
    dispatch(getEndrosementViewData(123))
    toastRef.current.showToast();
    setTimeout(() => {
      // navigate("/agent/viewendorsement");
      navigate(`/agent/endorsementdetailedview/${123}`);
    }, 2000);
  };

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
      <div className="grid mt-3">
        <div className="upload__endorsement__container__back__btn__container col-12 md:col-6 lg:col-6">
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
                value="123456"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Endorsement Number"
                value="123456"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Production"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Inception"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Issued Date"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Expiry"
                value="12/12/2023"
                disabled={true}
              />
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
                maxFileSize={2000000}
                uploadHandler={(e) => {
                  handleUppendImg(e.options.props.name, e.files[0], "the data");
                }}
              />
              <div className="icon_click_option">
                <SvgUpload />
              </div>
              <div className="upload__caption text-center">Upload</div>
              <div className="upload__caption text-center">
                Maximum 2 MB (PNG, JPEG and PDF Files Only)
              </div>
            </div>
          </div>

          {imageURL && (
            <div className="mt-4" onClick={handleCancelUplaoded}>
              <SvgUploadClose />
            </div>
          )}

          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-12 lg:col-12 back__complete__btn__container ">
              <div className="complete__btn__container">
                <Button
                  className="complete__btn"
                  onClick={() => {
                    handleCompleteAction();
                  }}
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
