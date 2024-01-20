import React, { useEffect, useState } from "react";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { useFormik } from "formik";
import {
  ModelVariantOptions,
  ModelYearOptions,
  MortgageOptions,
  TNVSOptions,
  VehicleBrandOptions,
  VehicleColorOptions,
  VehicleModelOptions,
} from "../mock";

const initialValue = {
  TNVS: "",
  MotorNumber: "",
  ChassisNumber: "",
  Mortgage: "",
  CertNumber: "",
  PlateNumber: "",
  MVFileNumber: "",
  AuthenCode: "",
  VehicleBrand: "",
  ModelYear: "",
  ModelVariant: "",
  VehicleModel: "",
  VehicleColor: "",
  SeatingCapacity: "",
};

const MotorDetailsChange = ({
  handleFormSubmit,
  isFormSubmitted,
  setIsFormSubmitted,
  personalDetails,
}) => {
  const [tnvs, setTNVS] = useState([]);
  const [mortgage, setMortgage] = useState([]);
  const [vehicleModel, setVehicleModel] = useState([]);
  const [modelYear, setModelYear] = useState([]);
  const [modelVariant, setModelVariant] = useState([]);
  const [vehicleColor, setVehicleColor] = useState([]);
  const [vehicleBrand, setVehicleBrand] = useState([]);

  console.log(vehicleBrand,"tnvs")

  const setFormikValues = () => {
    const TNVSvalue = personalDetails?.TNVS;
    const Mortgagevalue = personalDetails?.Mortgage;
    const VehicleModelvalue = personalDetails?.VehicleModel;
    const ModelYearvalue = personalDetails?.ModelYear;
    const ModelVariantvalue = personalDetails?.ModelVariant;
    const VehicleColorvalue = personalDetails?.VehicleColor;
    const VehicleBrandvalue = personalDetails?.VehicleBrand;

    const updatedValues = {
      TNVS: TNVSvalue,
      MotorNumber: personalDetails?.MotorNumber,
      ChassisNumber: personalDetails?.ChassisNumber,
      Mortgage: Mortgagevalue,
      CertNumber: personalDetails?.CertNumber,
      PlateNumber: personalDetails?.PlateNumber,
      MVFileNumber: personalDetails?.MVFileNumber,
      AuthenCode: personalDetails?.AuthenCode,
      VehicleBrand: VehicleBrandvalue,
      ModelYear: ModelYearvalue,
      ModelVariant: ModelVariantvalue,
      VehicleModel: VehicleModelvalue,
      VehicleColor: VehicleColorvalue,
      SeatingCapacity: personalDetails?.SeatingCapacity,
    };
    if (TNVSvalue) {
      setTNVS([{ label: TNVSvalue, value: TNVSvalue }]);
    }
    if (Mortgagevalue) {
      setMortgage([{ label: Mortgagevalue, value: Mortgagevalue }]);
    }
    if (VehicleModelvalue) {
      setVehicleModel([{ label: VehicleModelvalue, value: VehicleModelvalue }]);
    }
    if (ModelYearvalue) {
      setModelYear([{ label: ModelYearvalue, value: ModelYearvalue }]);
    }
    if (ModelVariantvalue) {
      setModelVariant([{ label: ModelVariantvalue, value: ModelVariantvalue }]);
    }
    if (VehicleColorvalue) {
      setVehicleColor([{ label: VehicleColorvalue, value: VehicleColorvalue }]);
    }
    if (VehicleBrandvalue) {
      setVehicleBrand([{ label: VehicleBrandvalue, value: VehicleBrandvalue }]);
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  useEffect(() => {
    setFormikValues();
    if (isFormSubmitted) {
      formik.submitForm();
      setIsFormSubmitted(false);
      // formik.resetForm()
    }
  }, [isFormSubmitted]);

  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  return (
    <div>
      <div className="customer__info__subtitle mt-2 mb-2">
        Motor Details Change
      </div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div class="grid m-0">
        <div class="col-12 mt-2 p-0">
          <div class="grid m-0">
            <div class="col-12 md:col-6 lg:col-6 xl:col-6">
              <DropdownField
                label="TNVS"
                // disabled={true}
                value={formik.values.TNVS}
                options={TNVSOptions.length > 0 ? TNVSOptions : tnvs}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("TNVS", e.value);
                }}
                optionLabel="label"
                error={formik.touched.TNVS && formik.errors.TNVS}
              />
            </div>
          </div>
        </div>
        <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Motor Number"
            value={formik.values.MotorNumber}
            onChange={formik.handleChange("MotorNumber")}
            error={formik.touched.MotorNumber && formik.errors.MotorNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Chassis Number"
            value={formik.values.ChassisNumber}
            onChange={formik.handleChange("ChassisNumber")}
            error={formik.touched.ChassisNumber && formik.errors.ChassisNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Mortgage"
            value={formik.values.Mortgage}
            options={MortgageOptions || mortgage}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("Mortgage", e.value);
            }}
            optionLabel="label"
            error={formik.touched.Mortgage && formik.errors.Mortgage}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Cert Number"
            value={formik.values.CertNumber}
            onChange={formik.handleChange("CertNumber")}
            error={formik.touched.CertNumber && formik.errors.CertNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Plate Number"
            value={formik.values.PlateNumber}
            onChange={formik.handleChange("PlateNumber")}
            error={formik.touched.PlateNumber && formik.errors.PlateNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="MV File Number"
            value={formik.values.MVFileNumber}
            onChange={formik.handleChange("MVFileNumber")}
            error={formik.touched.MVFileNumber && formik.errors.MVFileNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Authen Code"
            value={formik.values.AuthenCode}
            onChange={formik.handleChange("AuthenCode")}
            error={formik.touched.AuthenCode && formik.errors.AuthenCode}
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Vehicle Brand"
            value={formik.values.VehicleBrand}
            options={VehicleBrandOptions.length > 0 ? VehicleBrandOptions : vehicleBrand}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("VehicleBrand", e.value);
            }}
            optionLabel="label"
            error={formik.touched.VehicleBrand && formik.errors.VehicleBrand}
          />
        </div>

        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Model Year"
            value={formik.values.ModelYear}
            options={ModelYearOptions || modelYear}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("ModelYear", e.value);
            }}
            optionLabel="label"
            error={formik.touched.ModelYear && formik.errors.ModelYear}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Model Variant"
            value={formik.values.ModelVariant}
            options={ModelVariantOptions || modelVariant}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("ModelVariant", e.value);
            }}
            optionLabel="label"
            error={formik.touched.ModelVariant && formik.errors.ModelVariant}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Vehicle Model"
            value={formik.values.VehicleModel}
            options={VehicleModelOptions || vehicleModel}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("VehicleModel", e.value);
            }}
            optionLabel="label"
            error={formik.touched.VehicleModel && formik.errors.VehicleModel}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Vehicle Color"
            value={formik.values.VehicleColor}
            options={VehicleColorOptions || vehicleColor }
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("VehicleColor", e.value);
            }}
            optionLabel="label"
            error={formik.touched.VehicleColor && formik.errors.VehicleColor}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Seating Capacity"
            value={formik.values.SeatingCapacity}
            onChange={formik.handleChange("SeatingCapacity")}
            error={
              formik.touched.SeatingCapacity && formik.errors.SeatingCapacity
            }
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default MotorDetailsChange;
