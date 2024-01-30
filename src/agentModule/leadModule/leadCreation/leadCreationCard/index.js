import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import InputTextField from "../../../component/inputText";
import DropdownField from "../../../component/DropdwonField";
import { Button } from "primereact/button";
import DatepickerField from "../../../component/datePicker";
import CustomToast from "../../../../components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCreateleadMiddleware } from "../../Store/leadMiddleware";
import { useFormik } from "formik";
import { CountryOptions, CityOptions, StateOptions } from "../mock";
import countriesData from "../mock";

const initialValue = {
  CompanyName: "",
  TaxNumber: "",
  FirstName: "",
  LastName: "",
  PreferredName: "",
  EmailID: "",
  ContactNumber: "",
  HouseNo: "",
  Barangay: "",
  Country: "",
  Province: "",
  City: "",
  ZIPCode: "",
  DateofBirth: "",
  category: "Individual",
  gender: "Male"
};

const LeadCreationCard = () => {
  // const [ingredient, setIngredient] = useState("");
  const [show, setShow] = useState(false);
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (values) => {
    dispatch(postCreateleadMiddleware(values));
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/createquote/policydetails");
    }, 2000);
  };
  const customValidation = (values) => {
    const errors = {}
    if (values.category === "Company") {
    if (!values.CompanyName) {
      errors.CompanyName = "This field is required";
    }
    if (!values.TaxNumber) {
      errors.TaxNumber = "This field is required";
    }
  }
    if (!values.FirstName) {
      errors.FirstName = "This field is required";
    }
    if (!values.PreferredName) {
      errors.PreferredName = "This field is required";
    }
    if (!values.LastName) {
      errors.LastName = "This field is required";
    }
    if (!values.EmailID) {
      errors.EmailID = "This field is required";
    }
    if (!values.ContactNumber) {
      errors.ContactNumber = "This field is required";
    }
    if (!values.HouseNo) {
      errors.HouseNo = "This field is required";
    }

    if (!values.Barangay) {
      errors.Barangay = "This field is required";
    }
    if (!values.Country) {
      errors.Country = "This field is required";
    }
    if (!values.Province) {
      errors.Province = "This field is required";
    }
    if (!values.City) {
      errors.City = "This field is required";
    }
    if (!values.ZIPCode) {
      errors.ZIPCode = "This field is required";
    }
    if (!values.DateofBirth) {
      errors.DateofBirth = "This field is required";
    }
    if (!values.category) {
      errors.category = "This field is required";
    }
    if (!values.gender) {
      errors.gender = "This field is required";
    }
    return errors
  }

  const handleSaveLead = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/quotelisting");
    }, 2000);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate: customValidation,
    onSubmit: (values) => {
      handleclick(values);
    },
  });
  const City = countriesData.city.map(city => ({
    label: city,
  }));

  const State = countriesData.state.map(state => ({
    label: state,
  }));


  const Country = countriesData.countries.map(country => ({
    label: country,
  }));

  return (
    <div className="card_overall_container mt-4">
      <CustomToast ref={toastRef} message="Lead Created Successfully" />
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Card title="Create Lead">
        <div className="subheadinglabel_txt mt-3">Select Category</div>
        <div className="flex flex-wrap gap-3 mt-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="individual"
              name="category"
              value="Individual"
              onChange={() => {
                formik.setFieldValue("category", "Individual")
                setShow(false)
              }}
              checked={formik.values.category === "Individual"}

            />
            <label htmlFor="ingredient1" className="labeltxt_container">
              Individual
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="company"
              name="category"
              value="Company"
              onChange={() => {
                formik.setFieldValue("category", "Company");
                setShow(true)
              }}
              checked={formik.values.category === "Company"}
            />
            <label htmlFor="ingredient2" className="labeltxt_container">
              Company
            </label>
          </div>
        </div>
        {show === true ? (
          <div class="grid mt-2">
            <div class="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Company Name*"
                value={formik.values.CompanyName}
                onChange={formik.handleChange("CompanyName")}

              />
              {formik.touched.CompanyName && formik.errors.CompanyName && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.CompanyName}
                </div>
              )}
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Tax Information Number*"
                value={formik.values.TaxNumber}
                onChange={formik.handleChange("TaxNumber")}

              />
              {formik.touched.TaxNumber && formik.errors.TaxNumber && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.TaxNumber}
                </div>
              )}
            </div>
          </div>
        ) : null}

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="First Name*"
              value={formik.values.FirstName}
              onChange={formik.handleChange("FirstName")}

            />
            {formik.touched.FirstName && formik.errors.FirstName && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.FirstName}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Last Name"
              value={formik.values.LastName}
              onChange={formik.handleChange("LastName")}

            />
            {formik.touched.LastName && formik.errors.LastName && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.LastName}
              </div>
            )}
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Preferred Name*"
              value={formik.values.PreferredName}
              onChange={formik.handleChange("PreferredName")}

            />
            {formik.touched.PreferredName && formik.errors.PreferredName && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.PreferredName}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            {/* <InputTextField label="Date of Birth" />  */}
             <DatepickerField
              label="Date of Birth"
              value={formik.values.DateofBirth}
              onChange={(date) => {
                console.log(date, "date")
                return formik.setFieldValue("DateofBirth", date.target.value);
              }}

            />

