import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useFormik } from "formik";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import { Card } from "primereact/card";
import InputField from "../../../../components/InputField";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
// import TransactionCodeMasterDetailViewTable from "./TransactionCodeMasterDetailViewTable";
import TransactionCodeMasterEdit from "./TransactionCodeMasterEditTableview";
import NavBar from "../../../../components/NavBar";
import { Button } from "primereact/button";
import { patchTrascationcodeDetailsEdit } from "../store/transactionCodeMasterMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { PATCH_TRANSACTION_CODE_DETAILS_EDIT } from "../../../../redux/actionTypes";




const TransactionCodeEdit = () => {

  const { TransactioncodeList, loading } = useSelector(({ transactionCodeMasterReducer }) => {
    return {
      loading: transactionCodeMasterReducer?.loading,
      TransactioncodeList: transactionCodeMasterReducer?.TransactioncodeList,
    };
  });
  console.log(TransactioncodeList, "TransactioncodeList")

  const toastRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = [
    {
      label: "Transaction code",
      url: "/master/finance/transactioncode",
    },
    {
      label: "Edit Transaction Code",
    },
  ];

  const Initiate = { label: "Master" };

  const handleClick = () => {
    navigate("/master/finance/transactioncode");
  };

  const handleSubmit = (values) => {
    console.log(values, "valuesvalues")
    dispatch(patchTrascationcodeDetailsEdit(values));
    navigate("/master/finance/transactioncode");
  };

  const SetFormikValue = () => {
    const updatedValues = {
      TransactionCode: TransactioncodeList?.TransactionCode || "",
      TransactionName: TransactioncodeList?.TransactionName || "",
      Description: TransactioncodeList?.Description || "",
      TransactionBasis: TransactioncodeList?.TransactionBasis || "",
      MainAccountCode: TransactioncodeList?.MainAccountCode || "",
      MainAccountDescription: TransactioncodeList?.MainAccountDescription || "",
      SubAccountCode: TransactioncodeList?.SubAccountCode || "",
      SubAccountDescription: TransactioncodeList?.SubAccountDescription || "",
      BranchCode: TransactioncodeList?.BranchCode || "",
      BranchDescription: TransactioncodeList?.BranchDescription || "",
      Department: TransactioncodeList?.Department || "",
      DepartmentDescription: TransactioncodeList?.DepartmentDescription || "",
    };
    formik.setValues({ ...formik.values, ...updatedValues });
    console.log(updatedValues, "updatedValues")
  };

  const formik = useFormik({
    initialValues: {
      TransactionCode: "",
      TransactionName: "",
      Description: "",
      TransactionBasis: "",
      MainAccountCode: "",
      MainAccountDescription: "",
      SubAccountCode: "",
      SubAccountDescription: "",
      BranchCode: "",
      BranchDescription: "",
      Department: "",
      DepartmentDescription: "",
    },
    validate: (values) => {
      const errors = {};
      // Add your validation logic here
      if (!values.TransactionCode) {
        errors.TransactionCode = "Transaction Code is required";
      }
      // Add more validations as needed

      return errors;
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    SetFormikValue();
  }, [TransactioncodeList]);

  return (
    <div className="transactioncode__master__Edit__view">
      <NavBar />
      {/* <CustomToast ref={toastRef} message="Petty Cash Initiated Successfully"/> */}
      <div className="grid  m-0">
        <div className="col-12 md:col-12 lg:col-12">
          <div
            className="Transaction__Code__Master__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Edit Transaction Code
          </div>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Card className="mt-4">
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Code"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                // disabled={true}
                value={formik.values.TransactionCode}
                onChange={formik.handleChange("TransactionCode")}
                error={
                  formik.touched.TransactionCode &&
                  formik.errors.TransactionCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Name"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}

                value={formik.values.TransactionName}
                onChange={formik.handleChange("TransactionName")}
                error={
                  formik.touched.TransactionName &&
                  formik.errors.TransactionName
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                value={formik.values.Description}
                onChange={formik.handleChange("Description")}
                error={
                  formik.touched.Description &&
                  formik.errors.Description
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Transaction Basis"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.TransactionBasis}
                // options={BankAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("TransactionBasis", e.value);
                  //   handleAccountcode(e.value.TransactionBasis);
                }}
                // optionLabel="Description"
                error={
                  formik.touched.TransactionBasis &&
                  formik.errors.TransactionBasis
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Main Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.MainAccountCode}
                // options={BankAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("MainAccountCode", e.value);
                  //   handleAccountcode(e.value.MainAccountCode);
                }}
                // optionLabel="MainAccountCode"
                error={
                  formik.touched.MainAccountCode &&
                  formik.errors.MainAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Main Account Description"
                // placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                value={formik.values.MainAccountDescription}
                onChange={formik.handleChange("MainAccountDescription")}
                error={
                  formik.touched.MainAccountDescription &&
                  formik.errors.MainAccountDescription
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Sub Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              // value={formik.values.Description}
              // options={BankAccountCode}
              // onChange={(e) => {
              //   console.log(e.value);
              //   formik.setFieldValue("Description", e.value);
              //   handleAccountcode(e.value.);
              // }}
              // optionLabel="Description"
              // error={
              //   formik.touched.BankAccountNumber &&
              //   formik.errors.BankAccountNumber
              // }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
              // value={formik.values.TransactionName}
              // onChange={formik.handleChange("TransactionName")}
              // error={
              //   formik.touched.TransactionName &&
              //   formik.errors.TransactionName
              // }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Branch Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              // value={formik.values.Description}
              // options={BankAccountCode}
              // onChange={(e) => {
              //   console.log(e.value);
              //   formik.setFieldValue("Description", e.value);
              //   handleAccountcode(e.value.);
              // }}
              // optionLabel="Description"
              // error={
              //   formik.touched.BankAccountNumber &&
              //   formik.errors.BankAccountNumber
              // }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Branch Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
              // value={formik.values.TransactionName}
              // onChange={formik.handleChange("TransactionName")}
              // error={
              //   formik.touched.TransactionName &&
              //   formik.errors.TransactionName
              // }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Department"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              // value={formik.values.Description}
              // options={BankAccountCode}
              // onChange={(e) => {
              //   console.log(e.value);
              //   formik.setFieldValue("Description", e.value);
              //   handleAccountcode(e.value.);
              // }}
              // optionLabel="Description"
              // error={
              //   formik.touched.BankAccountNumber &&
              //   formik.errors.BankAccountNumber
              // }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Department Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
              // value={formik.values.TransactionName}
              // onChange={formik.handleChange("TransactionName")}
              // error={
              //   formik.touched.TransactionName &&
              //   formik.errors.TransactionName
              // }
              />
            </div>
          </div>
        </Card>
      </form>
      {/* <TransactionCodeMasterDetailViewTable/> */}
      <TransactionCodeMasterEdit />
      <div className="btn__container">
        <Button
          label="Update"
          className="add__btn"
          onClick={formik.handleSubmit}
          disabled={!formik.isValid}
        />
      </div>
    </div>
  );
};

export default TransactionCodeEdit
