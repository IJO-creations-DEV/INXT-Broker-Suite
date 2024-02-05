import React, { useEffect, useState } from "react";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import DatepickerField from "../../../component/datePicker";
import { InputTextarea } from "primereact/inputtextarea";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { useFormik } from "formik";
import {
  BodilyInjuryOptions,
  LossandDamagecoverageRateOptions,
  PropertyDamageOptions,
} from "../mock";

const initialValue = {
  FromDate: "",
  ToDate: "",
  NumberofDays: "",
  LossandDamagecoverage: "",
  LossandDamagecoverageRate: "",
  LossandDamagecoveragepremium: "",
  ActsOfNatureRate: "",
  ActsofNaturepremium: "",
  BodilyInjury: "",
  BodilyInjuryCoveragePremium: "",
  PropertyDamage: "",
  PropertyDamageCoveragePremium: "",
  Title: "",
  Declaration: "",
};

const PolicyExtend = ({
  handleFormSubmit,
  isFormSubmitted,
  setIsFormSubmitted,
  personalDetails,
}) => {
  const [lossandDamagecoverageRate, setLossandDamagecoverageRate] = useState(
    []
  );
  const [bodilyInjury, setBodilyInjury] = useState([]);
  const [propertyDamage, setPropertyDamage] = useState([]);

  const setFormikValues = () => {
    const LossandDamagecoverageRatevalue =
      personalDetails?.LossandDamagecoverageRate;
    const BodilyInjuryvalue = personalDetails?.BodilyInjury;
    const PropertyDamagevalue = personalDetails?.PropertyDamage;

    const updatedValues = {
      FromDate: personalDetails?.FromDate,
      ToDate: personalDetails?.FromDate,
      NumberofDays: personalDetails?.NumberofDays,
      LossandDamagecoverage: personalDetails?.LossandDamagecoverage,
      LossandDamagecoverageRate: LossandDamagecoverageRatevalue,
      LossandDamagecoveragepremium:
        personalDetails?.LossandDamagecoveragepremium,
      ActsOfNatureRate: personalDetails?.ActsOfNatureRate,
      ActsofNaturepremium: personalDetails?.ActsofNaturepremium,
      BodilyInjury: BodilyInjuryvalue,
      BodilyInjuryCoveragePremium: personalDetails?.BodilyInjuryCoveragePremium,
      PropertyDamage: PropertyDamagevalue,
      PropertyDamageCoveragePremium:
        personalDetails?.PropertyDamageCoveragePremium,
      Title: personalDetails?.Title,
      Declaration: personalDetails?.Declaration,
    };
    console.log(updatedValues.id, "updatedValues");
    if (LossandDamagecoverageRatevalue) {
      setLossandDamagecoverageRate([
        {
          label: LossandDamagecoverageRatevalue,
          value: LossandDamagecoverageRatevalue,
        },
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
      handleFormSubmit(values, 4);
    },
  });

  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">Policy Extend</div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DatepickerField
            label="From"
            value={formik.values.FromDate}
            onChange={(date) => {
              console.log(date, "date");
              return formik.setFieldValue("FromDate", date.target.value);
            }}
            error={formik.touched.FromDate && formik.errors.FromDate}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DatepickerField
            label="To"
            value={formik.values.ToDate}
            onChange={(date) => {
              console.log(date, "date");
              return formik.setFieldValue("ToDate", date.target.value);
            }}
            error={formik.touched.ToDate && formik.errors.ToDate}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Number of Days"
            value={formik.values.NumberofDays}
            onChange={formik.handleChange("NumberofDays")}
            error={formik.touched.NumberofDays && formik.errors.NumberofDays}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <CalculaitionTextInputs
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
          <DropdownField
            label="Loss and Damage coverage Rate"
            value={formik.values.LossandDamagecoverageRate}
            options={
              LossandDamagecoverageRateOptions || lossandDamagecoverageRate
            }
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("LossandDamagecoverageRate", e.value);
            }}
            optionLabel="label"
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
          <InputTextField
            label="Acts Of Nature Rate"
            value={formik.values.ActsOfNatureRate}
            onChange={formik.handleChange("ActsOfNatureRate")}
            error={
              formik.touched.ActsOfNatureRate && formik.errors.ActsOfNatureRate
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
        <div class="col-12  mt-2">
          <CalculaitionTextInputs
            label="Title"
            value={formik.values.Title}
            onChange={formik.handleChange("Title")}
            error={formik.touched.Title && formik.errors.Title}
          />
        </div>
        <div class="col-12  mt-2">
          <InputTextarea
            placeholder="Declaration"
            rows={6}
            cols={30}
            className="text__area__container"
            value={formik.values.Declaration}
            onChange={formik.handleChange("Declaration")}
            error={formik.touched.Declaration && formik.errors.Declaration}
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default PolicyExtend;
