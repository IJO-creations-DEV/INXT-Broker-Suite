import React from "react";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { useFormik } from "formik";

const initialValue = {
  CompanyName: "",
  TaxNumber: "",
  FirstName: "",
  LastName: "",
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

const PersonalDetailsChange = ({handleFormSubmit}) => {
  console.log(handleFormSubmit,"handleclick")
  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      handleFormSubmit('personal', values);
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
              error={
                formik.touched.PreferredName && formik.errors.PreferredName
              }
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <InputTextField
              label="Contact Number"
              value={formik.values.ContactNumber}
              onChange={formik.handleChange("ContactNumber")}
              error={
                formik.touched.ContactNumber && formik.errors.ContactNumber
              }
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
              // options={CountryOptions}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("Country", e.value);
              }}
              optionLabel="label"
              error={
                formik.touched.Country &&
                formik.errors.Country
              }
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="Province"
              value={formik.values.Province}
              // options={ProvinceOptions}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("Province", e.value);
              }}
              optionLabel="label"
              error={
                formik.touched.Province &&
                formik.errors.Province
              }
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="City"
              value={formik.values.City}
              // options={CityOptions}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("City", e.value);
              }}
              optionLabel="label"
              error={
                formik.touched.City &&
                formik.errors.City
              }
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
