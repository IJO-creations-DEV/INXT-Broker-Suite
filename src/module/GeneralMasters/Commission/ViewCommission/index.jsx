import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "../ViewCommission/index.scss";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
import SuccessIcon from "../../../../assets/icons/SuccessIcon";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import { useFormik } from "formik";
import LabelWrapper from "../../../../components/LabelWrapper";
import { Calendar } from "primereact/calendar";
import SvgDatePicker from "../../../../assets/icons/SvgDatePicker";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import ArrowLeftIcon from "../../../../assets/icons/ArrowLeftIcon";
import { SelectButton } from "primereact/selectbutton";
import { useSelector } from "react-redux";
// import AddCommissionPopup from './AddCommissionPopup';
import { Card } from "primereact/card";

const ViewCommission = () => {
  const { commissionView, loading, addLevelCommissionSharing } = useSelector(
    ({ commissionMianReducers }) => {
      return {
        loading: commissionMianReducers?.loading,
        commissionView: commissionMianReducers?.commissionView,
        addLevelCommissionSharing:
          commissionMianReducers?.addLevelCommissionSharing,
      };
    }
  );
  console.log(commissionView.selectCover, "commissionView");
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [date, setDate] = useState(new Date());
  const selectSwitchoptions = ["Yes", "No"];

  const [selectSwitch, setselectSwitch] = useState(selectSwitchoptions[0]);
  const items = [
    { label: "Commission", url: "/master/generals/Commission" },
    {
      label: "View Commissions",
      url: "/master/generals/commission/viewcommission",
    },
  ];
  const home = { label: "Master" };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  const [step, setStep] = useState(0);
  const customValidation = (values) => {
    const errors = {};

    if (!values.prttycashcode) {
      errors.prttycashcode = "This field Code is required";
    }

    if (!values.pettycashname) {
      errors.pettycashname = "This field is required";
    }
    if (!values.pettycashsize) {
      errors.pettycashsize = "This field is required";
    }
    if (!values.avilabelcash) {
      errors.avilabelcash = "This field is required";
    }
    if (!values.mincashback) {
      errors.mincashback = "This field is required";
    }
    if (!values.transactionlimit) {
      errors.transactionlimit = "This field is required";
    }

    return errors;
  };
  const productOptions = [
    { label: commissionView.product, value: commissionView.product },
  ];
  const selectAgentOptions = [
    { label: commissionView.selectAgent, value: commissionView.selectAgent },
  ];
  const selectCoverOptions = [
    { label: commissionView.selectCover, value: commissionView.selectCover },
  ];
  const handleSubmit = (values) => {
    console.log(values, "find values");
  };
  const formik = useFormik({
    initialValues: {
      prttycashcode: "",
      pettycashname: "",
      pettycashsize: "",
      avilabelcash: "",
      mincashback: "",
      transactionlimit: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      setStep(1);
    },
  });

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/master/generals/commission");
  };
  const handlePolicy = () => {
    // navigate('/master/generals/commission/addcommission')
    setVisible(true);
  };
  const [products, setProducts] = useState([]);
  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleNavigate = () => {
    navigate("/accounts/journalvoucher/detailsjournalvocture");
  };
  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };
  const isEmpty = products.length === 0;
  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="table__selector"
        >
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

  const renderEditButton = (rowData) => {
    return (
      <div className="centercontent" onClick={handleNavigate}>
        <SvgEyeIcon />
      </div>
    );
  };
  const [visible, setVisible] = useState(false);

  return (
    <div className="grid view__commission__add__container">
      <div className="col-12 ">
        <div className="add__sub__title">
          <div onClick={handleGoBack} className="mr-2 mt-1">
            <ArrowLeftIcon />
          </div>
          View Commissions
        </div>
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <Card className="card__container">
        <div className="grid  p-2 ">
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
            <InputField
              classNames="input__field__reversal__inactive"
              className={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Commission Code"
              placeholder="Enter"
              value={commissionView.commissionCode}
              // onChange={(e) =>
              //   formik.setFieldValue("prttycashcode", e.target.value)
              // }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 input__view__reversal">
            <InputField
              classNames="input__field__reversal__inactive"
              className={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Description"
              placeholder="Enter"
              value={commissionView.desc}
              onChange={(e) =>
                formik.setFieldValue("pettycashname", e.target.value)
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              // disabled={step === 0 ? false : true}
              disabled={true}
              className={
                step === 0
                  ? "input__field__reversal"
                  : "input__field__reversal__inactive"
              }
              classNames={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Product"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={commissionView.product}
              onChange={(e) =>
                formik.setFieldValue("transactionCode", e.target.value)
              }
              options={productOptions}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.transactionCode &&
              formik.errors.transactionCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.transactionCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              // disabled={step === 0 ? false : true}
              disabled={true}
              className={
                step === 0
                  ? "input__field__reversal"
                  : "input__field__reversal__inactive"
              }
              classNames={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Select Covers"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={commissionView.selectCover}
              onChange={(e) =>
                formik.setFieldValue("transactionCode", e.target.value)
              }
              options={selectCoverOptions}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.transactionCode &&
              formik.errors.transactionCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.transactionCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
            <InputField
              classNames="input__field__reversal__inactive"
              className={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Maximum Rate"
              placeholder="Enter"
              value={commissionView.maxRate}
              onChange={(e) =>
                formik.setFieldValue("pettycashsize", e.target.value)
              }
            />
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper
                label="Effective From"
                textSize={"16px"}
                textColor={"#000"}
                textWeight={"500"}
                classNames="label__sub__add"
              >
                <Calendar
                  value={new Date(commissionView.effectiveFrom)}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  className="calender_field_claim"
                  disabled={true}
                  // placeholder={translate("claimstatus")["Choose Date"]}
                />
                <div className="calender_icon_claim">
                  <SvgDatePicker />
                </div>
              </LabelWrapper>
            </div>
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper
                label="Effective To"
                textSize={"16px"}
                textColor={"#000"}
                textWeight={"500"}
                classNames="label__sub__add"
              >
                <Calendar
                  value={new Date(commissionView.effectiveTo)}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  className="calender_field_claim"
                  disabled={true}
                  // placeholder={translate("claimstatus")["Choose Date"]}
                />
                <div className="calender_icon_claim">
                  <SvgDatePicker />
                </div>
              </LabelWrapper>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              // disabled={step === 0 ? false : true}
              disabled={true}
              className={
                step === 0
                  ? "input__field__reversal"
                  : "input__field__reversal__inactive"
              }
              classNames={
                step === 0
                  ? "input__label__reversal"
                  : "input__label__reversal__inactive"
              }
              label="Select Agents"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={commissionView.selectAgent}
              onChange={(e) =>
                formik.setFieldValue("transactionCode", e.target.value)
              }
              options={selectAgentOptions}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.transactionCode &&
              formik.errors.transactionCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.transactionCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
            <div className="input__label__reversal">Modifiable</div>
            <SelectButton
              className="mt-2 select__switch__option"
              value={selectSwitch}
              onChange={(e) => setselectSwitch(e.value)}
              options={selectSwitchoptions}
              disabled={true}
            />
          </div>
        </div>
      </Card>
      <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal m-1"></div>
      <div className="col-12 bottom__view p-2 m-1">
        <div className="grid  input__view__reversal p-2 mt-1">
          <div className="col-12 md:col-6 lg:col-6 add__level__text">
            Add Level Wise Commission Sharing
          </div>
          {/* <div className='col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture '>

            <div className='add__icon__view__petty' onClick={handlePolicy}>
              <div className='add__icon__petty' >
                <SvgAdd color={'#fff'} />
              </div>
              <div className='add__text__petty'>
                Add
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-12 card">
          <DataTable
            value={addLevelCommissionSharing}
            style={{ overflowY: "auto", maxWidth: "100%" }}
            responsive={true}
            className="table__view__Journal__Voture"
            paginator
            paginatorLeft
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            onPage={onPageChange}
            onPageChange={onPageChange}
            emptyMessage={isEmpty ? emptyTableIcon : null}
            scrollable={true}
            scrollHeight="40vh"
          >
            <Column
              field="level"
              header="Level"
              style={{ width: "40%", padding: "1rem" }}
            ></Column>
            <Column
              field="commissionCode"
              header="Commission Code"
              style={{ width: "40%", padding: "1rem" }}
            ></Column>
            <Column
              field="sharingRate"
              header="Share Rate"
              style={{ width: "40%", padding: "1rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
export default ViewCommission;
