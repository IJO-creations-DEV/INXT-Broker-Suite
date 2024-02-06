import { Card } from "primereact/card";
import React, { useEffect, useRef } from "react";
import InputTextField from "../../../component/inputText/index";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { patchProfileEditMiddleware } from "../agentProfileCard/store/profileMiddleware"
import { useNavigate } from "react-router-dom";

const AgentProfileCard = () => {
  const dispatch = useDispatch()
  const { profileData, profileEditData, loading, total } = useSelector(

    ({ profileReducers }) => {
      console.log(profileReducers, "find profileReducers")
      return {
        loading: profileReducers?.loading,
        profileData: profileReducers?.profileData,

        profileEditData: profileReducers?.profileEditData,

        total: profileReducers,
      };

    }
  );
  console.log(profileData, "find profileEditData")

  const initialValue = {

    firstName: "",
    lastName: "",
    prefferedName: "",
    dateOfBirth: "",
    gender: "",
    emailId: "",
    contactNumber: "",
    houseNounitNoStreet: "",
    barangaySubd: "",
    country: "",
    province: "",
    city: "",
    zipCode: ""


  };
  // const validate = (values) => {
  //   const errors = {};
  //   console.log(values, errors, "values");
  //   if (!values.employeeCode) {
  //     errors.employeeCode = "Employee Code is required";
  //   }
  //   if (!values.firstName) {
  //     errors.firstName = "First name Code is required";
  //   }

  //   if (!values.middleName) {
  //     errors.middleName = "Middle name Name is required";
  //   }

  //   if (!values.employeeType) {
  //     errors.employeeType = "Employee type is required";
  //   }
  //   if (!values.designation) {
  //     errors.designation = "Designation is required";
  //   }
  //   if (!values.reportingto) {
  //     errors.reportingto = "Reporting is required";
  //   }
  //   if (!values.branchCode) {
  //     errors.branchCode = "Branch code is required";
  //   }
  //   if (!values.departmentCode) {
  //     errors.departmentCode = "Department code is required";
  //   }
  //   if (!values.idProofType) {
  //     errors.idProofType = "Id proof type is required";
  //   }
  //   if (!values.idNumber) {
  //     errors.idNumber = "Id number is required";
  //   }

  //   if (!values.city) {
  //     errors.city = "City is required";
  //   }
  //   if (!values.country) {
  //     errors.country = "Country is required";
  //   }
  //   if (!values.state) {
  //     errors.state = "State is required";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Last name is required";
  //   }

  //   return errors;
  // };

  const setFormikValues = () => {

    const updatedValues = {
      id: profileData[0]?.id,
      firstName: profileData[0]?.firstName,
      lastName: profileData[0]?.lastName,
      prefferedName: profileData[0]?.prefferedName,
      lastName: profileData[0]?.lastName,
      dateOfBirth: profileData[0]?.dateOfBirth,
      gender: profileData[0]?.gender,
      houseNoUnitNoStreet: profileData[0]?.houseNoUnitNoStreet,
      emailId: profileData[0]?.emailId,
      contactNumber: profileData[0]?.contactNumber,
      barangaySubd: profileData[0]?.barangaySubd,
      idNumber: profileData[0]?.idNumber,

      zipCode: profileData[0]?.zipCode,
      city: profileData[0]?.city,
      province: profileData[0]?.province,
      country: profileData[0]?.country

    };
    formik.setValues({ ...formik.values, ...updatedValues });


  };
  const navigate = useNavigate()
  const toastRef = useRef(null);
  const handleSubmit = (value) => {
    console.log(value, "find value")

    dispatch(patchProfileEditMiddleware(value))

    navigate("/")
  };
  useEffect(() => {
    setFormikValues();
  }, [profileData]);
  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Card className="mt-5">
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="First Name*"
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}

            />

          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Preferred Name*"
              value={formik.values.prefferedName}
              onChange={formik.handleChange("prefferedName")} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Date of Birth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange("dateOfBirth")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Gender"
              value={formik.values.gender}
              onChange={formik.handleChange("gender")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Email ID"
              value={formik.values.emailId}
              onChange={formik.handleChange("emailId")} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Contact Number"
              value={formik.values.contactNumber}
              onChange={formik.handleChange("contactNumber")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="House No / Unit No / Street"
              value={formik.values.houseNoUnitNoStreet}
              onChange={formik.handleChange("houseNoUnitNoStreet")} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Barangay / Subd"
              value={formik.values.barangaySubd}
              onChange={formik.handleChange("barangaySubd")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Country"
              value={formik.values.country}
              onChange={formik.handleChange("country")} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Province"
              value={formik.values.province}
              onChange={formik.handleChange("province")} />
          </div>
        </div>
        <div className="grid  m-0">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="City"
              value={formik.values.city}
              onChange={formik.handleChange("city")} />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="ZIP Code"
              value={formik.values.zipCode}
              onChange={formik.handleChange("zipCode")} />
          </div>
        </div>
        <div className="profile__container__btn mt-2">
          <Button
            onClick={() => {


              formik.handleSubmit();
            }}
            label="Edit Profile"
            className="profile__container__add__btn"
            aria-controls="popup_menu_right"
            aria-haspopup
          />
        </div>
      </Card>
    </div>
  );
};

export default AgentProfileCard;
