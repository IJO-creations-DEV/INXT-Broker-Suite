import { Card } from "primereact/card";
import React from "react";
import DropdownField from "../../../component/DropdwonField";
import InputTextField from "../../../component/inputText";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  AccountCodes,
  InsuranceCompanyOptions,
  InsurancePolicyTypes,
  ModelVariants,
  ModelYears,
  VehicleBrands,
  VehicleColors,
  VehicleModels,
} from "../mock";
import { postPolicyDetailsMiddleware } from "../store/policyDetailsMiddleware";

const initialValue = {
  InsuranceCompanyName: "",
  InsurancePolicyType: "",
  AccountCode: "",
  VehicleBrand: "",
  ModelYear: "",
  VehicleModel: "",
  ModelVariant: "",
  VehicleColor: "",
  SeatingCapacity: "",
};

const PolicyDetailsCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (values) => {
    dispatch(postPolicyDetailsMiddleware(values));
    navigate("/agent/createquote/coveragedetails");
  };

  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      handleclick(values);
    },
  });
  return (
    <div className="policy__details__card__container mt-4">
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <div className="policy__details__card__container__title">
            Create Quote
          </div>
          <div className="policy__details__card__container__sub__title mt-2 mb-2">
            Policy Details
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-12 lg:col-12">
              <DropdownField
                label="Insurance Company Name*"
                value={formik.values.InsuranceCompanyName}
                options={InsuranceCompanyOptions}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("InsuranceCompanyName", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.InsuranceCompanyName &&
                  formik.errors.InsuranceCompanyName
                }
              />
            </div>
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Insurance Policy Type"
                value={formik.values.InsurancePolicyType}
                options={InsurancePolicyTypes}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("InsurancePolicyType", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.InsurancePolicyType &&
                  formik.errors.InsurancePolicyType
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Account Code"
                value={formik.values.AccountCode}
                options={AccountCodes}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("AccountCode", e.value);
                }}
                optionLabel="label"
                error={formik.touched.AccountCode && formik.errors.AccountCode}
              />
            </div>
          </div>

          <div className="policy__details__card__sub__title mt-2">
            Insurance Vehicle Details
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Vehicle Brand"
                value={formik.values.VehicleBrand}
                options={VehicleBrands}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("VehicleBrand", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.VehicleBrand && formik.errors.VehicleBrand
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Model Year"
                value={formik.values.ModelYear}
                options={ModelYears}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("ModelYear", e.value);
                }}
                optionLabel="label"
                error={formik.touched.ModelYear && formik.errors.ModelYear}
              />
            </div>
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Vehicle Model"
                value={formik.values.VehicleModel}
                options={VehicleModels}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("VehicleModel", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.VehicleModel && formik.errors.VehicleModel
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Model Variant"
                value={formik.values.ModelVariant}
                options={ModelVariants}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("ModelVariant", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.ModelVariant && formik.errors.ModelVariant
                }
              />
            </div>
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Vehicle Color"
                value={formik.values.VehicleColor}
                options={VehicleColors}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("VehicleColor", e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.VehicleColor && formik.errors.VehicleColor
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Seating Capacity"
                value={formik.values.SeatingCapacity}
                onChange={formik.handleChange("SeatingCapacity")}
                error={formik.touched.SeatingCapacity && formik.errors.SeatingCapacity}
              />
            </div>
          </div>
          <div className="policy__details__card__btn__container">
            <div className="next__btn__container mt-2 mr-1">
              <Button
                className="next__btn"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default PolicyDetailsCard;
