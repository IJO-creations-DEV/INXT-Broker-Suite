import React, { useEffect, useState } from "react";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { useFormik } from "formik";
import {
  APPATotalCoverageOptions,
  ActsofnatureRateOptions,
  AutopassengerpersonalAccidentOptions,
  BodilyInjuryOptions,
  PropertyDamageOptions,
} from "../mock";

const initialValue = {
  LossandDamagecoverage: "",
  LossandDamagecoverageRate: "",
  LossandDamagecoveragepremium: "",
  ActsofNatureRate: "",
  ActsofNaturepremium: "",
  BodilyInjury: "",
  BodilyInjuryCoveragePremium: "",
  PropertyDamage: "",
  PropertyDamageCoveragePremium: "",
  AutopassengerpersonalAccident: "",
  APPATotalCoverage: "",
  ActsofNaturepremium: "",
  TotalSumInsured: "",
  NETpremium: "",
  ValueAddedTax: "",
  OthersPremium: "",
  DocumentaryStampTax: "",
  LocalGovtTax: "",
  Discount: "",
  Others: "",
  Grosspremium: "",
};

const CoverageChange = ({
  handleFormSubmit,
  isFormSubmitted,
  setIsFormSubmitted,
  personalDetails,
}) => {
  const [actsofNatureRate, setActsofNatureRate] = useState([]);
  const [bodilyInjury, setBodilyInjury] = useState([]);
  const [propertyDamage, setPropertyDamage] = useState([]);
  const [autopassengerpersonalAccident, setAutopassengerpersonalAccident] =
    useState([]);
  const [aPPATotalCoverage, setAPPATotalCoverage] = useState([]);

  const setFormikValues = () => {
    const ActsofNatureRatevalue = personalDetails?.ActsofNatureRate;
    const BodilyInjuryvalue = personalDetails?.BodilyInjury;
    const PropertyDamagevalue = personalDetails?.PropertyDamage;
    const AutopassengerpersonalAccidentvalue =
      personalDetails?.AutopassengerpersonalAccident;
    const APPATotalCoveragevalue = personalDetails?.APPATotalCoverage;

    const updatedValues = {
      LossandDamagecoverage: personalDetails?.LossandDamagecoverage,
      LossandDamagecoverageRate: personalDetails?.LossandDamagecoverageRate,
      LossandDamagecoveragepremium:
        personalDetails?.LossandDamagecoveragepremium,
      ActsofNatureRate: ActsofNatureRatevalue,
      ActsofNaturepremium: personalDetails?.ActsofNaturepremium,
      BodilyInjury: BodilyInjuryvalue,
      BodilyInjuryCoveragePremium: personalDetails?.BodilyInjuryCoveragePremium,
      PropertyDamage: PropertyDamagevalue,
      PropertyDamageCoveragePremium:
        personalDetails?.PropertyDamageCoveragePremium,
      AutopassengerpersonalAccident: AutopassengerpersonalAccidentvalue,
      APPATotalCoverage: APPATotalCoveragevalue,
      ActsofNaturepremium: personalDetails?.ActsofNaturepremium,
      TotalSumInsured: personalDetails?.TotalSumInsured,
      NETpremium: personalDetails?.NETpremium,
      ValueAddedTax: personalDetails?.ValueAddedTax,
      Others: personalDetails?.Others,
      DocumentaryStampTax: personalDetails?.DocumentaryStampTax,
      LocalGovtTax: personalDetails?.LocalGovtTax,
      OthersPremium: personalDetails?.OthersPremium,
      Grosspremium: personalDetails?.Grosspremium,
      Discount: personalDetails?.Discount,
    };
    if (ActsofNatureRatevalue) {
      setActsofNatureRate([
        { label: ActsofNatureRatevalue, value: ActsofNatureRatevalue },
      ]);
    }
    if (BodilyInjuryvalue) {
      setBodilyInjury([{ label: BodilyInjuryvalue, value: BodilyInjuryvalue }]);
    }
    if (PropertyDamagevalue) {
      setPropertyDamage([
        { label: PropertyDamagevalue, value: PropertyDamagevalue },
      ]);
    }
    if (AutopassengerpersonalAccidentvalue) {
      setAutopassengerpersonalAccident([
        {
          label: AutopassengerpersonalAccidentvalue,
          value: AutopassengerpersonalAccidentvalue,
        },
      ]);
    }
    if (APPATotalCoveragevalue) {
      setAPPATotalCoverage([
        { label: APPATotalCoveragevalue, value: APPATotalCoveragevalue },
      ]);
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  useEffect(() => {
    if (isFormSubmitted) {
      formik.submitForm();
      setIsFormSubmitted(false);
      // formik.resetForm()
    }
    setFormikValues();

  }, [isFormSubmitted]);

  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      // handleFormSubmit(values);
    },
  });

  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">Coverage Change</div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div class="grid">
        <div class="col-12 mt-2">
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Acts of Nature Rate"
            value={formik.values.ActsofNatureRate}
            options={ActsofnatureRateOptions || actsofNatureRate}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("ActsofNatureRate", e.value);
            }}
            optionLabel="label"
            error={
              formik.touched.ActsofNatureRate && formik.errors.ActsofNatureRate
            }
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Bodily Injury"
            value={formik.values.BodilyInjury}
            options={BodilyInjuryOptions || bodilyInjury}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("BodilyInjury", e.value);
            }}
            optionLabel="label"
            error={formik.touched.BodilyInjury && formik.errors.BodilyInjury}
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Property Damage"
            value={formik.values.PropertyDamage}
            options={PropertyDamageOptions || propertyDamage}
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
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 mt-2">
          <DropdownField
            label="Auto passenger personal Accident"
            value={formik.values.AutopassengerpersonalAccident}
            options={
              AutopassengerpersonalAccidentOptions ||
              autopassengerpersonalAccident
            }
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("AutopassengerpersonalAccident", e.value);
            }}
            optionLabel="label"
            error={
              formik.touched.AutopassengerpersonalAccident &&
              formik.errors.AutopassengerpersonalAccident
            }
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="APPA Total Coverage"
            value={formik.values.APPATotalCoverage}
            options={APPATotalCoverageOptions || aPPATotalCoverage}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("APPATotalCoverage", e.value);
            }}
            optionLabel="label"
            error={
              formik.touched.APPATotalCoverage &&
              formik.errors.APPATotalCoverage
            }
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
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
        <div class="col-12 mt-2">
          <CalculaitionTextInputs
            label="Total Sum Insured"
            value={formik.values.TotalSumInsured}
            onChange={formik.handleChange("TotalSumInsured")}
            error={
              formik.touched.TotalSumInsured && formik.errors.TotalSumInsured
            }
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="NET premium"
            value={formik.values.NETpremium}
            onChange={formik.handleChange("NETpremium")}
            error={formik.touched.NETpremium && formik.errors.NETpremium}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Value Added Tax"
            value={formik.values.ValueAddedTax}
            onChange={formik.handleChange("ValueAddedTax")}
            error={formik.touched.ValueAddedTax && formik.errors.ValueAddedTax}
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Others(Acc. premium)"
            value={formik.values.OthersPremium}
            onChange={formik.handleChange("OthersPremium")}
            error={formik.touched.OthersPremium && formik.errors.OthersPremium}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Documentary Stamp Tax"
            value={formik.values.DocumentaryStampTax}
            onChange={formik.handleChange("DocumentaryStampTax")}
            error={
              formik.touched.DocumentaryStampTax &&
              formik.errors.DocumentaryStampTax
            }
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Local Gov’t Tax"
            value={formik.values.LocalGovtTax}
            onChange={formik.handleChange("LocalGovtTax")}
            error={formik.touched.LocalGovtTax && formik.errors.LocalGovtTax}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Discount"
            value={formik.values.Discount}
            onChange={formik.handleChange("Discount")}
            error={formik.touched.Discount && formik.errors.Discount}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Others"
            value={formik.values.Others}
            onChange={formik.handleChange("Others")}
            error={formik.touched.Others && formik.errors.Others}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
            label="Gross premium"
            value={formik.values.Grosspremium}
            onChange={formik.handleChange("Grosspremium")}
            error={formik.touched.Grosspremium && formik.errors.Grosspremium}
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default CoverageChange;
