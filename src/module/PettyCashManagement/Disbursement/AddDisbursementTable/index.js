import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import CustomToast from "../../../../components/Toast";
import SvgTable from "../../../../assets/icons/SvgTable";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import InputField from "../../../../components/InputField";
import SvgEditIcon from "../../../../assets/icons/SvgEditicons";
import { Card } from "primereact/card";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import DropDowns from "../../../../components/DropDowns";
import { Maincode, SubAccount } from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { postEditDisbursmentMiddleware } from "../store/pettyCashDisbursementMiddleware";

const initialValue = {
  RequestNumber: "",
  Requester: "",
  Amount: "",
  VAT: "",
  EWT: "",
  MainAccountCode: "",
  MainAccountDescription: "",
  SubAccountCode: "",
  SubAccountDescription: "",
  Remarks: "",
};

const AddDisbursementTable = () => {
  const [visible, setVisible] = useState(false);
  const [moduleData, setModuleData] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalAmounts, setTotalAmounts] = useState(0);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const navigate = useNavigate();

  console.log(selectedRows, "selectedRows");
  const { AddDisbursmentTable, loading } = useSelector(
    ({ pettyCashDisbursementReducers }) => {
      return {
        loading: pettyCashDisbursementReducers?.loading,
        AddDisbursmentTable: pettyCashDisbursementReducers?.AddDisbursmentTable,
      };
    }
  );

  const isEmpty = AddDisbursmentTable.length === 0;

  const handleSubmit = () => {
    toastRef.current.showToast();
    {
      setTimeout(() => {
        navigate("/accounts/pettycash/disbursement");
      }, 2000);
    }
  };

  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );

  const items = [
    { label: "Petty Cash", command: () => navigate( "/accounts/pettycash/disbursement" )},
    {
      label: "Add Disbursement",
      to: "/accounts/pettycash/adddisbursementtable",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = (rowData) => {
    console.log(rowData,"rowData")
    const clickedAmount = parseInt(rowData.TotalAmount);
    setTotalAmounts((prevTotalAmounts) => prevTotalAmounts + clickedAmount);
  };

  const handleBack = () => {
    navigate("/accounts/pettycash/adddisbursement");
  };
  const headaction ={
    justifyContent: 'center',
// textalign: center,
fontSize: 16,
fontFamily: "Inter var",
fontWeight: 500,
padding: 10,
// paddingTop:4,
color: "#000",
border:" none",
display: "flex"
  }

  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 8,
    color: "#000",
    border: "none",
    textAlign: "center",
    paddingLeft:0
  };
  const handleEdit = (data) => {
    console.log(data, "sata");

    setModuleData({ ...data });
    setVisible(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.MainAccountCode) {
      errors.MainAccountCode = "Main Account Code is required";
    }

    if (!values.SubAccountCode) {
      errors.SubAccountCode = "Sub Account Code is required";
    }

    return errors;
  };

  const handleSave = (value) => {
    console.log(value, "-value");
    dispatch(postEditDisbursmentMiddleware(value));
    setVisible(false);
    setshow(true);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  const handlePettyCashSubAccountCodedecription = (value) => {
    let description = "";
    switch (value.SubAccount) {
      case "Sub1929920":
        description = "SUB-1";
        break;
      case "Sub8299201":
        description = "SUB-2";
        break;
      case "Sub9920010":
        description = "SUB-3";
        break;
      case "Sub1818811":
        description = "SUB-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    formik.setFieldValue("SubAccountDescription", description);
  };

  const handlePettyCashMainAccountDescribtion = (value) => {
    let description = "";
    switch (value.Maincode) {
      case "192992":
        description = "Main-1";
        break;
      case "199191":
        description = "Main-2";
        break;
      case "101019":
        description = "Main-3";
        break;
      case "181929":
        description = "Main-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    formik.setFieldValue("MainAccountDescription", description);
  };
 

  const SetFormikValue = () => {
    const updatedValues = {
      RequestNumber: moduleData?.RequestNumber,
      Requester: moduleData?.RequesterName,
    };

    formik.setValues({ ...formik.values, ...updatedValues });
  };

  useEffect(() => {
    SetFormikValue();
    formik.setFieldValue("id", moduleData?.id);
    formik.setFieldValue("TotalAmount", moduleData?.TotalAmount || "");
  }, [moduleData]);


  console.log(AddDisbursmentTable, "RequestList");
  return (
    <div className="add__disbursement__table">
      <CustomToast
        ref={toastRef}
        message="Petty Cash Disbursment Successfully"
      />
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleBack();
            }}
          >
            <SvgBackArrow />
            Add Disbursement
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
      <Card>
        <div className="sub__container grid ">
          <div className="sub__container__title col-12 md:col-12 lg:col-6">
            <div className="sub__request__title">Request List</div>
          </div>
        </div>
        <div className="table__container">
          <DataTable
            value={AddDisbursmentTable}
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage={isEmpty ? emptyTableIcon : null}
            selection={selectedRows}
            onSelectionChange={(e) => setSelectedRows(e.value)}
            selectionMode="checkbox"
          >
            {/* <Column
              header={<input type="checkbox" />}
              body={(rowData) => (
                <input
                  type="checkbox"
                  onClick={() => {
                    handleClick(rowData); 
                  }}
                />
              )}
              headerStyle={headerStyle}
              style={{ textAlign: "center" }}
            /> */}

<Column
headerStyle={headaction}
              selectionMode="multiple"
              selectedItem
              style={{textAlign:'center'}}
              // headerStyle={{ width: "4rem" }}
            ></Column>
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="RequesterName"
              header="Requester"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Remarks"
              header="Remarks"
              headerStyle={headerStyle}
              body={(rowData) => rowData.Remarks || "-"}
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              body={(rowData) => rowData.Amount || "-"}
              sortable
            ></Column>
            <Column
              field="VAT"
              header="VAT%"
              headerStyle={headerStyle}
              body={(rowData) => rowData.VAT || "-"}
            ></Column>
            <Column
              field="EWT"
              header="EWT%"
              headerStyle={headerStyle}
              body={(rowData) => rowData.EWT || "-"}
            ></Column>
            <Column
              field="MainAccount"
              header="Main Account"
              headerStyle={headerStyle}
              body={(rowData) => rowData.MainAccount || "-"}
            ></Column>
            <Column
              field="SubAccount"
              header="Sub Account"
              headerStyle={headerStyle}
              body={(rowData) => rowData.SubAccount || "-"}
            ></Column>
            <Column
              field="TotalAmount"
              header="Total Amount"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="Action"
              header="Action"
              headerStyle={headaction}
              style={{textAlign:'center'}}
              body={(rowData) => (
                <Button
                  icon={<SvgEditIcon />}
                  className="delete__btn"
                  onClick={() => handleEdit(rowData)}
                />
              )}
            ></Column>
          </DataTable>
        </div>
      </Card>
      <div className="grid mt-4">
        <div className="col-12 md:col-4 lg:col-4">
          <InputField
            classNames="input__filed"
            label="Total"
            // placeholder="Enter"
            disabled={true}
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
            value={totalAmounts}
          />
        </div>
      </div>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Approve"
              className="add__btn"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
      <Dialog
        header="Edit Disbursement"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
        headerStyle={{
          color: "#343434",
          fontFamily: "Inter var",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "150%",
        }}
        className="dailog__container"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="Request Number"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.RequestNumber}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="Requester"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Requester}
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="Amount"
                // placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Amount}
                onChange={formik.handleChange("Amount")}
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="VAT (Optional)"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.VAT}
                onChange={formik.handleChange("VAT")}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="EWT (Optional)"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.EWT}
                onChange={formik.handleChange("EWT")}
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-4 lg:col-4">
              <DropDowns
                className="input__filed"
                label="Main Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.MainAccountCode}
                options={Maincode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("MainAccountCode", e.value);
                  handlePettyCashMainAccountDescribtion(e.value);
                }}
                optionLabel="Maincode"
                error={
                  formik.touched.MainAccountCode &&
                  formik.errors.MainAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-8 lg:col-8">
              <InputField
                classNames="input__filed"
                label="Main Account Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.MainAccountDescription}
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-4 lg:col-4">
              <DropDowns
                className="input__filed"
                label="Sub Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.SubAccountCode}
                options={SubAccount}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("SubAccountCode", e.value);
                  handlePettyCashSubAccountCodedecription(e.value);
                }}
                optionLabel="SubAccount"
                error={
                  formik.touched.SubAccountCode && formik.errors.SubAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-8 lg:col-8">
              <InputField
                classNames="input__filed"
                label="Sub Account Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.SubAccountDescription}
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-12 lg:col-12">
              <InputField
                classNames="input__filed"
                label="Remarks (Optional)"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Remarks}
                onChange={formik.handleChange("Remarks")}
              />
            </div>
          </div>
        </form>
        <div className="grid">
          <div className="col-12 md:col-12 lg:col-12 bt__container">
            <Button
              label="Update"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddDisbursementTable;
