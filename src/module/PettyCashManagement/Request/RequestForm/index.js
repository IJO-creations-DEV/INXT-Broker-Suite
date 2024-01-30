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
import { Calendar } from "primereact/calendar";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SvgDeleteIcon from "../../../../assets/icons/SvgDeleteIcon";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";

const initialValue = {
  PettyCashCode: "",
  PettyCashdescription: "",
  Requestnumber: "",
  RequesterName: "",
  BranchCode: "",
  Branchdescription: "",
  DepartmentCode: "",
  Departmentdescription: "",
  TransactionCode: "",
  TransactionNumber: "",
  RequestDate: "",
};
const RequestForm = ({ action }) => {
  console.log(action, "component working fine");
  const [value, setValue] = useState(null);
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("first", action);
  const [checked, setChecked] = useState(false);

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
    let errors = {};

    if (!values.TransactionCode) {
      errors.TransactionCode = "Petty Cash Code is required";
    }

    // if (!values.TransactionNumber) {
    //   errors.TransactionNumber = "TransactionNumber is required";
    // }

    // if (!values.BranchCode) {
    //   errors.BranchCode = "Branch Code is required";
    // }

    // if (!values.DepartmentCode) {
    //   errors.DepartmentCode = "Department Code is required";
    // }
    return errors;
  };
  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    textAlign: "center",
  };

  const items = [
    {
      label: "Petty Cash",
      command: () => navigate("/accounts/pettycash/pettycashrequest"),
    },
    {
      label: "Add Request",
      to: "/accounts/pettycash/addrequest",
    },
  ];
  const Initiate = { label: "Accounts" };
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashrequest");
  };

  const handleAddClick = () => {
    setVisible(true);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handlePettyCashDescribtion = (value) => {
    formik.setFieldValue("PettyCashCode", value);

    let description = "";
    let Requestnumber = "";
    switch (value.pettycashcode) {
      case "PC001":
        description = "PC-1";
        break;
      case "PC002":
        description = "PC-2";
        break;
      case "PC003":
        description = "PC-3";
        break;
      // case "PC0131":
      //   description = "PC-4";
      //   break;
      default:
        description = "Unknown";
        break;
    }

    switch (value.pettycashcode) {
      case "PC001":
        Requestnumber = "29292";
        break;
      case "PC002":
        Requestnumber = "20202";
        break;
      case "PC003":
        Requestnumber = "29292";
        break;
      // case "PC0131":
      //   Requestnumber = "19292";
      //   break;
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
      case "PHP001":
        Branch = "Branch-1";
        break;
      case "PHP002":
        Branch = "Branch-2";
        break;
      case "PHP003":
        Branch = "Branch-3";
        break;
      // case "Branch00123":
      //   Branch = "Branch-4";
      //   break;
      default:
        Branch = "Unknown";
        break;
    }
    formik.setFieldValue("Branchdescription", Branch);
  };
  const handleDepart = (value) => {
    let Depart = "";
    switch (value) {
      case "FIN":
        Depart = "Depart-1";
        break;
      case "MKT":
        Depart = "Depart-2";
        break;
      case "IT":
        Depart = "Depart-3";
        break;
      case "SLS":
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
            {action === "view"
              ? "Petty Cash Request View"
              : action === "edit"
              ? "Edit Petty Cash Request"
              : "Add Request"}
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
            <div class="col-12 md:col-6 lg:col-3">
              <label className="labelfield_container">Date</label>
              <Calendar
                showIcon
                // placeholder="Select"

                className="calendar_container"
                value={formik.values.Date}
                // minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("Date", e.target.value);
                }}
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Transaction Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.TransactionCode}
                options={PettyCashCode}
                name="PettyCashCode"
                onChange={(e) => {
                  formik.setFieldValue("TransactionCode", e.value).then(() => {
                    handlePettyCashDescribtion(e.value);
                  });
                }}
                optionLabel="pettycashcode"
                error={
                  formik.touched.TransactionCode &&
                  formik.errors.TransactionCode
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Number"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.TransactionNumber}
                onChange={formik.handleChange("TransactionNumber")}
                error={
                  formik.touched.TransactionNumber &&
                  formik.errors.TransactionNumber
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <label className="labelfield_container">Request Date</label>
              <Calendar
                showIcon
                // placeholder="Select"

                className="calendar_container"
                value={formik.values.RequestDate}
                // minDate={minDate}
                onChange={(e) => {
                  formik.setFieldValue("RequestDate", e.target.value);
                }}
                dateFormat="yy-mm-dd"
              />
            </div>

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
          </div>
          <div className="grid mt-1">
            <div className="col-12 input__view">
              <div className="flex checkbox__container">
                <Checkbox
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                ></Checkbox>
                <label className="labelfield_container">Cash in advance</label>
              </div>
            </div>
          </div>
        </Card>
      </form>

      {action === "edit" || action === "view" ? (
        <>
          <Card className="mt-6">
            <div className="sub__container grid ">
              <div className="sub__container__title col-12 md:col-6 lg:col-6">
                <div className="sub__request__title">Request List</div>
              </div>
              <div className="col-12 md:col-6 lg:col-6">
                <div className="btn__container">
                  <Button
                    label="Add"
                    icon={<SvgAdd color={"#fff"} />}
                    className="add__btn"
                    onClick={() => {
                      handleAddClick();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="table__container">
              <DataTable
                // value={AddRequestTable}
                tableStyle={{ minWidth: "50rem" }}
                // emptyMessage={isEmpty ? emptyTableIcon : null}
                scrollable={true}
                scrollHeight="40vh"
              >
                <Column
                  field="Narration"
                  header="Narration"
                  headerStyle={headerStyle}
                  sortable
                ></Column>
                <Column
                  field="Amount"
                  header="Amount"
                  headerStyle={headerStyle}
                  sortable
                ></Column>
                <Column
                  field="Action"
                  header="Action"
                  headerStyle={{
                    ...headerStyle,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  body={(rowData) => (
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        icon={<SvgDeleteIcon />}
                        className="delete__btn"
                        // onClick={() => handleDelete(rowData.id)}
                      />
                    </div>
                  )}
                ></Column>
              </DataTable>
            </div>
          </Card>
          <div className="grid mt-4">
            <div className="col-12 md:col-3 lg-col-3 ">
              <InputField
                classNames="input__filed"
                label="Total Amount"
                // placeholder="Enter"
                // disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                // value={formik.values.TransactionNumber}
                // onChange={formik.handleChange("TransactionNumber")}
                // error={
                //   formik.touched.TransactionNumber && formik.errors.TransactionNumber
                // }
              />
            </div>
          </div>
        </>
      ) : null}

      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Next"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </div>

      <Dialog
        header="Add Request Item"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        headerStyle={{
          color: "#343434",
          fontFamily: "Inter, sans-serif",
          fontSize: 16,
          fontWeight: 500,
          // lineHeight: "150%",
        }}
        className="dailog__container"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="grid">
            <div className="col-12 md:col-8 lg:col-8">
              <InputField
                // classNames="input__filed"
                classNames="fielduniqueone__container"
                label="Narration"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Narration}
                onChange={formik.handleChange("Narration")}
                error={formik.touched.Narration && formik.errors.Narration}
              />
            </div>
            <div className="col-12 md:col-4 lg:col-4">
              <InputField
                classNames="fielduniqueone__container"
                label="Amount"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Amount}
                onChange={formik.handleChange("Amount")}
                error={formik.touched.Amount && formik.errors.Amount}
              />
            </div>
          </div>
        </form>
        <div className="grid">
          <div className="col-12 md:col-12 lg:col-12 bt__container">
            <Button
              label="Save"
              className="add__btn"
              // onClick={() => {
              //   formik.handleSubmit();
              // }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RequestForm;
