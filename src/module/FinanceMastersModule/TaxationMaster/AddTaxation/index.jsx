import { BreadCrumb } from "primereact/breadcrumb";
import React, { useState, useRef } from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "../AddTaxation/index.scss";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../../components/LabelWrapper";
import { useFormik } from "formik";
import SvgBack from "../../../../assets/icons/SvgBack";
import CustomToast from "../../../../components/Toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postAddTaxationMiddileware } from "../store/taxationMiddleWare";
const AddTaxation = () => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const addTaxationList = useSelector((state) => state.addTaxationList);
  const items = [
    { label: "Taxation", url: "/master/finance/taxation" },
    { label: "Add Taxation", url: "/master/finance/taxation/addtaxation" },
  ];
  const home = { label: "Master" };

  const item = [
    { label: "30%", value: "30%" },
    { label: "40%", value: "40%" },
    { label: "70%", value: "70%" },
  ];
  const initialValue = {
    taxCode: "",
    taxName: "",
    taxRate: "",
    basis: "",
    remarks: "",
    taxationDescription: "",
    effectiveFrom: new Date(),
    effectiveTo: new Date(),
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.taxCode) {
      errors.taxCode = "TaxCode is required";
    }
    if (!values.taxName) {
      errors.taxName = "TaxName is required";
    }
    if (!values.taxRate) {
      errors.taxRate = "TaxRate is required";
    }
    if (!values.basis) {
      errors.basis = "Basis is required";
    }
    if (!values.effectiveFrom) {
      errors.effectiveFrom = "Department code is required";
    }
    if (!values.effectiveTo) {
      errors.customerCode = "Customer code is required";
    }

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = (values) => {
    // const formErrors = validate(formik.values);
    // setErrors(formErrors);
    // console.log(formErrors, "iiiii");

    // const valueWithId = {
    //   ...values,
    //   id: addTaxationList?.length + 1,
    // };
    // console.log(valueWithId, 'find valueWithId')

    dispatch(postAddTaxationMiddileware(formik.values));
    navigate("/master/finance/taxation");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="grid sub__add__container">
      <div className="col-12"></div>
      <div>
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
        <label className="label_header">Add Taxation</label>
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
              value={formik.values.taxCode}
              onChange={formik.handleChange("taxCode")}
              error={formik.touched.taxCode && formik.errors.taxCode}
              label="Tax Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={formik.values.taxName}
              onChange={formik.handleChange("taxName")}
              error={formik.touched.taxName && formik.errors.taxName}
              label="Tax Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              value={formik.values.taxRate}
              onChange={formik.handleChange("taxRate")}
              error={formik.touched.taxRate && formik.errors.taxRate}
              className="dropdown__add__sub"
              label="Tax Rate"
              classNames="label__sub__add"
              optionLabel="label"
              placeholder={"Select"}
              options={item}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={formik.values.basis}
              onChange={formik.handleChange("basis")}
              error={formik.touched.basis && formik.errors.basis}
              label="Basis"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={formik.values.remarks}
              onChange={formik.handleChange("remarks")}
              error={
                formik.touched.TransactionNumberFrom && formik.errors.remarks
              }
              label="Remarks"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={formik.values.taxationDescription}
              onChange={formik.handleChange("taxationDescription")}
              error={
                formik.touched.taxationDescription &&
                formik.errors.taxationDescription
              }
              label="Taxation Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper className="calenderlable__container">
                Effective From
              </LabelWrapper>

              <Calendar
                classNames="calender__container"
                showIcon
                // value={formik.values.effectiveFrom}
                // minDate={minDate}
                // onChange={(e) => {
                //   formik.setFieldValue("effectiveFrom", e.target.value);
                // }}
                // dateFormat="yy-mm-dd"
                value={formik.values.effectiveFrom}
                minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("effectiveFrom", e.target.value);
                }}
                dateFormat="yy-mm-dd"
                error={
                  formik.touched.effectiveFrom && formik.errors.effectiveFrom
                }
              />
            </div>
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper className="calenderlable__container">
                Effective To
              </LabelWrapper>

              <Calendar
                classNames="calender__container"
                showIcon
                // value={formik.values.effectiveTo}
                // minDate={minDate}
                // onChange={(e) => {
                //   formik.setFieldValue("effectiveTo", e.target.value);
                // }}
                // dateFormat="yy-mm-dd"
                value={formik.values.effectiveTo}
                minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("effectiveTo", e.target.value);
                }}
                dateFormat="yy-mm-dd"
                error={formik.touched.effectiveTo && formik.errors.effectiveTo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 btn__view__Add mt-2">
        <Button
          label="Save"
          className="save__add__btn"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />
      </div>
      <CustomToast ref={toastRef} message="Tax Code T1234 is added" />
    </div>
  );
};
export default AddTaxation;
