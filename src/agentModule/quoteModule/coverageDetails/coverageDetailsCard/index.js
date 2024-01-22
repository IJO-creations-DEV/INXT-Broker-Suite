import React, { useState } from "react";
import { Card } from "primereact/card";
import InputTextField from "../../../component/inputText";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import DropdownField from "../../../component/DropdwonField";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  AutopassengerpersonalAccidentOptions,
  BodilyInjuryOptions,
  PropertyDamageOptions,
} from "./mock";
import { postcoverageDetailsMiddleware } from "../store/coverageDetailsMiddleware";

const initialValue = {
  LossandDamagecoverage: "",
  LossandDamagecoverageRate: "",
  LossandDamagecoveragepremium: "0.00",
  ActsofNatureRate: "",
  ActsofNaturepremium: "0.00",
  BodilyInjury: "",
  BodilyInjuryCoveragePremium: "0.00",
  PropertyDamage: "",
  PropertyDamageCoveragePremium: "0.00",
  AutopassengerpersonalAccident: "",
  APPATotalCoverage: "",
  APPACoveragePremium: "0.00",
  TotalSumInsured: "0.00",
};

const CoverageDetailsCard = () => {
  const [show, setshow] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (values) => {
    dispatch(postcoverageDetailsMiddleware(values));
    navigate("/agent/createquote/accessories");
  };

  const hadlecalculation = () => {
    setFormikValues();
    setshow(false)
  };
  const customValidation = (values) => {
    const errors = {}
    if (!values.LossandDamagecoverage) {
      errors.LossandDamagecoverage = "This field is required";
    }
    if (!values.LossandDamagecoverageRate) {
      errors.LossandDamagecoverageRate = "This field is required";
    }
    if (!values.LossandDamagecoveragepremium) {
      errors.LossandDamagecoveragepremium = "This field is required";
    }
    if (!values.ActsofNatureRate) {
      errors.ActsofNatureRate = "This field is required";
    }
    if (!values.ActsofNaturepremium) {
      errors.ActsofNaturepremium = "This field is required";
    }
    if (!values.BodilyInjury) {
      errors.BodilyInjury = "This field is required";
    }
    if (!values.BodilyInjuryCoveragePremium) {
      errors.BodilyInjuryCoveragePremium = "This field is required";
    }
    if (!values.PropertyDamage) {
      errors.PropertyDamage = "This field is required";
    }
    if (!values.PropertyDamageCoveragePremium) {
      errors.PropertyDamageCoveragePremium = "This field is required";
    }

    if (!values.AutopassengerpersonalAccident) {
      errors.AutopassengerpersonalAccident = "This field is required";
    }
    if (!values.APPATotalCoverage) {
      errors.APPATotalCoverage = "This field is required";
    }
    if (!values.APPACoveragePremium) {
      errors.APPACoveragePremium = "This field is required";
    }
    if (!values.TotalSumInsured) {
      errors.TotalSumInsured = "This field is required";
    }
  
    return errors
  }

  const setFormikValues = () => {
    const updatedValues = {
      LossandDamagecoveragepremium: "11,780.00",
      ActsofNaturepremium: "11,780.00",
      BodilyInjuryCoveragePremium: "350.00",
      PropertyDamageCoveragePremium: "11,780.00",
      APPACoveragePremium: "25.00",
      TotalSumInsured: "3,25,000.00",
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const handleBackNavigation = () => {
    customHistory.back();
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate:customValidation,
    onSubmit: (values) => {
      handleclick(values);
      // hadlecalculation();
    },
  });

  return (
    <div className="coverage__details__card__container mt-4">
        <Card>
          <div className="coverage__details__card__container__title">
            Create Quote
          </div>
          <div className="coverage__details__card__container__sub__title mt-2 mb-2">
            Coverages Details
          </div>
          <div className="grid m-0">
            <div className="col-12 md:col-12 lg:col-12">
              <InputTextField
                label="Loss and Damage coverage"
                value={formik.values.LossandDamagecoverage}
                onChange={formik.handleChange("LossandDamagecoverage")}
             
              />
                {formik.touched.LossandDamagecoverage && formik.errors.LossandDamagecoverage && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.LossandDamagecoverage}
                </div>
              )}
              
              
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Loss and Damage coverage Rate"
                value={formik.values.LossandDamagecoverageRate}
                onChange={formik.handleChange("LossandDamagecoverageRate")}
               
              />
                {formik.touched.LossandDamagecoverageRate && formik.errors.LossandDamagecoverageRate && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.LossandDamagecoverageRate}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Loss and Damage coverage premium"
                value={formik.values.LossandDamagecoveragepremium}
                onChange={formik.handleChange("LossandDamagecoveragepremium")}
              
              />
                {formik.touched.LossandDamagecoveragepremium && formik.errors.LossandDamagecoveragepremium && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.LossandDamagecoveragepremium}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Acts of Nature Rate"
                value={formik.values.ActsofNatureRate}
                onChange={formik.handleChange("ActsofNatureRate")}
                 
              />
                {formik.touched.ActsofNatureRate && formik.errors.ActsofNatureRate && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.ActsofNatureRate}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Acts of Nature premium"
                value={formik.values.ActsofNaturepremium}
                onChange={formik.handleChange("ActsofNaturepremium")}
               
              />
                {formik.touched.ActsofNaturepremium && formik.errors.ActsofNaturepremium && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.ActsofNaturepremium}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Bodily Injury"
                value={formik.values.BodilyInjury}
                options={BodilyInjuryOptions}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("BodilyInjury", e.value);
                }}
                optionLabel="label"
                
              />
                {formik.touched.BodilyInjury && formik.errors.BodilyInjury && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.BodilyInjury}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Bodily Injury Coverage Premium"
                value={formik.values.BodilyInjuryCoveragePremium}
                onChange={formik.handleChange("BodilyInjuryCoveragePremium")}
               
              />
                {formik.touched.BodilyInjuryCoveragePremium && formik.errors.BodilyInjuryCoveragePremium && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.BodilyInjuryCoveragePremium}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Property Damage"
                value={formik.values.PropertyDamage}
                options={PropertyDamageOptions}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("PropertyDamage", e.value);
                }}
                optionLabel="label"
              
              />
                {formik.touched.PropertyDamage && formik.errors.PropertyDamage && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.PropertyDamage}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Property Damage Coverage Premium"
                value={formik.values.PropertyDamageCoveragePremium}
                onChange={formik.handleChange("PropertyDamageCoveragePremium")}
               
              />
                {formik.touched.PropertyDamageCoveragePremium && formik.errors.PropertyDamageCoveragePremium && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.PropertyDamageCoveragePremium}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-12 lg:col-12">
              <DropdownField
                label="Auto passenger personal Accident"
                value={formik.values.AutopassengerpersonalAccident}
                options={AutopassengerpersonalAccidentOptions}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue(
                    "AutopassengerpersonalAccident",
                    e.value
                  );
                }}
                optionLabel="label"
               
              />
                {formik.touched.AutopassengerpersonalAccident && formik.errors.AutopassengerpersonalAccident && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.AutopassengerpersonalAccident}
                </div>
              )}
            </div>
          </div>

          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="APPA Total Coverage"
                value={formik.values.APPATotalCoverage}
                onChange={formik.handleChange("APPATotalCoverage")}
               
              />
                {formik.touched.APPATotalCoverage && formik.errors.APPATotalCoverage && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.APPATotalCoverage}
                </div>
              )}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="APPA Coverage Premium"
                value={formik.values.APPACoveragePremium}
                onChange={formik.handleChange("APPACoveragePremium")}
               
              />
                {formik.touched.APPACoveragePremium && formik.errors.APPACoveragePremium && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.APPACoveragePremium}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-12 lg:col-12">
              <CalculaitionTextInputs
                label="Total Sum Insured"
                value={formik.values.TotalSumInsured}
                onChange={formik.handleChange("TotalSumInsured")}
             
              />
                {formik.touched.TotalSumInsured && formik.errors.TotalSumInsured && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.TotalSumInsured}
                </div>
              )}
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <div className="calculation__btn__container">
                <Button
                  label="Calculate"
                  className="calculation__btn"
                  onClick={
                    hadlecalculation}
                />
              
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6 back__next__btn__container ">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handleBackNavigation}>
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={
                    formik.handleSubmit}
                    disabled={show ===  true ? true : false}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Card>
    </div>
  );
};

export default CoverageDetailsCard;
