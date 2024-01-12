import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import "./index.scss";
import SvgTable from "../../../../../../assets/icons/SvgTable";
import { Button } from "primereact/button";
import SvgAdd from "../../../../../../assets/icons/SvgAdd";
import { Dialog } from "primereact/dialog";
import InputField from "../../../../../../components/InputField";
import DropDowns from "../../../../../../components/DropDowns";
import SvgDropdown from "../../../../../../assets/icons/SvgDropdown";
import { postAddTransactionCodeSetup, postAddUserGroupAccess } from "../../../store/transactionCodeMasterMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

const UserGroupAccess = () => {
  const { TransactioncodeListsearch, UserGroupAccessList, loading } = useSelector(({ transactionCodeMasterReducer }) => {
    return {
      loading: transactionCodeMasterReducer?.loading,
      UserGroupAccessList: transactionCodeMasterReducer?.UserGroupAccessList,
      // TransactioncodeListsearch: transactionCodeMasterReducer?.TransactioncodeListsearch,


    };
  });
  console.log(UserGroupAccessList, "UserGroupAccessList")
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const navigate = useNavigate();
  const isEmpty = products.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found">No data entered</div>
    </div>
  );
  const template2 = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <div className="paginator__container">
          <React.Fragment>
            <span
              className="mx-1"
              style={{
                color: "var(--text-color)",
                userSelect: "none",
                width: "127%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Row count :{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
            />
          </React.Fragment>
        </div>
      );
    },
  };

  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    // navigate("/accounts/pettycash/PettyCashCodeDetails")
  };
  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const BankAccountCode = [
    { label: 'Trans00123', value: 'Trans00123' },
    { label: 'Trans00124', value: 'Trans00124' },

  ];
  const dispatch = useDispatch()
  const initialValues = {
    UserRole: "",
    MinimumTransaction: "",
    MaximumTransaction: "",
  }
  const handleSubmit = (values) => {
    dispatch(postAddUserGroupAccess(formik.values))
    setShow(false)
  }

  const customValidation = (values) => {
    const errors = {};

    if (!values.UserRole) {
      errors.UserRole = "This field Code is required";
    }
    if (!values.MinimumTransaction) {
      errors.MinimumTransaction = "This field is required";
    }
    if (!values.MaximumTransaction) {
      errors.MaximumTransaction = "This field is required";
    }

    return errors;
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);

    },
    // onSubmit: handleSubmit
  });
  return (
    <div className="transactioncode__master__table_UserGroupAccess">
      {/* <Card className="mt-1"> */}
      <div className="card">
        <div className="btn__container">
          <Button
            label="Add"
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <DataTable
          value={UserGroupAccessList}
          tableStyle={{
            minWidth: "50rem",
            color: "#1C2536",
          }}
          scrollable={true}
          scrollHeight="40vh"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          emptyMessage={isEmpty ? emptyTableIcon : null}
        >
          <Column
            field="UserRole"
            header="User Role"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="MinimumTransaction"
            header="Minimum Transaction"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          //   sortable
          ></Column>
          <Column
            field="MaximumTransaction"
            header="Maximum Transaction"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          //   sortable
          ></Column>
          <Column
            field="Edit"
            header="Edit"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>
      <Dialog
        header="Add User Group Access"
        visible={show}
        style={{ width: "50vw" }}
        onHide={() => setShow(false)}
      >
        <div className="grid mt-1">
          <div className=" col-12 md:col-6 lg-col-6 ">
            {/* <DropDowns
              className="inputdialog__fieled"
              label="User Role"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
             
            value={formik.values.UserRole}
            options={BankAccountCode}
            onChange={(e) => {
              console.log(e.value);
              formik.setFieldValue("UserRole", e.value);
              // handleAccountcode(e.value);
            }}
            optionLabel="name"
            error={
              formik.touched.UserRole &&
              formik.errors.UserRole
            }
            /> */}
            <DropDowns
              classNames="input__filed"
              label="Minimum Transaction"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value={formik.values.UserRole}
              onChange={(e) =>
                formik.setFieldValue("UserRole", e.target.value)
              }

              options={BankAccountCode}

              optionLabel='label'

              dropdownIcon={<SvgDropdown color={"#000"} />}
            />

            {formik.touched.UserRole && formik.errors.UserRole && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.UserRole}
              </div>
            )}
            {/* <InputField
              classNames="input__filed"
              label="Minimum Transaction"
              placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}

              value={formik.values.UserRole}
              onChange={formik.handleChange("UserRole")}
              error={
                formik.touched.UserRole &&
                formik.errors.UserRole
              }
            /> */}
          </div>
        </div>
        <div className="grid mt-1">
          <div className=" col-12 md:col-6 lg-col-6 ">
            <InputField
              classNames="input__filed"
              label="Minimum Transaction"
              placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}

              value={formik.values.MinimumTransaction}
              onChange={formik.handleChange("MinimumTransaction")}
              error={
                formik.touched.MinimumTransaction &&
                formik.errors.MinimumTransaction
              }
            />
          </div>
          <div className=" col-12 md:col-6 lg-col-6 ">
            <InputField
              classNames="input__filed"
              label="Maximum Transaction"
              placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}

              value={formik.values.MaximumTransaction}
              onChange={formik.handleChange("MaximumTransaction")}
              error={
                formik.touched.MaximumTransaction &&
                formik.errors.MaximumTransaction
              }
            />
          </div>
        </div>
        <div className="btn__container">
          <Button
            label="Save"
            className="add__btn"
            // onClick={() => {
            //   ();
            // }}
            onClick={formik.handleSubmit}
          />
        </div>
      </Dialog>
      {/* </Card> */}
    </div>
  );
};

export default UserGroupAccess;
