import React, { useState, useRef } from "react";
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
import { Button } from "primereact/button";
import CustomToast from "../../../../components/Toast";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { PettyCashCode, Name, Branchcode, Departcode } from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { postAddRequestMiddleware } from "../store/pettyCashRequestMiddleware";

const initialValue = {
  PettyCashCode: "",
  PettyCashdescription: "",
  Requestnumber: "",
  RequesterName: "",
  BranchCode: "",
  Branchdescription: "",
  DepartmentCode: "",
  Departmentdescription: "",
};
const RequestForm = () => {
  const [value, setValue] = useState(null);
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { RequestList, loading } = useSelector(
    ({ pettyCashRequestReducer }) => {
      return {
        loading: pettyCashRequestReducer?.loading,
        RequestList: pettyCashRequestReducer?.RequestList,
      };
    }
  );
 
  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: RequestList?.length + 1,
    };
    dispatch(postAddRequestMiddleware(valueWithId));
    // toastRef.current.showToast();
    // setTimeout(() => {
    navigate("/accounts/pettycash/addrequesttable");
    // }, 3000);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.PettyCashCode) {
      errors.PettyCashCode = "Petty Cash Code is required";
    }

    if (!values.RequesterName) {
      errors.RequesterName = "Requester Name is required";
    }

    if (!values.BranchCode) {
      errors.BranchCode = "Branch Code is required";
    }

    if (!values.DepartmentCode) {
      errors.DepartmentCode = "Department Code is required";
    }
    return errors;
  };


  const items = [
    { label: "Petty Cash", command: () => navigate("/accounts/pettycash/pettycashrequest") },
    {
      label: "Add Request",
      to: "/accounts/pettycash/addrequest",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashrequest");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handlePettyCashDescribtion = (value) => {
    let description = "";
    let Requestnumber = "";
    switch (value.pettycashcode) {
      case "PC0128":
        description = "PC-1";
        break;
      case "PC0129":
        description = "PC-2";
        break;
      case "PC0130":
        description = "PC-3";
        break;
      case "PC0131":
        description = "PC-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    switch (value.pettycashcode) {
      case "PC0128":
        Requestnumber = "29292";
        break;
      case "PC0129":
        Requestnumber = "20202";
        break;
      case "PC0130":
        Requestnumber = "29292";
        break;
      case "PC0131":
        Requestnumber = "19292";
        break;
      default:
        Requestnumber = "Unknown";
        break;
    }
    formik.setFieldValue("Requestnumber", Requestnumber);
    formik.setFieldValue("PettyCashdescription", description);
  };

  const handleBranch = (value) => {
    let Branch = "";
    switch (value) {
      case "Branch00322":
        Branch = "Branch-1";
        break;
      case "Branch00123":
        Branch = "Branch-2";
        break;
      case "Branch00923":
        Branch = "Branch-3";
        break;
      case "Branch00123":
        Branch = "Branch-4";
        break;
      default:
        Branch = "Unknown";
        break;
    }
    formik.setFieldValue("Branchdescription", Branch);
  };
  const handleDepart = (value) => {
    let Depart = "";
    switch (value) {
      case "Depart00322":
        Depart = "Depart-1";
        break;
      case "Depart00123":
        Depart = "Depart-2";
        break;
      case "Depart00923":
        Depart = "Depart-3";
        break;
      case "Depart00123":
        Depart = "Depart-4";
        break;
      default:
        Depart = "Unknown";
        break;
    }
    formik.setFieldValue("Departmentdescription", Depart);
  };

  return (
    <div className="request__form">
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Add Request
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
              <DropDowns
                className="input__filed"
                label="Petty Cash Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.PettyCashCode}
                options={PettyCashCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("PettyCashCode", e.value);
                  handlePettyCashDescribtion(e.value);
                }}
                optionLabel="pettycashcode"
                error={
                  formik.touched.PettyCashCode && formik.errors.PettyCashCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.PettyCashdescription}
                onChange={formik.handleChange("PettyCashdescription")}
                error={
                  formik.touched.PettyCashdescription &&
                  formik.errors.PettyCashdescription
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Request number"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Requestnumber}
                onChange={formik.handleChange("Requestnumber")}
                error={
                  formik.touched.Requestnumber && formik.errors.Requestnumber
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Requester Name"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.RequesterName}
                options={Name}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("RequesterName", e.value);
                }}
                optionLabel="Name"
                error={
                  formik.touched.RequesterName && formik.errors.RequesterName
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Branch Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.BranchCode}
                options={Branchcode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("BranchCode", e.value);
                  handleBranch(e.value.Branchcode);
                }}
                optionLabel="Branchcode"
                error={formik.touched.BranchCode && formik.errors.BranchCode}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Branch description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Branchdescription}
                onChange={formik.handleChange("Branchdescription")}
                error={
                  formik.touched.Branchdescription &&
                  formik.errors.Branchdescription
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Department Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.DepartmentCode}
                options={Departcode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("DepartmentCode", e.value);
                  handleDepart(e.value.Departcode);
                }}
                optionLabel="Departcode"
                error={
                  formik.touched.DepartmentCode && formik.errors.DepartmentCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Department description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Departmentdescription}
                onChange={formik.handleChange("Departmentdescription")}
                error={
                  formik.touched.Departmentdescription &&
                  formik.errors.Departmentdescription
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 check__box__container">
              <TriStateCheckbox
                value={value}
                onChange={(e) => setValue(e.value)}
              />
              <div className="check__box__text">Cash in advance</div>
            </div>
          </div>
        </Card>
      </form>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Next"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
