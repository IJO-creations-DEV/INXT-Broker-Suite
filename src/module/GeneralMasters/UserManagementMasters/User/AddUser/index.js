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
import { InputText } from "primereact/inputtext";
import EditUser from "../EditUser"

const AddUser = ({action}) => {
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
    { label: "User Management" },
    {
      label: `${
        action === "add"
          ? "Add User"
          : action === "edit"
          ? "Edit User"
          : "View User"
      }`,
    },
  ];
  const home = { label: "Master" };
  const item = [{ name: "Em00123" }, { name: "Em00167" }, { name: "Em00673" }];

  const initialValue = {
    userName: "",
    employeeCode: "",
    email: "",
    phoneNumber: "",
    assignedRole: "",
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.userName) {
      errors.userName = "User name is required";
    }
    if (!values.employeeCode) {
      errors.employeeCode = "Employee code is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number required";
    }
    if (!values.assignedRole) {
      errors.assignedRole = "Assigned role is required";
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
    const userName = "John";
    const employeeCode = "Em00123";
    const email="Em00123";
    const phoneNumber = "9874563210";
    const assignedRole = "Level 2 Agent";
   
    const modifiedBy = "Johnson";
    const modifiedOn = "RC1234";
   
   

    const updatedValues = {
      userName: `${userName}`,
      employeeCode: `${employeeCode}`,
      email: `${email}`,
      phoneNumber: `${phoneNumber}`,
      assignedRole: `${assignedRole}`,
      
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
    <div className="grid add__user__container">
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
                ? "Add User"
                : action === "edit"
                ? "Edit User"
                : "View User"}
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
              value={formik.values.userName}
              onChange={formik.handleChange("userName")}
              error={formik.errors.userName}
              label="Username"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.employeeCode}
              onChange={formik.handleChange("employeeCode")}
              error={formik.errors.employeeCode}
              className="dropdown__add__sub"
              label="Employee code "
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              error={formik.errors.email}
              label="Email"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Phone Number</label>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
               disabled={action === "view" ? true : false}
                placeholder="Enter"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange("phoneNumber")}
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div style={{ fontSize: 12, color: "red" }}></div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.assignedRole}
              onChange={formik.handleChange("assignedRole")}
              error={formik.errors.assignedRole}
              className="dropdown__add__sub"
              label="Assigned Role"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <div style={{width:"100%"}}>

      <EditUser/>
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
      <CustomToast ref={toastRef} message="Access given successfully" />
    </div>
  );
};
export default AddUser;
