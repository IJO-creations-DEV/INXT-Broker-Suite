import React, { useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import InputTextField from "../../component/inputText";
import DropdownField from "../../component/DropdwonField";
import { Button } from "primereact/button";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { FileUpload } from "primereact/fileupload";
import { useNavigate } from "react-router-dom";

const CustomerInfo = () => {
  const [imageURL, setimageURL] = useState(null);
  const navigate = useNavigate();

  const handleclick = () => {
      navigate("/agent/convertpolicy/uploadvehiclephotos");
  }

  const handleUppendImg = (name, src) => {
    setimageURL(src.objectURL);
    console.log(name, src.objectURL, "find handleUppendImg");
  };

  return (
    <div className="customer__info__container">
      <div className="customer__info__main__title">Leads</div>
      <div className="customer__info__back__btn mt-3">
        <div className="customer__info__back__btn__title">
          <span className="cursor-poiter icon__container">
            <SvgLeftArrow />
          </span>
          Lead ID: 12345678
        </div>
        <div className="customer__info__quote__title">Quote ID : 12345678</div>
      </div>
      <Card className="mt-4">
        <div className="customer__info__title">Convert Policy </div>
        <div className="customer__info__subtitle mt-2 mb-2">
          Customer Information
        </div>
        <div class="grid m-0">
          <div class="col-12 mt-2">
            <InputTextField label="Insured Name*" />
          </div>
          <div class="col-12 mt-2">
            <div className="upload__label">ID Card</div>
            {!imageURL ? (
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
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "the data"
                      );
                    }}
                  />
                  <div className="icon_click_option">
                    <SvgImageUpload />
                  </div>
                  <div className="upload__caption text-center">Upload</div>
                  <div className="upload__caption text-center">
                    Maximum 2 MB (PNG or JPEG Files Only)
                  </div>
                </div>
              </div>
            ) : (
              <div className="upload__image__area mt-2">
                <img src={imageURL} alt="Image" className="image__view" />
              </div>
            )}
          </div>
          <div class="col-12 mt-2">
            <InputTextField label="ID Card Number" />
          </div>
        </div>
        <div className="customer__info__subtitle mt-2 mb-2">
          Insurance Vehicle Details
        </div>
        <div class="grid m-0">
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
            <DropdownField label="Truck Type" />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Aluminium" />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Air Bag" />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="TNVS" />
          </div>
          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn">Back</Button>
              </div>
              <div className="next__btn__container">
                <Button className="next__btn" onClick={()=>{handleclick()}}>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomerInfo;