{/* <DatepickerField
    label="Date of Birth"
    value={formik.values.DateofBirth}
    maxDate={new Date(2005, 11, 31)}
    onChange={(date) => {
        
        const selectedDate = new Date(date);
        
        if (selectedDate.getFullYear() === 2024) {
            console.log("You cannot select a date in the year 2024.");
            return;
        }
        
        const minDateOfBirth = new Date("2000-01-01");
        const maxDateOfBirth = new Date();
        
        if (selectedDate < minDateOfBirth || selectedDate > maxDateOfBirth) {
            console.log("Please select a valid date of birth.");
            return;
        }
 
        formik.setFieldValue("DateofBirth", selectedDate);
    }}
/> */}

            {formik.touched.DateofBirth && formik.errors.DateofBirth && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.DateofBirth}
              </div>
            )}
          </div>
        </div>

        <div className="subheadinglabel_txt mt-3">Select Gender</div>
        <div className="flex flex-wrap gap-3  mt-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="male"
              name="gender"
              value="Male"
              onChange={() => formik.setFieldValue("gender", "Male")}
              checked={formik.values.gender === "Male"}
            />
            <label htmlFor="ingredient1" className="labeltxt_container">
              Male
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="female"
              name="gender"
              value="Female"
              onChange={() => formik.setFieldValue("gender", "Female")}
              checked={formik.values.gender === "Female"}
            />
            <label htmlFor="ingredient2" className="labeltxt_container">
              Female
            </label>
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Email ID"
              value={formik.values.EmailID}
              onChange={formik.handleChange("EmailID")}

            />
            {formik.touched.EmailID && formik.errors.EmailID && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.EmailID}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Contact Number"
              value={formik.values.ContactNumber}
              onChange={formik.handleChange("ContactNumber")}

            />
            {formik.touched.ContactNumber && formik.errors.ContactNumber && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.ContactNumber}
              </div>
            )}
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="House No / Unit No / Street "
              value={formik.values.HouseNo}
              onChange={formik.handleChange("HouseNo")}

            />
            {formik.touched.HouseNo && formik.errors.HouseNo && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.HouseNo}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Barangay / Subd"
              value={formik.values.Barangay}
              onChange={formik.handleChange("Barangay")}

            />
            {formik.touched.Barangay && formik.errors.Barangay && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.Barangay}
              </div>
            )}
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            {/* <InputTextField label="First Name*"/> */}
            <DropdownField
              label="Country"
              value={formik.values.Country}
              options={Country}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("Country", e.value);
              }}
              optionLabel="label"

            />
            {formik.touched.Country && formik.errors.Country && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.Country}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Province"
              value={formik.values.Province}
              options={State}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("Province", e.value);
              }}
              optionLabel="label"

            />
            {formik.touched.Province && formik.errors.Province && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.Province}
              </div>
            )}
          </div>
        </div>

        <div class="grid mt-2">
          <div class="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="City"
              value={formik.values.City}
              options={City}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("City", e.value);
              }}
              optionLabel="label"

            />
            {formik.touched.City && formik.errors.City && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.City}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="ZIP Code"
              value={formik.values.ZIPCode}
              onChange={formik.handleChange("ZIPCode")}

            />
            {formik.touched.ZIPCode && formik.errors.ZIPCode && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.ZIPCode}
              </div>
            )}
          </div>
        </div>

        <div className="save_continue_conatiner">
          {/* <Button
            label="Save Lead"
            onClick={handleSaveLead}
            text
            className="btn_lable_container"
          /> */}
          <div className="btn_lable_save_container">
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              label="Save & Continue"
            />
          </div>
        </div>
      </Card>
      {/* </form> */}
    </div>
  );
};

export default LeadCreationCard;
