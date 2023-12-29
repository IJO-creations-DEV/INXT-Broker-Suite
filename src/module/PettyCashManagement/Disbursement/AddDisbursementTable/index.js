import React, { useState, useRef } from "react";
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
import SvgEditIcon from "../../../../assets/icons/SvgEditIcon";
import { Card } from "primereact/card";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import DropDowns from "../../../../components/DropDowns";
import { Maincode, SubAccount } from "../../mock";

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
  const [data, setData] = useState([{ RequestNumber: "RequestNumber" }]);
  const [visible, setVisible] = useState(false);
  const [show, setshow] = useState(false);
  const isEmpty = data.length === 0;
  const toastRef = useRef(null);
  const navigate = useNavigate();
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
    { label: "Petty Cash", url: "/accounts/pettycash/adddisbursementtable" },
    {
      label: "Add Disbursement",
      url: "/accounts/pettycash/adddisbursementtable",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {};

  const handleBack = () => {
    navigate("/accounts/pettycash/adddisbursement");
  };

  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    textAlign: "center",
  };
  const handleEdit = (id) => {
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

  const handleSave = () => {
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

  return (
    <div className="add__disbursement__table">
      <CustomToast ref={toastRef}  message="Disbursment Transaction Number 1234 is created"/>
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
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              header={<input type="checkbox" />}
              body={() => <input type="checkbox" />}
              headerStyle={headerStyle}
              style={{ textAlign: "center" }}
            />
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Requester"
              header="Requester"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Remarks"
              header="Remarks"
              headerStyle={headerStyle}
              
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column field="VAT" header="VAT" headerStyle={headerStyle} ></Column>
            <Column field="EWT" header="EWT" headerStyle={headerStyle} ></Column>
            <Column
              field="MainAccount"
              header="Main Account"
              headerStyle={headerStyle}
              
            ></Column>
            <Column
              field="SubAccount"
              header="Sub Account"
              headerStyle={headerStyle}
              
            ></Column>
            <Column
              field="TotalAmount"
              header="Total Amount"
              headerStyle={headerStyle}
              
            ></Column>
            <Column
              field="Action"
              header="Action"
              headerStyle={headerStyle}
              body={(rowData) => (
                <Button
                  icon={<SvgEditIcon />}
                  className="delete__btn"
                  onClick={() => handleEdit(rowData.id)}
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
              />
            </div>
          </div>
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="input__filed"
                label="Amount"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
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
                }}
                optionLabel="Maincode"
                error={
                  formik.touched.MainAccountCode && formik.errors.MainAccountCode
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
