import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import "./index.scss";
import SvgTable from "../../../../../../assets/icons/SvgTable";
import SvgAdd from "../../../../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../../../../components/LabelWrapper";
import InputField from "../../../../../../components/InputField";
import { useFormik } from "formik";
import DropDowns from "../../../../../../components/DropDowns";
import SvgDropdown from "../../../../../../assets/icons/SvgDropdown";
import { useDispatch, useSelector } from "react-redux";
import SvgEyeIcon from "../../../../../../assets/icons/SvgEyeIcon";
import { getViewMainBranchUser, postViewMainBranchUser } from "../../store/userMiddleware";

const TransactionCodeSetupTable = ({ action }) => {

  const { loading, mainBranchAccessTableList, searchList, mainUserViewData } = useSelector(({ userReducers }) => {
    return {
      loading: userReducers?.loading,
      mainBranchAccessTableList: userReducers?.mainBranchAccessTableList,
      searchList: userReducers?.userSearchList,
      mainUserViewData: userReducers?.mainUserViewData
    };
  });
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [showView, setShowView] = useState(false);

 
  const item = [
    {
      label: show ? "ARIANS INSURANCE BROKERS INC" : showView && mainUserViewData.branchCode,
      value: show ? "NY" : showView && mainUserViewData.branchCode,
    },
  ];
  const item1 = [
    {
      label: show ? "ARIANS INSURANCE BROKERS INC" : showView && mainUserViewData.departmentCode,
      value: show ? "NY" : showView && mainUserViewData.departmentCode,
    },
  ];
  const initialValues = {
    branchCode: "",
    branchName: "",
    TransactionNofrom: "",
    departmentCode: "",
    departmentName: "",
  }

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
        <div className="table__selector">
          <React.Fragment>
            <span style={{ color: "var(--text-color)", userSelect: "none" }}>
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


  const handleSubmit = () => {
    dispatch(postViewMainBranchUser(formik.values))
    setShow(false)
  }


  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const customValidation = (values) => {
    const errors = {};

    if (!values.branchCode) {
      errors.branchCode = "This field Code is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "This field is required";
    }

    return errors;
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    // onSubmit: (values) => {
    //   // Handle form submission
    //    handleSubmit(values);

    // },
    onSubmit: handleSubmit
  });

  // const handleView = (rowData) => {
  //   console.log("View clicked:", rowData);
  //   // navigate("/accounts/pettycash/PettyCashCodeDetails")
  // };
  const dispatch = useDispatch()
  const handleView = (rowData) => {
    dispatch(getViewMainBranchUser(rowData))
    console.log(rowData, "rowData");
    setShowView(true)
    // dispatch(getUserViewDataMiddleWare(rowData))
    // navigate("/accounts/pettycash/PettyCashCodeDetails")
  };

  // const handlEdit = (rowData) => {
  //   console.log(rowData, "gg");
  //   dispatch(getUserEditDataMiddleWare(rowData))
  //   navigate(`/master/generals/usermanagement/user/edit/${rowData?.id}`);
  // };
  const items = [
    { label: "User Management" },
    {
      label: "User",
      url: "/master/generals/usermanagement/user",
    },
  ];



  const ViewheaderStyle = {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: "1rem",
    color: "#000",
    border: "none",
    display: "flex",
    justifyContent: "center",
  };



  const renderViewButton = (rowData) => {
    console.log(rowData, "rowDatarowData");
    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
          onClick={() => handleView(rowData)}
        />
        {/* <Button
          icon={<SvgEditIcon />}
          className="eye__btn"
          onClick={() => handlEdit(rowData)}
        /> */}
      </div>
    );
  };


  return (
    <div className="transactioncode__master__table_view">
      {/* <Card className="mt-1"> */}
      <div className="card">
        {/* <div className="col-12 md:col-12 lg-col-12 "> */}
        <div className="btn__container__add">
          <Button
            label="Add"
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        {/* </div> */}
        <DataTable
          value={mainBranchAccessTableList}
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
            field="branchCode"

            header="Branch Code"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="branchName"
            header="Branch Name"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          //   sortable
          ></Column>
          <Column
            field="TransactionNofrom"
            header="Transaction No from"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          //   sortable
          ></Column>
          <Column
            field="departmentCode"
            header="Department code"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="departmentName"
            header="Department name"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="action"
            body={renderViewButton}
            header="Action"
            headerStyle={ViewheaderStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>
      <Dialog
        header="Add Branch & Department"
        visible={show}
        style={{ width: "50vw" }}
        onHide={() => setShow(false)}
        className="dialogue_style"
      >
        <div className="grid mt-1">


        </div>
        <div className="grid mt-1">
          <div className="col-12 md:col-6 lg-col-6 ">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={formik.values.branchCode}
              onChange={formik.handleChange("branchCode")}
              error={formik.errors.branchCode}
              className="dropdown__add__sub"
              label="Branch"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              optionLabel="label"
              optionValue={"label"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />

          </div>
          <div className="col-12 md:col-6 lg-col-6 ">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={formik.values.departmentCode}
              onChange={formik.handleChange("departmentCode")}
              error={formik.errors.departmentCode}
              className="dropdown__add__sub"
              label="Department code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              optionLabel="label"
              optionValue={"label"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div className="btn__container">
          <Button
            label="Save"
            className="add__btn"
            // onClick={() => {
            //   handleSave();
            // }}
            onClick={() => { formik.handleSubmit(); }}
          />
        </div>
      </Dialog>
      <Dialog
        header="Add Branch & Department"
        visible={showView}
        style={{ width: "50vw" }}
        onHide={() => setShowView(false)}
        className="dialogue_style"
      >
        <div className="grid mt-1">


        </div>
        <div className="grid mt-1">
          <div className="col-12 md:col-6 lg-col-6 ">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={mainUserViewData.branchCode}
              onChange={formik.handleChange("branchCode")}
              error={formik.errors.branchCode}
              className="dropdown__add__sub"
              label="Branch"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item}
              optionLabel="label"
              optionValue={"label"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />

          </div>
          <div className="col-12 md:col-6 lg-col-6 ">
            <DropDowns
              disabled={action === "view" ? true : false}
              value={mainUserViewData.departmentCode}
              onChange={formik.handleChange("departmentCode")}
              error={formik.errors.departmentCode}
              className="dropdown__add__sub"
              label="Department code"
              classNames="label__sub__add"
              placeholder={"Select"}
              options={item1}
              optionLabel="label"
              optionValue={"label"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>

      </Dialog>
      {/* </Card> */}
    </div>
  );
};

export default TransactionCodeSetupTable;
