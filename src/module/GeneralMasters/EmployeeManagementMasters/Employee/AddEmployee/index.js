import { BreadCrumb } from "primereact/breadcrumb";
import React, { useRef, useState, useEffect } from "react";
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
import countriesData from "./data";
import { useDispatch, useSelector } from "react-redux";
import { postAddEmployeeMiddleware } from "../store/employeeMiddleware";

const AddEmployee = ({ action }) => {
  const { employeeEditData, loading, total, employeeViewData } = useSelector(
    ({ employeeReducers }) => {
      return {
        loading: employeeReducers?.loading,
        employeeEditData: employeeReducers?.employeeEditData,
        employeeViewData: employeeReducers?.employeeViewData,
        total: employeeReducers,
      };

    }
  );
  console.log(employeeEditData.city, "employeeEditData");
  const { id } = useParams();
  console.log(id, "find id");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState("");

  // useEffect(() => {
  //   if (action === "edit" || action === "view") {
  //     setFormikValues();
  //   }
  // }, [action]);
  const items = [
    { label: "Employee Management" },
    { label: "Employee", url: "/master/generals/employeemanagement/employee" },
    ,
    {
      label: `${action === "add"
        ? "Add Employee"
        : action === "edit"
          ? "Edit Employee Details"
          : "View Employee Details"
        }`,
    },
  ];
  const home = { label: "Master" };


  const item = [
    {
      label: action === "add" ? "Em0012" : employeeViewData?.employeeType,
      label: action === "add" ? "Em0012" : employeeViewData?.employeeType
    },
    {
      label: action === "add" ? "Em0013" : employeeViewData?.employeeType,
      label: action === "add" ? "Em0013" : employeeViewData?.employeeType
    },
    {
      label: action === "add" ? "Em0014" : employeeViewData?.employeeType,
      label: action === "add" ? "Em0014" : employeeViewData?.employeeType
    },

  ];
  const item1 = [
    {
      label: action === "add" ? "Level 1 Agent" : employeeViewData?.designation,
      label: action === "add" ? "Level 1 Agent" : employeeViewData?.designation
    },
    {
      label: action === "add" ? "Level 2 Agent" : employeeViewData?.designation,
      label: action === "add" ? "Level 2 Agent" : employeeViewData?.designation
    },
    {
      label: action === "add" ? "Level 3 Agent" : employeeViewData?.designation,
      label: action === "add" ? "Level 3 Agent" : employeeViewData?.designation
    },

  ];
  const item2 = [
    { label: "John Doe" },
    { label: "Sudarshan" },
    { label: "Uttam" },
  ];
  const item3 = [
    { label: "Branch0123" },
    { label: "Branch0128" },
    { label: "Branch0148" },
  ];
  const item4 = [
    { label: "Depart123" },
    { label: "Depart163" },
    { label: "Depart190" },
  ];
  const item5 = [
    { label: "Driving License" },
    { label: "Aadhar" },
    { label: "Pan" },
  ];

  const City = countriesData.city.map(city => ({

    label: action === "add" ? city : employeeViewData.city,
    value: action === "add" ? city : employeeViewData.city,
  }));

  const State = countriesData.state.map(state => ({
    label: action === "add" ? state : employeeViewData.state,
    value: action === "add" ? state : employeeViewData.state,
  }));


  const Country = countriesData.countries.map(country => ({
    label: action === "add" ? country : employeeViewData.country,
    value: action === "add" ? country : employeeViewData.country,
  }));

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
  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (action === "add") {
      dispatch(postAddEmployeeMiddleware(formik.values))
    }
    toastRef.current.showToast();

    setTimeout(() => {
      setVisiblePopup(false);
      navigate("/master/generals/employeemanagement/employee")
    }, 3000);
  };

  const [cityDataOption, setCityDataOption] = useState([]);
  const [stateDataOption, setStateDataOption] = useState([]);
  const [countryDataOption, setCountryDataOption] = useState([]);

  const setFormikValues = () => {
    const cityData = employeeEditData?.city;
    const stateData = employeeEditData?.state;
    const countryData = employeeEditData?.country;

    const updatedValues = {
      employeeCode: employeeEditData?.employeeCode,
      firstName: employeeEditData?.firstName,
      middleName: employeeEditData?.middleName,
      lastName: employeeEditData?.lastName,
      employeeType: employeeEditData?.employeeType,
      designation: employeeEditData?.designation,
      reportingto: employeeEditData?.reportingto,
      branchCode: employeeEditData?.branchCode,
      departmentCode: employeeEditData?.departmentCode,
      idProofType: employeeEditData?.idProofType,
      idNumber: employeeEditData?.idNumber,
      addressLine1: employeeEditData?.addressLine1,
      addressLine2: employeeEditData?.addressLine2,
      addressLine3: employeeEditData?.addressLine3,
      City: cityData,
      State: stateData,
      Country: countryData,
      modifiedBy: employeeEditData?.modifiedBy,
      modifiedOn: employeeEditData?.modifiedOn,
    };

    if (cityData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setCityDataOption([{ label: cityData, value: cityData }]);
    }
    if (stateData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setStateDataOption([{ label: stateData, value: stateData }]);
    }
    if (countryData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setCountryDataOption([{ label: countryData, value: countryData }]);
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  useEffect(() => {
    setFormikValues();
  }, [employeeEditData]);
  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="grid add__employee_container">
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
            ? "Add Employee"
            : action === "edit"
              ? "Edit Employee"
              : "View Employee"}
        </div>
      </div>
      <div className="col-12 mb-2">
        <div className="mt-2">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 mt-3 ">
        <div className="grid add__account__sub__container p-3">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.employeeCode : formik.values.employeeCode}
              onChange={formik.handleChange("employeeCode")}
              // error={formik.errors.employeeCode}
              label="Employee Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.employeeCode &&
              formik.errors.employeeCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.employeeCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.firstName : formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              // error={formik.errors.firstName}
              label="First Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.firstName &&
              formik.errors.firstName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.firstName}
                </div>
              )}
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.middleName}
              onChange={formik.handleChange("middleName")}
              // error={formik.errors.middleName}
              label="Middle Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.middleName &&
              formik.errors.middleName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.middleName}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.lastName : formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              // error={formik.errors.lastName}
              label="Last Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.lastName &&
              formik.errors.lastName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.lastName}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.employeeType : formik.values.employeeType}
              onChange={formik.handleChange("employeeType")}
              // error={formik.errors.employeeType}
              className="dropdown__add__sub"
              label="Employee Type"
              classNames="label__sub__add"
              placeholder={"Select"}
              optionValue={"label"}
              optionLabel="label"
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.employeeType &&
              formik.errors.employeeType && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.employeeType}
                </div>
              )}
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.designation : formik.values.designation}
              onChange={formik.handleChange("designation")}
              // error={formik.errors.designation}
              className="dropdown__add__sub"
              label="Designation"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.designation &&
              formik.errors.designation && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.designation}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.reportingto : formik.values.reportingto}
              onChange={formik.handleChange("reportingto")}
              // error={formik.errors.reportingto}
              className="dropdown__add__sub"
              label="Reporting to"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item2}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.reportingto &&
              formik.errors.reportingto && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.reportingto}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.branchCode : formik.values.branchCode}
              onChange={formik.handleChange("branchCode")}
              // error={formik.errors.branchCode}
              className="dropdown__add__sub"
              label="Branch code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item3}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.branchCode &&
              formik.errors.branchCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.branchCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.departmentCode : formik.values.departmentCode}
              onChange={formik.handleChange("departmentCode")}
              // error={formik.errors.departmentCode}
              className="dropdown__add__sub"
              label="Department code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item4}
              optionValue={"label"}
              optionLabel="label"
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
              value={action === "view" ? employeeViewData?.idProofType : formik.values.idProofType}
              onChange={formik.handleChange("idProofType")}
              // error={formik.errors.idProofType}
              className="dropdown__add__sub"
              label="ID Proof Type"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item5}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.idProofType &&
              formik.errors.idProofType && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.idProofType}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.idNumber : formik.values.idNumber}
              onChange={formik.handleChange("idNumber")}
              // error={formik.errors.idNumber}
              label="ID Number"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.idNumber &&
              formik.errors.idNumber && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.idNumber}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.addressLine1 : formik.values.addressLine1}
              onChange={formik.handleChange("addressLine1")}
              // error={formik.errors.addressLine1}
              label="Address line 1"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.addressLine1 &&
              formik.errors.addressLine1 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.addressLine1}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.addressLine2 : formik.values.addressLine2}
              onChange={formik.handleChange("addressLine2")}
              // error={formik.errors.addressLine2}
              label="Address line 2"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.addressLine2 &&
              formik.errors.addressLine2 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.addressLine2}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.addressLine3 : formik.values.addressLine3}
              onChange={formik.handleChange("addressLine3")}
              // error={formik.errors.addressLine3}
              label="Address line 3"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
            {formik.touched.addressLine3 &&
              formik.errors.addressLine3 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.addressLine3}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.city : formik.values.city}
              onChange={formik.handleChange("city")}
              // error={formik.errors.city}
              className="dropdown__add__sub"
              label="City"
              classNames="label__sub__add"
              placeholder={"Select"}
              // options={City}
              options={
                action == "add"
                  ? City
                  : action == "edit"
                    ? cityDataOption
                    : City
              }
              optionLabel="label"
              optionValue={"label"}

              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.city &&
              formik.errors.city && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.city}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.state : formik.values.state}
              onChange={formik.handleChange("state")}
              // error={formik.errors.state}
              className="dropdown__add__sub"
              label="State"
              classNames="label__sub__add"
              placeholder={"Select"}

              options={
                action == "add"
                  ? State
                  : action == "edit"
                    ? stateDataOption
                    : State
              }
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.state &&
              formik.errors.state && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.state}
                </div>
              )}
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.country : formik.values.country}
              onChange={formik.handleChange("country")}
              label="Country"
              className="dropdown__add__sub"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={
                action == "add"
                  ? Country
                  : action == "edit"
                    ? countryDataOption
                    : Country
              }
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.country &&
              formik.errors.country && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.country}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "view" ? employeeViewData?.modifiedBy : formik.values.modifiedBy}
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
              value={action === "view" ? employeeViewData?.modifiedOn : formik.values.modifiedOn}
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
