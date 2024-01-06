import { BreadCrumb } from "primereact/breadcrumb";
import React, { useRef, useState,useEffect } from "react";
import NavBar from "../../../../../components/NavBar";
import SvgDot from "../../../../../assets/icons/SvgDot";
import "./index.scss";
import InputField from "../../../../../components/InputField";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import SvgBack from "../../../../../assets/icons/SvgBack";
import CustomToast from "../../../../../components/Toast";
import { useNavigate,useParams} from "react-router-dom";
import DropDowns from "../../../../../components/DropDowns";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";


const AddRole = ({action}) => {
    const { id } = useParams()
    console.log(id,'find id')
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup,setVisiblePopup]=useState("")

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
          ? "Add Role"
          : action === "edit"
          ? "Edit Role"
          : "View Role"
      }`,
    },
  ];
  const item =[
    {name:"Accounts"},{name:"Accounts 1"},{name:"Accounts 2"}
  ]
  const item1 =[
    {name:"Receipts"},{name:"Payment voucher"},{name:"Pety cash"}
  ]
  const item2 =[
    {name:"Read"},{name:"Read 1"},{name:"Read 2"}
  ]
  const home = { label: "Master" };

  
  const initialValue = {
    roleCode: "",
    roleName: "",
    roleDescription: "",
    menuAccess: "",
    subMenuAccess: "",
    permissions: "",
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.roleCode) {
      errors.roleCode = "Role Code is required";
    }
    if (!values.roleName) {
      errors.roleName = "Role Name is required";
    }

    if (!values.menuAccess) {
      errors.menuAccess = "Menu Access is required";
    }
    if (!values.subMenuAccess) {
        errors.subMenuAccess = "SubMenu Access is required";
      }
      if (!values.permissions) {
        errors.permissions = "Permissions is required";
      }
  

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = () => {
    toastRef.current.showToast();
    
      setTimeout(() => {
        setVisiblePopup(false)
      }, 3000);
    }
  
    const setFormikValues = () => {
      const designationCode = "Des00123";
      const designationName = "HR";
      const designationDescription="Designation description";
      const departmentCode = "1";
      const level = "2";
      const reportingto = "John";
      const modifiedBy = "Johnson";
      const modifiedOn = "RC1234";
      const reportingtoLevel="2";
     
  
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
    <div className="grid add__role__container">
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
                ? "Add Role"
                : action === "edit"
                ? "Edit Role"
                : "View Role"}
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
              value={formik.values.roleCode}
              onChange={formik.handleChange("roleCode")}
              error={formik.errors.roleCode}
              label="Role Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.roleName}
              onChange={formik.handleChange("roleName")}
              error={formik.errors.roleName}
              label="Role Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>

          <div className="col-12 md:col-3 lg:col-6">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.roleDescription}
              onChange={formik.handleChange("roleDescription")}
              error={formik.errors.roleDescription}
              label="Role Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
          <DropDowns
           disabled={action === "view" ? true : false}
              value={formik.values.menuAccess}
              onChange={formik.handleChange("menuAccess")}
              error={formik.errors.menuAccess}
              className="dropdown__add__sub"
              label="Menu Access"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.subMenuAccess}
              onChange={formik.handleChange("subMenuAccess")}
              error={formik.errors.subMenuAccess}
              className="dropdown__add__sub"
              label="Sub Menu Access"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
             disabled={action === "view" ? true : false}
              value={formik.values.permissions}
              onChange={formik.handleChange("permissions")}
              error={formik.errors.permissions}
              className="dropdown__add__sub"
              label="Permissions"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item2}
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
      <CustomToast ref={toastRef} message="Role R1234 is added" />
    </div>
  );
};
export default AddRole;
