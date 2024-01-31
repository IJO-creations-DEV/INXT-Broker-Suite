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
import { Card } from "primereact/card";
import { useDispatch, useSelector } from "react-redux";
import { patchRoleEditMiddleware, postAddRoleMiddleware } from "../store/roleMiddleware";

const AddRole = ({ action }) => {
  const { loading, roleViewData, roleEditData } = useSelector(({ roleMainReducers }) => {
    return {
      loading: roleMainReducers?.loading,
      roleViewData: roleMainReducers?.roleViewData,
      roleEditData: roleMainReducers?.roleEditData,
    };
  });
  const { id } = useParams();
  console.log(id, action, "--find id");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState("");


  const items = [
    { label: "User Management" },
    {
      label: `${action === "add"
        ? "Add Role"
        : action === "edit"
          ? "Edit Role"
          : "View Role"
        }`,
    },
  ];

  const item = [{
    label: action === "add" ? "Accounts" : roleViewData?.menuAccess,
    value: action === "add" ? "Accounts" : roleViewData?.menuAccess
  }]
  const item1 = [{
    label: action === "add" ? "Receipts" : roleViewData?.subMenuAccess,
    value: action === "add" ? "Accounts" : roleViewData?.subMenuAccess
  }]
  const item2 = [{
    label: action === "add" ? "Read" : roleViewData?.permissions,
    value: action === "add" ? "Accounts" : roleViewData?.permissions
  }]
  const home = { label: "Master" };

  const initialValue = {
    roleCode: "",
    roleName: "",
    roleDescription: "",
    menuAccess: "",
    subMenuAccess: "",
    permissions: "",
    modifiedBy: "",
    modifiedOn: "",
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
  const dispatch = useDispatch()
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = () => {
    if (action === "add") {
      dispatch(postAddRoleMiddleware(formik.values))
      toastRef.current.showToast();

      setTimeout(() => {
        navigate("/master/generals/usermanagement/role")
        setVisiblePopup(false);
      }, 3000);
    }
    if (action === "edit") {
      dispatch(patchRoleEditMiddleware(formik.values))
      toastRef.current.showToast();

      setTimeout(() => {
        navigate("/master/generals/usermanagement/role")
        setVisiblePopup(false);
      }, 3000);
    }

  };

  const setFormikValues = () => {
    const updatedValues = {
      id: roleEditData?.id,
      roleCode: roleEditData?.roleCode,
      roleName: roleEditData?.roleName,
      roleDescription: roleEditData?.roleDescription,
      menuAccess: roleEditData?.menuAccess,
      subMenuAccess: roleEditData?.subMenuAccess,
      permissions: roleEditData?.permissions,
      modifiedBy: roleEditData?.modifiedBy,
      modifiedOn: roleEditData?.modifiedOn,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  useEffect(() => {

    setFormikValues();

  }, [roleEditData]);
  return (
    <div className="grid add__role__container">

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex", gap: 10, padding: "8px 0px"
        }}
      >
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
        <div className="add__sub__title">
          {action === "add"
            ? "Add Role"
            : action === "edit"
              ? "Edit Role"
              : "View Role"}
        </div>
      </div>

      <div className="col-12 mb-4">
        <div >
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <Card className="common__card__container">
        <div className="col-12 m-0 ">
          <div className="grid add__account__sub__container ">
            <div className="col-12 md:col-3 lg:col-3">
              <InputField
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.roleCode : formik.values.roleCode}
                onChange={formik.handleChange("roleCode")}
                // error={formik.errors.roleCode}
                label="Role Code"
                classNames="dropdown__add__sub"
                className="label__sub__add"
                placeholder="Enter"
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3">
              <InputField
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.roleName : formik.values.roleName}
                onChange={formik.handleChange("roleName")}
                // error={formik.errors.roleName}
                label="Role Name"
                classNames="dropdown__add__sub"
                className="label__sub__add"
                placeholder="Enter"
              />
            </div>

            <div className="col-12 md:col-3 lg:col-6">
              <InputField
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.roleDescription : formik.values.roleDescription}
                onChange={formik.handleChange("roleDescription")}
                // error={formik.errors.roleDescription}
                label="Role Description"
                classNames="dropdown__add__sub"
                className="label__sub__add"
                placeholder="Enter"
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3">
              <DropDowns
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.menuAccess : formik.values.menuAccess}
                onChange={formik.handleChange("menuAccess")}
                // error={formik.errors.menuAccess}
                className="dropdown__add__sub"
                label="Menu Access"
                classNames="label__sub__add"
                placeholder={"Select"}
                options={item}
                optionLabel="label"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3">
              <DropDowns
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.subMenuAccess : formik.values.subMenuAccess}
                onChange={formik.handleChange("subMenuAccess")}
                // error={formik.errors.subMenuAccess}
                className="dropdown__add__sub"
                label="Sub Menu Access"
                classNames="label__sub__add"
                placeholder={"Select"}
                options={item1}
                optionLabel="label"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3">
              <DropDowns
                disabled={action === "view" ? true : false}
                value={action === "view" ? roleViewData.permissions : formik.values.permissions}
                onChange={formik.handleChange("permissions")}
                // error={formik.errors.permissions}
                className="dropdown__add__sub"
                label="Permissions"
                classNames="label__sub__add"
                placeholder={"Select"}
                options={item2}
                optionLabel="label"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          {(action === "view" || action === "edit") && (
            <div className="grid ">
              <div className="col-12 md:col-3 lg:col-3">
                <InputField
                  disabled={action === "view" ? true : false}
                  value={action === "view" ? roleViewData.modifiedBy : formik.values.modifiedBy}
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
                  value={action === "view" ? roleViewData.modifiedOn : formik.values.modifiedOn}
                  onChange={formik.handleChange("modifiedOn")}
                  error={formik.errors.modifiedOn}
                  label="Modified On"
                  classNames="dropdown__add__sub"
                  className="label__sub__add"
                  placeholder="Enter"
                />
              </div>
            </div>
          )}
        </div>
      </Card>
      <div className="col-12 btn__view__Add mt-4">
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
