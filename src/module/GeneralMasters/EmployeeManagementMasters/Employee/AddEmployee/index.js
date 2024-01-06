import { BreadCrumb } from "primereact/breadcrumb";
import React, { useRef, useState,useEffect} from "react";
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

const AddEmployee = ({action}) => {
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
    { label: "Employee", url: "/master/generals/employeemanagement/employee" },
    ,
    {
      label: `${
        action === "add"
          ? "Add Employee"
          : action === "edit"
          ? "Edit Employee Details"
          : "View Employee Details"
      }`,
    },
  ];
  const home = { label: "Master" };

  const item = [
    { name: "Em0012" },
    { name: "Em0046" },
    { name: "Em0056" },
  ];
  const item1 = [{ name: "Level 1 Agent" }, { name: "Level 2 Agent" }, { name: "Level 3 Agent" }];
  const item2 = [{ name: "John Doe" }, { name: "Sudarshan" }, { name: "Uttam" }];
  const item3 = [{ name: "Branch0123" }, { name: "Branch0128" }, { name: "Branch0148" }];
  const item4 = [{ name: "Depart123" }, { name: "Depart163" }, { name: "Depart190" }];
  const item5 = [{ name: "Driving License" }, { name: "Aadhar" }, { name: "Pan" }];
  const item6 = [{ name: "Krishnagiri" }, { name: "Chennai" }, { name: "Salem" }];
  const item7 = [{ name: "Tamil nadu" }, { name: "Kerala" }, { name: "Banglore" }];
  const item8 = [{ name: "Philippines" }, { name: "India" }, { name: "Sri lanka" }];




  const initialValue = {
    employeeCode: "",
    firstName: "",
    middleName: "",
    lastName: "",
    employeeType: "",
    designation: "",
    reportingto: "",
    branchCode: "",
    departmentCode: "",
    idProofType: "",
    idNumber: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    state: "",
    country: "",
    modifiedBy: "",
    modifiedOn: "",
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.employeeCode) {
      errors.employeeCode = "Employee Code is required";
    }
    if (!values.firstName) {
      errors.firstName = "First name Code is required";
    }

    if (!values.middleName) {
      errors.middleName = "Middle name Name is required";
    }

    if (!values.employeeType) {
      errors.employeeType = "Employee type is required";
    }
    if (!values.designation) {
      errors.designation = "Designation is required";
    }
    if (!values.reportingto) {
      errors.reportingto = "Reporting is required";
    }
    if (!values.branchCode) {
      errors.branchCode = "Branch code is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "Department code is required";
    }
    if (!values.idProofType) {
      errors.idProofType = "Id proof type is required";
    }
    if (!values.idNumber) {
      errors.idNumber = "Id number is required";
    }
    if (!values.addressLine1) {
      errors.addressLine1 = "Address is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = () => {
    toastRef.current.showToast();

    setTimeout(() => {
      setVisiblePopup(false);
    }, 3000);
  };

  const setFormikValues = () => {
    const employeeCode = "RC1234";
    const firstName = "John";
    const middleName="Peterson";
    const lastName = "Watson";
    const employeeType = "Agent";
    const designation = "Level 2 Agent";
    const reportingto = "John Doe";
    const branchCode = "Branch0123";
    const departmentCode = "Depart123";
    const idProofType = "Driving License";
    const idNumber = "12345678";
    const addressLine1 = "Enter";
    const city = "Chennai";
    const state = "Tamil nadu";
    const country = "India";
    const modifiedBy = "John";
    const modifiedOn = "12/12/2023";

    const updatedValues = {
      employeeCode: `${employeeCode}`,
      firstName: `${firstName}`,
      middleName: `${middleName}`,
      lastName: `${lastName}`,
      employeeType: `${employeeType}`,
      designation: `${designation}`,
      reportingto: `${reportingto}`,
      branchCode: `${branchCode}`,
      departmentCode: `${departmentCode}`,
      idProofType: `${idProofType}`,
      addressLine1: `${addressLine1}`,
      city: `${city}`,
      state: `${state}`,
      country: `${country}`,
      idNumber: `${idNumber}`,
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
    <div className="grid add__employee_container">
      <div className="col-12">
        <NavBar />
      </div>
      <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
       
    
      </div>
      <div className="add__sub__title">
              {action === "add"
                ? "Add Employee"
                : action === "edit"
                ? "Edit Employee"
                : "View Employee"}
            </div>
      <div className="col-12 mb-2">
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="grid add__account__sub__container p-3">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.employeeCode}
              onChange={formik.handleChange("employeeCode")}
              error={formik.errors.employeeCode}
              label="Employee Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              error={formik.errors.firstName}
              label="First Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.middleName}
              onChange={formik.handleChange("middleName")}
              error={formik.errors.middleName}
              label="Middle Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              error={formik.errors.lastName}
              label="Last Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.employeeType}
              onChange={formik.handleChange("employeeType")}
              error={formik.errors.employeeType}
              className="dropdown__add__sub"
              label="Employee Type"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.designation}
              onChange={formik.handleChange("designation")}
              error={formik.errors.designation}
              className="dropdown__add__sub"
              label="Designation"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.reportingto}
              onChange={formik.handleChange("reportingto")}
              error={formik.errors.reportingto}
              className="dropdown__add__sub"
              label="Reporting to"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item2}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.branchCode}
              onChange={formik.handleChange("branchCode")}
              error={formik.errors.branchCode}
              className="dropdown__add__sub"
              label="Branch code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item3}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.departmentCode}
              onChange={formik.handleChange("departmentCode")}
              error={formik.errors.departmentCode}
              className="dropdown__add__sub"
              label="Department code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item4}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.idProofType}
              onChange={formik.handleChange("idProofType")}
              error={formik.errors.idProofType}
              className="dropdown__add__sub"
              label="ID Proof Type"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item5}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.idNumber}
              onChange={formik.handleChange("idNumber")}
              error={formik.errors.idNumber}
              label="ID Number"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.addressLine1}
              onChange={formik.handleChange("addressLine1")}
              error={formik.errors.addressLine1}
              label="Address line 1"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.addressLine2}
              onChange={formik.handleChange("addressLine2")}
              error={formik.errors.addressLine2}
              label="Address line 2"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.addressLine3}
              onChange={formik.handleChange("addressLine3")}
              error={formik.errors.addressLine3}
              label="Address line 3"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.city}
              onChange={formik.handleChange("city")}
              error={formik.errors.city}
              className="dropdown__add__sub"
              label="City"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item6}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.state}
              onChange={formik.handleChange("state")}
              error={formik.errors.state}
              className="dropdown__add__sub"
              label="State"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item7}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.country}
              onChange={formik.handleChange("country")}
              error={formik.errors.country}
              label="Country"
              className="dropdown__add__sub"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item8}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.modifiedBy}
              onChange={formik.handleChange("modifiedBy")}
              error={formik.errors.modifiedBy}
              label="Modified By"
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
        message="Employee Code CC1234 
        is added"
      />
    </div>
  );
};
export default AddEmployee;
