import React, { useState, useEffect } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import InputTextField from "../../component/inputText";
import DropdownField from "../../component/DropdwonField";
import { Button } from "primereact/button";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import { FileUpload } from "primereact/fileupload";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";
import { useFormik } from "formik";
import {
  postinformationMiddleWare,
  patchinformationMiddleWare,
} from "./store/infoMiddleWare";
import { useDispatch, useSelector } from "react-redux";
import { MortgageOptions } from "../../endorsementModule/personalDetails/mock";

const initialValues = {
  MotorNumber: "8546791234",
  ChassisNumber: "8529637412",
  Mortgage: "",
  CertNumber: "",
  PlateNumber: "",
  MVFileNumber: "",
  AuthenCode: "",
  Aluminium: "",
  AirBag: "",
  TNVS: "",
  TruckType: "",
};

const CustomerInfo = ({ action }) => {
  const [imageURL, setimageURL] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const handleSubmit= (value) => {

  //   if (action === "edit") {
  //     const valueWithId = {
  //       ...value,
  //       id: postcustomerinfodata?.length + 1,
  //     };
  //     console.log("first", action);
  //     dispatch(patchinformationMiddleWare(valueWithId));
  //   } else {
  //     console.log("122", value);
  //     dispatch(postinformationMiddleWare(value));
  //     navigate("/agent/convertpolicy/uploadvehiclephotos");
  //   }
  // }
  const handleSubmit = (values) => {
    // if (!values.file) {
    //   alert("please select file")
    //   return;
    // }
    if (action === "edit" && postcustomerinfodata) {
      const valueWithId = {
        ...values,
        id: postcustomerinfodata.id,
      };
      dispatch(patchinformationMiddleWare(values));
      navigate("/agent/convertpolicy/uploadvehiclephotos");
    } else {
      dispatch(postinformationMiddleWare(values));
      navigate("/agent/convertpolicy/uploadvehiclephotos");
    }
  };

  const { postcustomerinfodata, loading } = useSelector(
    ({ CustomerInfoReducer }) => {
      return {
        loading: CustomerInfoReducer?.loading,
        postcustomerinfodata: CustomerInfoReducer?.postcustomerinfodata,
      };
    }
  );

  console.log("first21", postcustomerinfodata);

  const handleUppendImg = (name, src) => {
    setimageURL(src?.objectURL);
    console.log(name, src?.objectURL, "find handleUppendImg");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };
  const Mortgagedata = [
    { label: "FEDERAL LAND", value: "FEDERAL LAND" },
    {
      label: "METROPOLITAN BANK & TRUST CO.",
      value: "METROPOLITAN BANK & TRUST CO.",
    },
    { label: "OMNI BANK", value: "OMNI BANK" },
    { label: "PHILAM SAVINGS BANK", value: "PHILAM SAVINGS BANK" },
    {
      label: "BANCO DE ORO UNIBANK, INC.",
      value: "BANCO DE ORO UNIBANK, INC.",
    },
  ];
  const TNVSdata = [
    { label: "Yes", value: "AL" },
    { label: "No", value: "AZ" },
  ];

  const AirBag = [
    { label: "Yes", value: "AL" },
    { label: "No", value: "AZ" },
  ];
  const Aluminium = [
    { label: "Yes", value: "AL" },
    { label: "No", value: "AZ" },
  ];
  const TruckTypes = [
    { label: "Heavy duty", value: "AL" },
    { label: "Heavy Xl", value: "AZ" },
    //  { label: "duty", value: "AR" },
  ];

  // const customValidation = (values) => {
  //   const errors = {};

  //   if (!values.MotorNumber) {
  //     errors.MotorNumber = "This field Code is required";
  //   }
  //   if (!values.ChassisNumber) {
  //     errors.ChassisNumber = "This field is required";
  //   }
  //   if (!values.TruckType) {
  //     errors.TruckType = "This field is required";
  //   }
  //   if (!values.Mortgage) {
  //     errors.Mortgage = "This field is required";
  //   }
  //   if (!values.CertNumber) {
  //     errors.CertNumber = "This field is required";
  //   }
  //   if (!values.PlateNumber) {
  //     errors.PlateNumber = "This field is required";
  //   }
  //   if (!values.MVFileNumber) {
  //     errors.MVFileNumber = "This field is required";
  //   }
  //   if (!values.AuthenCode) {
  //     errors.AuthenCode = "This field is required";
  //   }
  //   if (!values.Aluminium) {
  //     errors.Aluminium = "This field is required";
  //   }
  //   if (!values.AirBag) {
  //     errors.AirBag = "This field is required";
  //   }
  //   if (!values.TNVS) {
  //     errors.TNVS = "This field is required";
  //   }
  //   if (!values.file) {
  //     errors.file = "This field is required";
  //   }
  //   return errors;
  // };

  //   useEffect(() => {
  //     console.log(action,'find sction call')
  //     if (action === "edit") {
  // console.log(postcustomerinfodata,'find postcustomerinfodata')
  //     setFormikValues(postcustomerinfodata);
  //     }
  //   },[action]);
  useEffect(() => {
    if (action === "edit" && postcustomerinfodata) {
      setFormikValues(postcustomerinfodata);
    }
  }, [action, postcustomerinfodata]);

  useEffect (()=>{
    if (!formik.values.Mortgage){
      setFormikValues("Mortgage",MortgageOptions[0].value)
    }
  })
  const setFormikValues = (data) => {
    console.log(data, "find data");
    // const IsoCode = getExchangeEdit?.ISOcode;
    const updatedValues = {
      MotorNumber: data?.MotorNumber,
      ChassisNumber: data?.ChassisNumber,
      Mortgage: data?.Mortgage,
      CertNumber: data?.CertNumber,
      PlateNumber: data?.PlateNumber,
      MVFileNumber: data?.MVFileNumber,
      AuthenCode: data?.AuthenCode,
      Aluminium: data?.Aluminium,
      AirBag: data?.AirBag,
      TNVS: data?.TNVS,
      TruckType: data?.TruckType,
    };

    formik.setValues({ ...formik.values, ...updatedValues });
    console.log("1211", updatedValues);
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validate: customValidation,
    onSubmit: handleSubmit,
  });

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
            <InputTextField label="Insured Name" value="Carson Darrin" />
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
                      formik.setFieldValue("file", e.files[0]);
                      handleUppendImg(e.options.props.name, e.files[0], "the data");
                    }}
                    // uploadHandler={(e) => {
                    //   formik.setFieldValue("file", e.files[0]);
                    //   handleUppendImg(
                    //     e.options.props.name,
                    //     e.files[0],
                    //     "the data"
                    //   );
                    // }}
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
              {formik.touched.file && formik.errors.file && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.file}
              </div>
            )}
          </div>
          <div class="col-12 mt-2">
            <InputTextField label="ID Card Number" />
            {/* {formik.touched.MotorNumber && formik.errors.MotorNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.MotorNumber}
              </div>
            )} */}
          </div>
        </div>
        <div className="customer__info__subtitle mt-2 mb-2">
          Insurance Vehicle Details
        </div>
        <div class="grid m-0">
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="Motor Number"
              value={formik.values.MotorNumber}
              onChange={formik.handleChange("MotorNumber")}
            />
            {formik.touched.MotorNumber && formik.errors.MotorNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.MotorNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="Chassis Number"
              value={formik.values.ChassisNumber}
              onChange={formik.handleChange("ChassisNumber*")} />
            {formik.touched.ChassisNumber && formik.errors.ChassisNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.ChassisNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Mortgage"
              options={Mortgagedata}
              optionLabel="label"
              value={formik.values.Mortgage}
              onChange={(e) =>
                formik.setFieldValue("Mortgage", e.value)
              }

            />
            {formik.touched.Mortgage && formik.errors.Mortgage && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.Mortgage}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="Cert Number"
              value={formik.values.CertNumber}
              onChange={formik.handleChange("CertNumber")} />
            {formik.touched.CertNumber && formik.errors.CertNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.CertNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="Plate Number"
              value={formik.values.PlateNumber}
              onChange={formik.handleChange("PlateNumber")} />
            {formik.touched.PlateNumber && formik.errors.PlateNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.PlateNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="MV File Number"
              value={formik.values.MVFileNumber}
              onChange={formik.handleChange("MVFileNumber")} />
            {formik.touched.MVFileNumber && formik.errors.MVFileNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.MVFileNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField label="Authen Code"
              value={formik.values.AuthenCode}
              onChange={formik.handleChange("AuthenCode")} />
            {formik.touched.AuthenCode && formik.errors.AuthenCode && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.AuthenCode}
              </div>
            )}
          </div>
         
         
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="Truck Type"
              options={TruckTypes}
              optionLabel="label"
              value={formik.values.TruckType}
              onChange={(e) =>
                formik.setFieldValue("TruckType", e.value)
              }

            />
            {formik.touched.TruckType && formik.errors.TruckType && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.TruckType}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Aluminium"
              options={Aluminium}
              optionLabel="label"
              value={formik.values.Aluminium}
              onChange={(e) =>
                formik.setFieldValue("Aluminium", e.value)
              }

            />
            {formik.touched.Aluminium && formik.errors.Aluminium && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.Aluminium}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-1">
            <DropdownField label="Air Bag"
              options={AirBag}
              optionLabel="label"
              value={formik.values.AirBag}
              onChange={(e) =>
                formik.setFieldValue("AirBag", e.value)
              }

            />
            {formik.touched.AirBag && formik.errors.AirBag && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.AirBag}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="TNVS"
              options={TNVSdata}
              optionLabel="label"
              value={formik.values.TNVS}
              onChange={(e) =>
                formik.setFieldValue("TNVS", e.value)
              }
              error={formik.touched.TNVS && formik.errors.TNVS}
            />
            {formik.touched.TNVS && formik.errors.TNVS && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.TNVS}
              </div>
            )}
          </div>
          <div className="col-12 mt-2">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handleBackNavigation}>
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button className="next__btn"
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                >Next</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomerInfo;
