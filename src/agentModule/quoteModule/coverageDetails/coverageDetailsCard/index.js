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
    // validate,
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
                error={
                  formik.touched.LossandDamagecoverage &&
                  formik.errors.LossandDamagecoverage
                }
              />
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Loss and Damage coverage Rate"
                value={formik.values.LossandDamagecoverageRate}
                onChange={formik.handleChange("LossandDamagecoverageRate")}
                error={
                  formik.touched.LossandDamagecoverageRate &&
                  formik.errors.LossandDamagecoverageRate
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Loss and Damage coverage premium"
                value={formik.values.LossandDamagecoveragepremium}
                onChange={formik.handleChange("LossandDamagecoveragepremium")}
                error={
                  formik.touched.LossandDamagecoveragepremium &&
                  formik.errors.LossandDamagecoveragepremium
                }
              />
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Acts of Nature Rate"
                value={formik.values.ActsofNatureRate}
                onChange={formik.handleChange("ActsofNatureRate")}
                error={
                  formik.touched.ActsofNatureRate &&
                  formik.errors.ActsofNatureRate
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Acts of Nature premium"
                value={formik.values.ActsofNaturepremium}
                onChange={formik.handleChange("ActsofNaturepremium")}
                error={
                  formik.touched.ActsofNaturepremium &&
                  formik.errors.ActsofNaturepremium
                }
              />
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
                error={
                  formik.touched.BodilyInjury && formik.errors.BodilyInjury
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Bodily Injury Coverage Premium"
                value={formik.values.BodilyInjuryCoveragePremium}
                onChange={formik.handleChange("BodilyInjuryCoveragePremium")}
                error={
                  formik.touched.BodilyInjuryCoveragePremium &&
                  formik.errors.BodilyInjuryCoveragePremium
                }
              />
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
                error={
                  formik.touched.PropertyDamage && formik.errors.PropertyDamage
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="Property Damage Coverage Premium"
                value={formik.values.PropertyDamageCoveragePremium}
                onChange={formik.handleChange("PropertyDamageCoveragePremium")}
                error={
                  formik.touched.PropertyDamageCoveragePremium &&
                  formik.errors.PropertyDamageCoveragePremium
                }
              />
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
                error={
                  formik.touched.AutopassengerpersonalAccident &&
                  formik.errors.AutopassengerpersonalAccident
                }
              />
            </div>
          </div>

          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="APPA Total Coverage"
                value={formik.values.APPATotalCoverage}
                onChange={formik.handleChange("APPATotalCoverage")}
                error={
                  formik.touched.APPATotalCoverage &&
                  formik.errors.APPATotalCoverage
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <CalculaitionTextInputs
                label="APPA Coverage Premium"
                value={formik.values.APPACoveragePremium}
                onChange={formik.handleChange("APPACoveragePremium")}
                error={
                  formik.touched.APPACoveragePremium &&
                  formik.errors.APPACoveragePremium
                }
              />
            </div>
          </div>
          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-12 lg:col-12">
              <CalculaitionTextInputs
                label="Total Sum Insured"
                value={formik.values.TotalSumInsured}
                onChange={formik.handleChange("TotalSumInsured")}
                error={
                  formik.touched.TotalSumInsured &&
                  formik.errors.TotalSumInsured
                }
              />
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
