import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import InputField from "../../../../components/InputField";
import DropDowns from "../../../../components/DropDowns";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import NavBar from "../../../../components/NavBar";

import { useFormik } from "formik";

import ArrowLeftIcon from "../../../../assets/icons/ArrowLeftIcon";
import CustomToast from "../../../../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";

const Payables = () => {
    const toastRef = useRef(null);

    const initialValues = {
        ReportCriteria: "",
        FromDate: new Date(),
        ToDate: new Date(),
        Agent: "",
        Company: "",
        Branch: "",
        Client: ""
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const items = [
        {
            label: "Operational Reports",
        },
        {
            label: "Payables",
        },
    ];

    const BranchCode = [
        { label: "ARIANS INSURANCE BROKERS INC", value: "ARIANS INSURANCE BROKERS INC" },
        { label: "Branch1", value: "Branch1" },
        { label: "Branch2", value: "Branch2" },
    ];

    const CompanyCode = [
        { label: "ARIANS INSURANCE BROKERS INC,", value: "ARIANS INSURANCE BROKERS INC" },
        // { label: "Branch1", value: "Branch1" },
        // { label: "Branch2", value: "Branch2" },
    ];

    const ClientCode = [
        { label: "iorta", value: "iorta" },
        { label: "iNXT", value: "iNXT" },
        
    ];

    const AgentCode = [
        { label: "Rohan", value: "Rohan" },
        { label: "Manoj", value: "Manoj" },
        
    ];
    const home = { label: "Reports" };
    const DepartmentCode = [
        { label: "Overall", value: "Overall" },
        { label: "Agent", value: "Agent" },
        { label: "Principle Insurance", value: "Principle Insurance" },
        { label: "Branch", value: "Branch" },
    ];
    // const customValidation = (values) => {
    //     const errors = {};

    //     if (!values.PolicyNumber) {
    //         errors.PolicyNumber = "This field Code is required";
    //     }
    //     if (!values.Production) {
    //         errors.Production = "This field is required";
    //     }
    //     if (!values.Mortgage) {
    //         errors.Mortgage = "This field is required";
    //     }

    //     return errors;
    // };
    const dispatch = useDispatch();
    const handleSubmit = (values) => {

        console.log(values, "find values");
        toastRef.current.showToast();

        const pdfUrl = "https://zealeyeai-my.sharepoint.com/personal/infra_zealeye_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs%2FReports%2FPayables%5FFor%5FRemittance%2Epdf&parent=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs%2FReports&ga=1.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const formik = useFormik({
        initialValues: initialValues,
        // validate: customValidation,
        onSubmit: handleSubmit,
    });


    const navigate = useNavigate();
    const handlePrint = () => {
        toastRef.current.showToast();
        // formik.resetForm();

        // navigate("/accounts/correctionsjv/correctionsjvdetails")
    };

    return (
        <div className="reports__Payables__container">
            <CustomToast
                ref={toastRef}
                message="Report generated"
            />
            <div className="reports__production__heading">Reports</div>
            <BreadCrumb
                model={items}
                home={home}
                className="breadcrumbs__container"
                separatorIcon={<SvgDot color={"#000"} />}
            />

            <Card className="reports__card__container">
                <div class="grid">
                    <div class="col-12 md:col-6 lg:col-3">
                        <DropDowns
                            className="dropdown__container"
                            label="Report Criteria*"
                            value={formik.values.ReportCriteria}
                            onChange={(e) => {
                                formik.setFieldValue("ReportCriteria", e.value);
                                const isCriteria1 = e.value === "Criteria1";
                                console.log("first", isCriteria1)
                                formik.setFieldValue("DepartmentCode", isCriteria1 ? null : formik.values.DepartmentCode);
                                formik.setFieldValue("Company", isCriteria1 ? null : formik.values.Company);
                                formik.setFieldValue("Branch", isCriteria1 ? null : formik.values.Branch);
                                formik.setFieldValue("Client", isCriteria1 ? null : formik.values.Client);
                            }}
                            options={DepartmentCode}
                            optionLabel="label"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            disabled={true} textColor="#B1B1B1"
                        />
                    </div>
                    <div class="col-12 md:col-6 lg:col-3">
                        <label className="labelfield_container">From Date</label>
                        <Calendar

                            showIcon
                            // placeholder="Select"

                            className="calendar_container"
                            value={formik.values.FromDate}
                            minDate={minDate}
                            onChange={(e) => {
                                formik.setFieldValue("FromDate", e.target.value);
                            }}
                            dateFormat="yy-mm-dd"

                        />
                    </div>
                    <div class="col-12 md:col-6 lg:col-3">
                        <label className="labelfield_container">To Date</label>
                        <Calendar
                            showIcon
                            // placeholder="Select"

                            className="calendar_container"
                            value={formik.values.ToDate}
                            minDate={minDate}
                            onChange={(e) => {
                                formik.setFieldValue("ToDate", e.target.value);
                            }}
                            dateFormat="yy-mm-dd"
                            error={formik.errors.AccountingPeriodStart}
                        />
                    </div>
                </div>
                <div class="grid">
                    <div class="col-12 md:col-6 lg:col-3">
                        <DropDowns
                            className="dropdown__container"
                            disabled={true} textColor="#B1B1B1"

                            label="Agent"
                            // value={departmentcode}
                            // onChange={(e) => setDepartmentCode(e.value)}
                            value={formik.values.DepartmentCode}
                            onChange={(e) => formik.setFieldValue("DepartmentCode", e.value)}
                            // options={DepartmentCode}
                            optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}


                        />
                    </div>
                    <div class="col-12 md:col-6 lg:col-3">
                        <DropDowns
                            className="dropdown__container"

                            label="Company"
                            // value={departmentcode}
                            // onChange={(e) => setDepartmentCode(e.value)}
                            value={formik.values.DepartmentCode}
                            onChange={(e) => formik.setFieldValue("DepartmentCode", e.value)}
                            // options={DepartmentCode}
                            optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            disabled={true} textColor="#B1B1B1"
                        />
                    </div>
                    <div class="col-12 md:col-6 lg:col-3">
                        <DropDowns
                            className="dropdown__container"

                            label="Branch"
                            // value={departmentcode}
                            // onChange={(e) => setDepartmentCode(e.value)}
                            value={formik.values.DepartmentCode}
                            onChange={(e) => formik.setFieldValue("DepartmentCode", e.value)}
                            // options={DepartmentCode}
                            optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            disabled={true} textColor="#B1B1B1"
                        />
                    </div>
                    <div class="col-12 md:col-6 lg:col-3">
                        <DropDowns
                            className="dropdown__container"
                            label="Client"

                            // value={departmentcode}
                            // onChange={(e) => setDepartmentCode(e.value)}
                            value={formik.values.DepartmentCode}
                            onChange={(e) => formik.setFieldValue("DepartmentCode", e.value)}
                            // options={DepartmentCode}
                            optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            disabled={true} textColor="#B1B1B1"
                        />

                    </div>
                </div>
            </Card>

            <div className="Submit__but_reports">
                <Button
                    className="submit_button p-0"
                    label="Generate"
                    // disabled={!formik.isValid}
                    onClick={() => {
                        formik.handleSubmit();
                    }}
                />
            </div>
        </div>
    );
};

export default Payables;
