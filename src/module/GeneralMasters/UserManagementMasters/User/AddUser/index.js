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
import { InputText } from "primereact/inputtext";
import EditUser from "../EditUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserListByIdMiddleware,
  patchUserEditMiddleware,
  postAddUserMiddleware,
} from "../store/userMiddleware";
import moment from "moment";

const AddUser = ({ action }) => {
  const { id } = useParams();
  console.log(id, "find id");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState("");
  const dispatch = useDispatch();


  const items = [
    { label: "User Management" },
    {
      label: `${action === "add"
        ? "Add User"
        : action === "edit"
          ? "Edit User"
          : "View User"
        }`,
    },
  ];
  const home = { label: "Master" };

  const initialValue = {
    userName: "",
    employeeCode: "",
    email: "",
    phoneNumber: "",
    assignedRole: "",
  };
  const { loading, userList, searchList, userDetailList, userViewData, userEditData } = useSelector(
    ({ userReducers }) => {
      return {
        loading: userReducers?.loading,
        userList: userReducers?.userList,
        searchList: userReducers?.userSearchList,
        userDetailList: userReducers?.userDetailList,
        userViewData: userReducers?.userViewData,
        userEditData: userReducers?.userEditData
      };
    }
  );
  console.log(userViewData, "userViewData");
  // const item = [action === "add" ? { label: "Em00123", value: "Em00123" } : userViewData?.employeeCode];
  // const item2 = [action === "add" ? { label: "Em00123", value: "Em00123" } : userViewData?.assignedRole];
  const item = [
    {
      label: action === "add" ? "ARIANS INSURANCE BROKERS INC" : userViewData?.employeeCode,
      value: action === "add" ? "NY" : userViewData?.employeeCode,
    },
  ];
  const item2 = [
    {
      label: action === "add" ? "Level 1 Agent" : userViewData?.assignedRole,
      value: action === "add" ? "Level 1 Agent" : userViewData?.assignedRole,
    },
    {
      label: action === "add" ? "Level 2 Motor" : userViewData?.assignedRole,
      value: action === "add" ? "Level 2 Motor" : userViewData?.assignedRole,
    },
    {
      label: action === "add" ? "Level 3 Finance" : userViewData?.assignedRole,
      value: action === "add" ? "Level 3 Finance" : userViewData?.assignedRole,
    },
  ];
  const validate = (values) => {
    // if (action === "add" || action === "edit") {
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
    // }
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = (value) => {
    if (action === "edit") {
      dispatch(patchUserEditMiddleware(value))
    }
    console.log(value, "val");
    dispatch(
      postAddUserMiddleware(formik.values)
    );
    toastRef.current.showToast();

    setTimeout(() => {
      setVisiblePopup(false);
    }, 3000);
    navigate("/master/generals/usermanagement/user");
  };
  const [assignedRoleOptionData, setAssignedRoleData] = useState([])
  const [employeeCodeOption, setEmployeeCodeOption] = useState([])
  const setFormikValues = () => {
    console.log(userEditData, "user details");
    const assignedRoleData = userEditData?.assignedRole
    const employeeCodeData = userEditData?.employeeCode
    const updatedValues = {
      id: userEditData?.id,
      userName: userEditData?.userName,
      employeeCode: employeeCodeData,
      email: userEditData?.email,
      phoneNumber: userEditData?.phoneNumber,
      assignedRole: assignedRoleData,
      modifiedBy: userEditData?.modifiedBy,
      modifiedOn: moment().format("DD/MM/YYYY"),
    };
    if (assignedRoleData) {
      setAssignedRoleData([{ label: assignedRoleData, value: assignedRoleData }])
      formik.setValues({ ...formik.values, ...updatedValues });
    }
    if (employeeCodeData) {
      setEmployeeCodeOption([{ label: employeeCodeData, value: employeeCodeData }])
      formik.setValues({ ...formik.values, ...updatedValues });
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  useEffect(() => {
    setFormikValues()
  }, [userEditData])

  // useEffect(() => {
  //   if (action === "edit" || action === "view") {
  //     dispatch(getUserListByIdMiddleware(id)).then(() => {
  //       setFormikValues();
  //     });
  //     setFormikValues();
  //   }
  // }, [action, id]);
  return (
    <div className="grid add__user__container">

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
            ? "Add User"
            : action === "edit"
              ? "Edit User"
              : "View User"}
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
      <div className="col-12 m-0 ">
        <div className="grid add__account__sub__container p-3">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "add" ? formik.values.userName : action === "edit" ? formik.values.userName : userViewData?.userName}
              onChange={formik.handleChange("userName")}
              error={action === "add" && formik.errors.userName}
              label="Username"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "add" ? formik.values.employeeCode : action === "edit" ? formik.values.employeeCode : userViewData?.employeeCode}

              onChange={formik.handleChange("employeeCode")}
              error={action === "add" && formik.errors.employeeCode}
              className="dropdown__add__sub"
              label="Employee code "
              classNames="label__sub__add"
              placeholder={"Select"}
              options={action === "add" ? item : action === "edit" ? employeeCodeOption : item}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={action === "add" ? formik.values.email : action === "edit" ? formik.values.email : userViewData?.email}

              onChange={formik.handleChange("email")}
              error={action === "add" && formik.errors.email}
              label="Email"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Phone Number</label>
            <div className="p-inputgroup flex-1 mt-2" >
              <span className="p-inputgroup-addon" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
                disabled={action === "view" ? true : false}
                placeholder="Enter"
                value={action === "add" ? formik.values.phoneNumber : action === "edit" ? formik.values.phoneNumber : userViewData?.phoneNumber}
                onChange={formik.handleChange("phoneNumber")}
                style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div style={{ fontSize: 12, color: "red" }}></div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={action === "add" ? formik.values.assignedRole : action === "edit" ? formik.values.assignedRole : userViewData?.assignedRole}

              onChange={formik.handleChange("assignedRole")}
              error={action === "add" && formik.errors.assignedRole}
              className="dropdown__add__sub"
              label="Assigned Role"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={action === "add" ? item2 : action === "edit" ? assignedRoleOptionData : item2}
              optionValue={"label"}
              optionLabel="label"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
      </div>
      {action === "edit" && (
        <div style={{ width: "100%" }}>
          <EditUser />
        </div>
      )}

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
