import { Card } from 'primereact/card'
import React, { useState } from 'react'
import InputTextField from '../../../component/inputText'
import { Checkbox } from "primereact/checkbox";
import DropdownField from '../../../component/DropdwonField';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postClaimDetailsData } from '../store/claimDetailsMiddleWare';




const ClaimDetailsCard = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/agent/claimrequest/sendmail')
    }

    const { claimDetailsViewData, loading } = useSelector(
        ({ claimDetailsMainReducers }) => {
            return {
                loading: claimDetailsMainReducers?.loading,
                claimDetailsViewData: claimDetailsMainReducers?.claimDetailsViewData,

            };
        }
    );
    console.log(claimDetailsViewData.policyNumber, "endrosementViewData");

    const formInitialValue = {
        InsuranceCompanyN: "",
        name: "",
        contactNumber: "",
        plateNumber: "",
        unit: "",
        shop: "",

    };
    const customValidation = (values) => {
        const errors = {};

        if (!values.InsuranceCompanyN) {
            errors.InsuranceCompanyN = "This field is required";
        }
        if (!values.name) {
            errors.name = "This field is required";
        }

        if (!values.contactNumber) {
            errors.contactNumber = "This field is required";
        }

        if (!values.plateNumber) {
            errors.plateNumber = "This field is required";
        }

        if (!values.unit) {
            errors.unit = "This field is required";
        }
        if (!values.shop) {
            errors.shop = "This field is required";
        }

        return errors;
    };
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(postClaimDetailsData(formik.values))
        navigate('/agent/claimrequest/sendmail')
    }
    const formik = useFormik({
        initialValues: formInitialValue,
        validate: customValidation,
        onSubmit: handleSubmit,
    });
    const handleCheckboxChange = (e) => {
        setChecked(e.checked);
        if (e.checked) {
            formik.setValues({
                InsuranceCompanyName: claimDetailsViewData.InsuranceCompanyName || '',
                PolicyNumber: claimDetailsViewData.PolicyNumber || '',
                PolicyHolderName: claimDetailsViewData.PolicyHolderName || '',
                HouseNo: claimDetailsViewData.HouseNo || '',
                Barangay: claimDetailsViewData.Barangay || '',
                CountryName: claimDetailsViewData.CountryName || '',
                Province: claimDetailsViewData.Province || '',
                CityName: claimDetailsViewData.CityName || '',
                ZipCode: claimDetailsViewData.ZipCode || '',
            });
        } else {
            formik.resetForm();
        }
    };


    return (
        <div className="claim__details__card__container mt-4">
            <Card>
                <div className="claim__details__card__container__title">
                    Claim Request
                </div>
                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Insurance Company Name*"
                            value={claimDetailsViewData.InsuranceCompanyName}
                        // onChange={formik.handleChange("PolicyNumber")}
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Policy Number"
                            value={claimDetailsViewData.policyNumber}
                        // onChange={formik.handleChange("PolicyNumber")}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Policy Holder Name"
                            value={claimDetailsViewData.PolicyHolderName}
                        // onChange={formik.handleChange("PolicyHolderName")}
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="House No / Unit No / Street"
                            value={claimDetailsViewData.HouseNo}
                        // onChange={formik.handleChange("HouseNo")}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Barangay / Subd"
                            value={claimDetailsViewData.Barangay}
                        // onChange={formik.handleChange("Barangay")}
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Country"
                            value={claimDetailsViewData.CountryName}
                        // onChange={formik.handleChange("CountryName")}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Province"
                            value={claimDetailsViewData.Province}
                        // onChange={formik.handleChange("Province")}
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="City"
                            value={claimDetailsViewData.CityName}
                        // onChange={formik.handleChange("CityName")}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="ZIP Code"
                            value={claimDetailsViewData.ZipCode}
                        // onChange={formik.handleChange("ZipCode")}
                        />
                    </div>
                </div>
                <div className="check__box__container mt-3">
                    <Checkbox onChange={handleCheckboxChange} checked={checked}></Checkbox>
                    <div className="check__box__container__title">Same as Policy Holder</div>
                </div>

                <div className="grid mt-3">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Driver’s name"
                            value={checked ? claimDetailsViewData.PolicyHolderName : ''}
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="House No / Unit No / Street"
                            value={checked?claimDetailsViewData.HouseNo:""}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Barangay / Subd"
                            value={checked?claimDetailsViewData.Barangay:""}
                        />
                    </div>
                </div>

                <div className="grid m-0 mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField 
                        label="Country"
                        value={checked?claimDetailsViewData.CountryName:""}
                         />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField label="Province"
                            value={checked?claimDetailsViewData.Province:""}
                        />
                    </div>
                </div>

                <div className="grid m-0 mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="City"
                            value={checked?claimDetailsViewData.CityName:""}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="ZIP Code"
                            value={checked?claimDetailsViewData.ZipCode:""}
                        />
                    </div>
                </div>

                <div className="claim__details__card__sub__title mt-3 ml-2">Third Party Details (If Applicable)</div>
                <div>
                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange("name")}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.name}
                                </div>
                            )}
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Contact Number"
                                value={formik.values.contactNumber}
                                onChange={formik.handleChange("contactNumber")}
                            />
                            {formik.touched.contactNumber && formik.errors.contactNumber && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.contactNumber}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Plate Number"
                                value={formik.values.plateNumber}
                                onChange={formik.handleChange("plateNumber")}
                            />
                            {formik.touched.plateNumber && formik.errors.plateNumber && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.plateNumber}
                                </div>
                            )}
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Unit"
                                value={formik.values.unit}
                                onChange={formik.handleChange("unit")}
                            />
                            {formik.touched.unit && formik.errors.unit && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.unit}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Shop"
                                value={formik.values.shop}
                                onChange={formik.handleChange("shop")}
                            />
                            {formik.touched.shop && formik.errors.shop && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.shop}
                                </div>
                            )}
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Insurance Company Name"
                                value={formik.values.InsuranceCompanyN}
                                onChange={formik.handleChange("InsuranceCompanyN")}
                            />
                            {formik.touched.InsuranceCompanyN && formik.errors.InsuranceCompanyN && (
                                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                                    {formik.errors.InsuranceCompanyN}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='next_but_container'>
                        <Button label='Next' onClick={formik.handleSubmit} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ClaimDetailsCard
