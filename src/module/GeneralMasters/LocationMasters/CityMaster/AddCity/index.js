import React, { useState, useRef } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../../components/InputField';
import SubmitButton from '../../../../../components/SubmitButton'
import SvgDot from '../../../../../assets/icons/SvgDot';
import DropDowns from '../../../../../components/DropDowns';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar';
import SvgBackicon from '../../../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../../../components/LabelWrapper';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import CustomToast from "../../../../../components/Toast";
import { InputText } from "primereact/inputtext";


const initialValues = {
    CityCode: "",
    CityName: "",
    Description: "",
    State: "",
    ModifiedBy: "",
    ModifiedOn: ""
}

function AddCity({action}) {
    const toastRef = useRef(null);
    const [date, setDate] = useState(null);
    const Navigate = useNavigate()
    const { id } = useParams();


    const home = { label: "Master" };
    const items = [
        { label: 'Location', url: '/master/finance/exchangerate' },
        { label: `${action === "add"
        ? "Add City"
        : action === "edit"
        ? "Edit City"
        : "City details"}` },
    ];

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);


    const State = [
        { name: 'Davao', code: 'NY' },
        { name: 'Rome', code: 'RM' },
    ]

   

    const handleSubmit = (values) => {
        
        console.log(values, "find values");

        toastRef.current.showToast();
        
        setTimeout(() => {
            Navigate("/master/generals/location/city")
        }, 3000);
    }

    // };

    const customValidation = (values) => {
        const errors = {};

        if (!values.CityCode) {
            errors.CityCode = "This field Code is required";
        }
        if (!values.CityName) {
            errors.CityName = "This field is required";
        }
        if (!values.Description) {
            errors.Description = "This field is required";
        }
        if (!values.State) {
            errors.State = "This field is required";
        }
        if (!values.ModifiedBy) {
            errors.ModifiedBy = "This field is required";
        }

        if (!values.ModifiedOn) {
            errors.ModifiedOn = "This field is required";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: initialValues,
        validate: customValidation,
        // onSubmit: (values) => {
        //   // Handle form submission
        //    handleSubmit(values);

        // },
        onSubmit: handleSubmit
    });

    return (
        <div className='overall__addcity__container'>

            <NavBar />
            {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
            <CustomToast ref={toastRef} message="City added" />
            <div>
                <span onClick={() => Navigate(-1)}>
                    <SvgBackicon /></span>
                <label className='label_header'>
                {action === "add"
                ? "Add City"
                : action === "edit"
                ? "Edit City"
                : "City details"}
                    
                    </label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />





            <Card>

                <div class="grid">
                    <div class="sm-col-12 col-12 md:col-3 lg-col-3">
                        <div>
                            <InputField
                                classNames="field__container"
                                label="CityCode"
                                placeholder={"Enter"}
                                //   value={formik.values.CurrencyDescription}
                                value={
                                    formik.values.CityCode

                                }
                                onChange={formik.handleChange("CityCode")}

                            />
                            {formik.touched.CityCode &&
                formik.errors.CityCode && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.CityCode}
                  </div>
                )}

                        </div>
                    </div>
                    <div class="sm-col-12 col-12 md:col-3 lg-col-3">
                        <div>
                            <InputField
                                classNames="field__container"
                                label="City Name"
                                placeholder={"Enter"}
                                //   value={formik.values.CurrencyDescription}
                                value={
                                    formik.values.CityName

                                }
                                onChange={formik.handleChange("CityName")}

                            />
                              {formik.touched.CityName &&
                formik.errors.CityName && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.CityName}
                  </div>
                )}

                        </div>
                    </div>
                    <div class="sm-col-12 col-12 md:col-6 lg-col-6">
                        <div>
                            <InputField
                                classNames="field__container"
                                label="Description"
                                placeholder={"Enter"}
                                //   value={formik.values.CurrencyDescription}
                                value={
                                    formik.values.Description

                                }
                                onChange={formik.handleChange("Description")}

                            />
                             {formik.touched.Description &&
                formik.errors.Description && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.Description}
                  </div>
                )}

                        </div>
                    </div>
                </div>

                <div class="grid">
                    <div class="col-3 md:col-3 lg-col-3">

                        <div>
                            <DropDowns
                                className="dropdown__container"
                                label="State"
                                // value={departmentcode}
                                // onChange={(e) => setDepartmentCode(e.value)}
                                value={formik.values.State}
                                onChange={(e) =>
                                    formik.setFieldValue("State", e.value)
                                }
                                options={State}
                                optionLabel="name"
                                placeholder={"Select"}
                                dropdownIcon={<SvgDropdown color={"#000"} />}
                            />
                            {formik.touched.State &&
                                formik.errors.State && (
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formik.errors.State}
                                    </div>
                                )}
                        </div>

                    </div>
                    <div class="sm-col-12 col-12 md:col-3 lg-col-3">
                        <div>
                            <InputField
                                classNames="field__container"
                                label="Modified By"
                                placeholder={"Enter"}
                                //   value={formik.values.CurrencyDescription}
                                value={
                                    formik.values.ModifiedBy

                                }
                                onChange={formik.handleChange("ModifiedBy")}

                            />
                              {formik.touched.ModifiedBy &&
                formik.errors.ModifiedBy && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.ModifiedBy}
                  </div>
                )}

                        </div>
                    </div>
                    <div class="sm-col-12 col-12 md:col-3 lg-col-3">
                        <div>
                            <InputField
                                classNames="field__container"
                                label="Modified On"
                                placeholder={"Enter"}
                                //   value={formik.values.CurrencyDescription}
                                value={
                                    formik.values.ModifiedOn

                                }
                                onChange={formik.handleChange("ModifiedOn")}

                            />
                             {formik.touched.ModifiedOn &&
                formik.errors.ModifiedOn && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.ModifiedOn}
                  </div>
                )}

                        </div>
                    </div>
                </div>




            </Card>


            <div className="next_container">
            {action === "add" && (
                <Button className="submit_button p-0" label="Save" disabled={!formik.isValid}
                    onClick={() => { formik.handleSubmit(); }}
                />
            )}
            </div>
            <div className="next_container">
            {action === "edit" && (
                <Button className="submit_button p-0" label="update" disabled={!formik.isValid}
                    // onClick={() => { formik.handleSubmit(); }}
                />
            )}
            </div>







        </div>
    );
}

export default AddCity;
