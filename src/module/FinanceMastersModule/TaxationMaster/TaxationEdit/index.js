import { BreadCrumb } from "primereact/breadcrumb";
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import SvgBack from "../../../../assets/icons/SvgBack";

const AddTaxation = () => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("30%");
  const handleDropdownChange = (e) => {
    setSelectedOption(e.value);
  };
  const items = [
    { label: "Taxation", url: "/master/finance/taxation" },
    { label: "Edit Taxation ", url: "/master/finance/taxation/taxationedit" },
  ];
  const home = { label: "Master" };

  const item = [{ name: "30%" }, { name: "40%" }, { name: "70%" }];
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
  const handleSubmit = () => {
    const formErrors = validate(formik.values);
    setErrors(formErrors);
    console.log(formErrors, "iiiii");
    navigate("/addpolicyedit");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="grid sub__add__container">
      <div className="col-12">
        <NavBar />
      </div>
      <div>
      <span onClick={()=>navigate(-1)}>
        <SvgBack />
        </span>
        <label className="label_header">Edit Taxation </label>
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
              value={"0102"}
              label="Tax Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"Name"}
              label="Tax Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <DropDowns
              value={selectedOption}
              options={item}
              onChange={handleDropdownChange}
              className="dropdown__add__sub"
              label="Tax Rate"
              classNames="label__sub__add"
              placeholder={"30%"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"0102"}
              label="Basis"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={"Remarks to be entered here"}
              label="Remarks"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={
                "A description is a detailed and informative explanation or portrayal of something"
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
                value={formik.values.effectiveFrom}
                minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("effectiveFrom", e.target.value);
                }}
                dateFormat="yy-mm-dd"
                error={formik.errors.effectiveFrom}
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
                value={formik.values.effectiveTo}
                minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("effectiveTo", e.target.value);
                }}
                dateFormat="yy-mm-dd"
                error={formik.errors.effectiveTo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 btn__view__Add mt-2">
        <Button
          label="Update"
          className="save__add__btn"
          onClick={() => {
            formik.handleSubmit();
          }}
        />
      </div>
    </div>
  );
};
export default AddTaxation;
