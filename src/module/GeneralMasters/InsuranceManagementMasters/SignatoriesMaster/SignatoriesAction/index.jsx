import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import NavBar from "../../../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../../assets/icons/SvgDot";
import InputField from "../../../../../components/InputField";
import { useFormik } from "formik";
import DropDowns from "../../../../../components/DropDowns";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";
import { MultiSelect } from "primereact/multiselect";
import LabelWrapper from "../../../../../components/LabelWrapper";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { useNavigate, useParams } from "react-router-dom";
import CustomToast from "../../../../../components/Toast";
import SvgDropdownicon from "../../../../../assets/icons/SvgDropdownicon";
import SvgBackicon from "../../../../../assets/icons/SvgBackicon";
import { useSelector, useDispatch } from "react-redux";
import {
  patchInsuranceSignatoriesMiddleWare,
  postInsuranceSignatoriesMiddleWare,
} from "../store/insuranceSignatoriesMiddleware";

const SignatoriesDetailsAction = ({ action }) => {
  const dispatch = useDispatch();
  const { InsuranceSignatoriesList, loading } = useSelector(
    ({ insuranceSignatoriesReducers }) => {
      return {
        loading: insuranceSignatoriesReducers?.loading,
        InsuranceSignatoriesList:
          insuranceSignatoriesReducers?.InsuranceSignatoriesList,
      };
    }
  );
  console.log(action, "find action");
  const { id } = useParams();
  console.log(id, "find route id");
  const toastRef = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (action === "edit" || action === "view") {
      if (id != null) {
        const FilteredList = InsuranceSignatoriesList.filter(
          (data) => data.id === parseInt(id)
        );
        setFormikValues(FilteredList);
      }
    }
  }, [action]);
  const items = [
    {
      label: "Insurance Management",
      url: "/master/generals/insurancemanagement/insurancecompany",
    },
    {
      label: "Signatories",
      url: "/master/generals/insurancemanagement/signatories",
    },

    {
      label: `${
        action === "add"
          ? "Add Signatories"
          : action === "edit"
          ? "Edit Signatories"
          : "Signatories Details"
      }`,
    },
  ];
  const home = { label: "Master" };

  const customValidation = (values) => {
    const errors = {};

    if (!values.signatoryCode) {
      errors.signatoryCode = "This field is required";
    }
    if (!values.signatoryName) {
      errors.signatoryName = "This field is required";
    }
    if (!values.signatoryDescription) {
      errors.signatoryDescription = "This field is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    if (action === "add") {
      const valueWithId = {
        ...values,
        id: InsuranceSignatoriesList?.length + 1,
      };
      console.log(valueWithId, "find valueWithId");
      dispatch(postInsuranceSignatoriesMiddleWare(valueWithId));
      toastRef.current.showToast();

      {
        setTimeout(() => {
          navigation("/master/generals/insurancemanagement/signatories");
          formik.resetForm();
        }, 3000);
      }
    } else if (action === "edit") {
      dispatch(patchInsuranceSignatoriesMiddleWare(values));
      navigation("/master/generals/insurancemanagement/signatories");
    } else {
      navigation("/master/generals/insurancemanagement/signatories");
    }

    console.log(values, "find values");
  };
  const setFormikValues = (data) => {
    console.log(data, "find setFormikValues ");
    const signatoryCode = data[0]?.signatoriesCode;
    const signatoryName = data[0]?.signatoryName;
    const signatoryDescription = data[0]?.signatoryDescription;
    const modifiedBy = data[0]?.modifiedby;
    const modifiedOn = data[0]?.modifiedOn;

    const updatedValues = {
      signatoryCode: `${signatoryCode}`,
      signatoryName: `${signatoryName}`,
      signatoryDescription: `${signatoryDescription}`,
      modifiedBy: `${modifiedBy}`,
      modifiedOn: `${modifiedOn}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  const formik = useFormik({
    initialValues: {
      id: id,
      signatoryCode: "",
      signatoryName: "",
      signatoryDescription: "",
      modifiedBy: "",
      modifiedOn: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div className="action__cover_container">
      <div className="grid m-0 top-container">
        <CustomToast ref={toastRef} message="Signatory Code 001234 is added" />
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="svgback_container">
            <span onClick={() => navigation(-1)}>
              <SvgBackicon />
            </span>
            <div className="main__account__title">
              {action === "add"
                ? "Add Signatories"
                : action === "edit"
                ? "Edit Signatories"
                : "Signatories Details"}
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="card__container">
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Signatory Code"
              value={formik.values.signatoryCode}
              onChange={(e) =>
                formik.setFieldValue("signatoryCode", e.target.value)
              }
            />
            {formik.touched.signatoryCode && formik.errors.signatoryCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.signatoryCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Signatory Name"
              value={formik.values.signatoryName}
              onChange={(e) =>
                formik.setFieldValue("signatoryName", e.target.value)
              }
            />
            {formik.touched.signatoryName && formik.errors.signatoryName && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.signatoryName}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Signatory Description"
              value={formik.values.signatoryDescription}
              onChange={(e) =>
                formik.setFieldValue("signatoryDescription", e.target.value)
              }
            />
            {formik.touched.signatoryDescription &&
              formik.errors.signatoryDescription && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.signatoryDescription}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={true}
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Modified By"
              value={formik.values.modifiedBy}
              onChange={(e) =>
                formik.setFieldValue("modifiedBy", e.target.value)
              }
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={true}
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Modified On"
              value={formik.values.modifiedOn}
              onChange={(e) =>
                formik.setFieldValue("modifiedOn", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mt-5">
        {action === "add" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        )}
        {action === "edit" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignatoriesDetailsAction;
