import React, { useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { FileUpload } from "primereact/fileupload";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const UploadVehiclePhotos = () => {
  const [imageURLLeft, setimageURLLeft] = useState(null);
  const [imageURLRight, setimageURLRight] = useState(null);
  const [imageURLFront, setimageURLFront] = useState(null);
  const [imageURLRear, setimageURLRear] = useState(null);
  const [imageURLInterior, setimageURLInterior] = useState(null);

  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/coveragedetailedview");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  const handleUppendImg = (name, src, position) => {
    if (position === "left") {
      setimageURLLeft(src.objectURL);
    } else if (position === "right") {
      setimageURLRight(src.objectURL);
    } else if (position === "rear") {
      setimageURLRear(src.objectURL);
    } else if (position === "front") {
      setimageURLFront(src.objectURL);
    } else if (position === "interior") {
      setimageURLInterior(src.objectURL);
    }
    console.log(name, src.objectURL, "find handleUppendImg");
  };

  const formInitialValue = {
    fileOne: null,
    fileTwo: null,
    fileThree: null,
    fileFourth: null,
    fileFifth: null,
  };
 
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    // if (!values.file) {
    //   alert("please select file")
    //   return;
    // }

    navigate("/agent/coveragedetailedview");
  }
  const formik = useFormik({
    initialValues: formInitialValue,
    
    onSubmit: handleSubmit,
  });
  return (
    <div className="upload__vehicle__container">
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
          Upload Vehicle Photos
        </div>
        <div class="grid m-0">
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <div className="upload__label">Vehicle Left Side Photo</div>
            {!imageURLLeft ? (
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
                      formik.setFieldValue("fileOne", e.files[0]);
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "left",
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
                <img src={imageURLLeft} alt="Image" className="image__view" />
              </div>
            )}
              {formik.touched.fileOne && formik.errors.fileOne && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.fileOne}
                </div>
              )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <div className="upload__label">Vehicle Right Side Photo</div>
            {!imageURLRight ? (
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
                      formik.setFieldValue("fileTwo", e.files[0]);
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "right",
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
                <img src={imageURLRight} alt="Image" className="image__view" />
              </div>
            )}
              {formik.touched.fileTwo && formik.errors.fileTwo && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.fileTwo}
                </div>
              )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <div className="upload__label">Vehicle Front Side Photo</div>
            {!imageURLFront ? (
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
                      formik.setFieldValue("fileThree", e.files[0]);
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "front",
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
                <img src={imageURLFront} alt="Image" className="image__view" />
              </div>
            )}
              {formik.touched.fileThree && formik.errors.fileThree && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.fileThree}
                </div>
              )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <div className="upload__label">Vehicle Rear Side Photo</div>
            {!imageURLRear ? (
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
                      formik.setFieldValue("fileFourth", e.files[0]);
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "rear",
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
                <img src={imageURLRear} alt="Image" className="image__view" />
              </div>
            )}
              {formik.touched.fileFourth && formik.errors.fileFourth && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.fileFourth}
                </div>
              )}
          </div>
          <div class="col-12 mt-2">
            <div className="upload__label">
              Vehicle Interior Dashboard Photo
            </div>
            {!imageURLInterior ? (
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
                      formik.setFieldValue("fileFifth", e.files[0]);
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "interior",
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
                <img
                  src={imageURLInterior}
                  alt="Image"
                  className="image__view"
                />
              </div>
            )}
              {formik.touched.fileFifth && formik.errors.fileFifth && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.fileFifth}
                </div>
              )}
          </div>
        </div>
        <div class="grid m-0">
          <div className="col-12 mt-2">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handleBackNavigation}>
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={formik.handleSubmit}
                >
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

export default UploadVehiclePhotos;
