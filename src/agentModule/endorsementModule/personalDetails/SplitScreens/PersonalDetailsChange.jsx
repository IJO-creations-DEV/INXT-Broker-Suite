import React, { useEffect, useState } from "react";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { useFormik } from "formik";
import { CityOptions, CountryOptions, ProvinceOptions } from "../mock";

const initialValue = {
  CompanyName: "",
  TaxNumber: "",
  FirstName: "",
  LastName: "",
  PreferredName:"",
  EmailID: "",
  ContactNumber: "",
  HouseNo: "",
  Barangay: "",
  Country: "",
  Province: "",
  City: "",
  ZIPCode: "",
  DateofBirth: "",
};

const PersonalDetailsChange = ({
  handleFormSubmit,
  isFormSubmitted,
  setIsFormSubmitted,
  personalDetails,
}) => {
  const [country, setcountry] = useState([]);
  const [city, setcity] = useState([]);
  const [Province, setProvince] = useState([]);
  console.log(personalDetails, "find data personalDetails");

  const setFormikValues = () => {
    const Countryvalue = personalDetails?.Country;
    const Cityvalue = personalDetails?.City;
    const Provincevalue = personalDetails?.Province;

    const updatedValues = {
      CompanyName: personalDetails?.CompanyName,
      TaxNumber: personalDetails?.TaxNumber,
      FirstName: personalDetails?.FirstName,
      LastName: personalDetails?.LastName,
      EmailID: personalDetails?.EmailID,
      ContactNumber: personalDetails?.ContactNumber,
      HouseNo: personalDetails?.HouseNo,
      Barangay: personalDetails?.Barangay,
      PreferredName:personalDetails?.PreferredName,
      Country: Countryvalue,
      Province: Provincevalue,
      City: Cityvalue,
      ZIPCode: personalDetails?.ZIPCode,
      DateofBirth: personalDetails?.DateofBirth,
    };
    console.log(updatedValues.id, "updatedValues");
    if (Countryvalue) {
      setcountry([{ label: Countryvalue, value: Countryvalue }]);
    }
    if (Cityvalue) {
      setcity([{ label: Cityvalue, value: Cityvalue }]);
    }
    if (Provincevalue) {
      setProvince([{ label: Provincevalue, value: Provincevalue }]);
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
        Personal Details Change
      </div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div class="grid m-0">
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="First Name*"
            value={formik.values.FirstName}
            onChange={formik.handleChange("FirstName")}
            error={formik.touched.FirstName && formik.errors.FirstName}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Last Name"
            value={formik.values.LastName}
            onChange={formik.handleChange("LastName")}
            error={formik.touched.LastName && formik.errors.LastName}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Preferred Name*"
            value={formik.values.PreferredName}
            onChange={formik.handleChange("PreferredName")}
            error={formik.touched.PreferredName && formik.errors.PreferredName}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Contact Number"
            value={formik.values.ContactNumber}
            onChange={formik.handleChange("ContactNumber")}
            error={formik.touched.ContactNumber && formik.errors.ContactNumber}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="House No / Unit No / Street "
            value={formik.values.HouseNo}
            onChange={formik.handleChange("HouseNo")}
            error={formik.touched.HouseNo && formik.errors.HouseNo}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="Barangay / Subd"
            value={formik.values.Barangay}
            onChange={formik.handleChange("Barangay")}
            error={formik.touched.Barangay && formik.errors.Barangay}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Country"
            value={formik.values.Country}
            options={CountryOptions || country}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("Country", e.value);
            }}
            optionLabel="label"
            error={formik.touched.Country && formik.errors.Country}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="Province"
            value={formik.values.Province}
            options={ProvinceOptions || Province}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("Province", e.value);
            }}
            optionLabel="label"
            error={formik.touched.Province && formik.errors.Province}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <DropdownField
            label="City"
            value={formik.values.City}
            options={CityOptions || city}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("City", e.value);
            }}
            optionLabel="label"
            error={formik.touched.City && formik.errors.City}
          />
        </div>
        <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
          <InputTextField
            label="ZIP Code"
            value={formik.values.ZIPCode}
            onChange={formik.handleChange("ZIPCode")}
            error={formik.touched.ZIPCode && formik.errors.ZIPCode}
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default PersonalDetailsChange;
