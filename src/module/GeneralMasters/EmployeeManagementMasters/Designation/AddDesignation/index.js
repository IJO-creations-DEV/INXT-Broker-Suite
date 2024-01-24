import { BreadCrumb } from "primereact/breadcrumb";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "../../../../../components/NavBar";
import SvgDot from "../../../../../assets/icons/SvgDot";
import "./index.scss";
import InputField from "../../../../../components/InputField";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import SvgBack from "../../../../../assets/icons/SvgBack";
import CustomToast from "../../../../../components/Toast";
import { useNavigate, useParams } from "react-router-dom";
import DropDowns from "../../../../../components/DropDowns";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";

const AddDesignation = ({ action }) => {
  const { id } = useParams();
  console.log(id, "find id");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState("");

  useEffect(() => {
    if (action === "edit" || action === "view") {
      setFormikValues();
    }
  }, [action]);

  const items = [
    { label: "Employee Management" },
    {
      label: "Designation",
      url: "/master/generals/employeemanagement/designation",
    },
    ,
    {
      label: `${
        action === "add"
          ? "Add Designation"
          : action === "edit"
          ? "Edit Designation"
          : "View Designation"
      }`,
    },
  ];
  const home = { label: "Master" };

  const item = [
    { name: "Depart0012" },
    { name: "Depart0018" },
    { name: "Depart0019" },
  ];
  const item1 = [{ name: "1" }, { name: "2" }, { name: "3" }];

  const initialValue = {
    designationCode: "",
    designationName: "",
    designationDescription: "",
    departmentCode: "",
    level: "",
    reportingtoLevel: "",
    modifiedBy: "",
    modifiedOn: "",
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.designationCode) {
      errors.designationCode = "Designation Code is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "Department Code is required";
    }

    if (!values.designationName) {
      errors.designationName = "Designation Name is required";
    }

    if (!values.level) {
      errors.level = "Level is required";
    }
    if (!values.reportingtoLevel) {
      errors.reportingtoLevel = "reporting to Level is required";
    }

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = () => {
    toastRef.current.showToast();

    setTimeout(() => {
      setVisiblePopup(false);
      navigate("/master/generals/employeemanagement/designation")
    }, 3000);
  
  };
  const setFormikValues = () => {
    const designationCode = "Des00123";
    const designationName = "HR";
    const designationDescription = "Designation description";
    const departmentCode = "1";
    const level = "2";
    const reportingto = "John";
    const modifiedBy = "Johnson";
    const modifiedOn = "RC1234";
    const reportingtoLevel = "2";

    const updatedValues = {
      designationCode: `${designationCode}`,
      designationName: `${designationName}`,
      designationDescription: `${designationDescription}`,
      departmentCode: `${departmentCode}`,
      level: `${level}`,
      reportingto: `${reportingto}`,
      reportingtoLevel: `${reportingtoLevel}`,
      modifiedBy: `${modifiedBy}`,
      modifiedOn: `${modifiedOn}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div>
    <div className="grid add__designation__container">
      <div className="add_backbut_container">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
      </div>
      <div className="add__sub__title">
        {action === "add"
          ? "Add Designation"
          : action === "edit"
          ? "Edit Designation"
          : "View Designation"}
      </div>
      </div>
      <div className="col-12 " >
        <div className="mt-2">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 mt-4 ">
        <div className="grid add__account__sub__container p-3 ml-1">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.designationCode}
              onChange={formik.handleChange("designationCode")}
              // error={formik.errors.designationCode}
              label="Designation Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
             {formik.touched.designationCode &&
              formik.errors.designationCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.designationCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.designationName}
              onChange={formik.handleChange("designationName")}
              // error={formik.errors.designationName}
              label="Designation Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
             {formik.touched.designationName &&
              formik.errors.designationName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.designationName}
                </div>
              )}
          </div>

          <div className="col-12 md:col-3 lg:col-6">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.designationDescription}
              onChange={formik.handleChange("designationDescription")}
              label="Designation Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
             {formik.touched.designationDescription &&
              formik.errors.designationDescription && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.designationDescription}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={formik.values.departmentCode}
              onChange={formik.handleChange("departmentCode")}
              // error={formik.errors.departmentCode}
              className="dropdown__add__sub"
              label="Department Code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             {formik.touched.departmentCode &&
              formik.errors.departmentCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.departmentCode}
                </div>
              )}
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={formik.values.level}
              onChange={formik.handleChange("level")}
              // error={formik.errors.level}
              className="dropdown__add__sub"
              label="Level"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             {formik.touched.level &&
              formik.errors.level && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.level}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={formik.values.reportingtoLevel}
              onChange={formik.handleChange("reportingtoLevel")}
              // error={formik.errors.reportingtoLevel}
              className="dropdown__add__sub"
              label="Reporting to Level"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             {formik.touched.reportingtoLevel &&
              formik.errors.reportingtoLevel && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.reportingtoLevel}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.modifiedBy}
              onChange={formik.handleChange("ModifiedBy")}
              error={formik.errors.modifiedBy}
              label="Modified by"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />

          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.modifiedOn}
              onChange={formik.handleChange("modifiedOn")}
              error={formik.errors.modifiedOn}
              label="Modified On"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
        </div>
      </div>
      <div className="col-12 btn__view__Add mt-2">
        {action === "add" && (
          <Button
            label="Save"
            className="save__add__btn"
            onClick={() => {
              formik.handleSubmit();
            }}
            disabled={!formik.isValid}
          />
        )}
        {action === "edit" && (
          <Button
            className="save__add__btn"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        )}
      </div>
      <CustomToast
        ref={toastRef}
        message="Designation Code CC1234 
is added"
      />
    </div>
    </div>
  );
};
export default AddDesignation;
