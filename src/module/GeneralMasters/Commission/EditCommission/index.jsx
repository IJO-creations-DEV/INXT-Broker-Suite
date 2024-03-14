import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "../EditCommission/index.scss";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
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
import EditCommissionPopup from "./EditCommissionPopup";
import CustomToast from "../../../../components/Toast";
import { SelectButton } from "primereact/selectbutton";
import data from "./data";
import SvgEditIcon from "../../../../assets/icons/SvgEditIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  getEditCommissionPopup,
  patchCommissionEdit,
} from "../store/commissionMiddleWare";
import { Card } from "primereact/card";

const EditCommission = () => {
  const {
    commissionList,
    loading,
    commissionSearchList,
    getCommissionEdit,
    addLevelCommissionSharing,
  } = useSelector(({ commissionMianReducers }) => {
    return {
      loading: commissionMianReducers?.loading,
      getCommissionEdit: commissionMianReducers?.getCommissionEdit,
      addLevelCommissionSharing:
        commissionMianReducers?.addLevelCommissionSharing,
    };
  });
  console.log(getCommissionEdit, "getCommissionEdit");

  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const selectSwitchoptions = ["Yes", "No"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectSwitch, setselectSwitch] = useState(selectSwitchoptions[0]);
  const [date, setDate] = useState(new Date());
  const items = [
    { label: "Commission", url: "/master/generals/commission" },
    {
      label: "Edit Commissions",
      url: "/master/generals/commission/editcommission",
    },
  ];
  const [visible, setVisible] = useState(false);
  const home = { label: "Master" };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  const [step, setStep] = useState(0);
  const customValidation = (values) => {
    const errors = {};

    if (!values.commissionCode) {
      errors.commissionCode = "commission code is required";
    }

    if (!values.desc) {
      errors.desc = "This field is required";
    }
    if (!values.product) {
      errors.product = "product is required";
    }
    if (!values.selectCover) {
      errors.selectCover = "This field Code is required";
    }
    if (!values.maxRate) {
      errors.maxRate = "This field is required";
    }
    if (!values.selectAgent) {
      errors.selectAgent = "This field is required";
    }
    if (!values.effectiveFrom) {
      errors.effectiveFrom = "This field is required";
    }
    if (!values.effectiveTo) {
      errors.effectiveTo = "This field is required";
    }

    return errors;
  };
  const codeOptions = [
    { label: "Option 1", value: "Trans00123" },
    { label: "Option 2", value: "Trans00124" },
  ];
  const handleSubmit = (value) => {
    console.log(value, "value");
    dispatch(patchCommissionEdit(value));
    navigate("/master/generals/commission");
  };
  const [productOptionData, setProductOptionData] = useState([]);
  const [selectedCoverOption, setSelectedCoverOption] = useState([]);
  const [selectAgentDataOption, setSelectAgentDataOption] = useState([]);
  const setFormikValues = () => {
    const productData = getCommissionEdit?.product;
    const selectCoversData = getCommissionEdit?.selectCover;
    const selectAgentData = getCommissionEdit?.selectAgent;
    const updatedValues = {
      id: getCommissionEdit?.id,
      commissionCode: getCommissionEdit?.commissionCode,
      product: productData,
      desc: getCommissionEdit?.desc,
      selectCover: selectCoversData,
      effectiveFrom: getCommissionEdit?.effectiveFrom,
      effectiveTo: getCommissionEdit?.effectiveTo,
      maxRate: getCommissionEdit?.maxRate,
      selectAgent: selectAgentData,
    };
    if (productData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setProductOptionData([{ label: productData, value: productData }]);
    }
    if (selectCoversData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setSelectedCoverOption([
        { label: selectCoversData, value: selectCoversData },
      ]);
    }
    if (selectAgentData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setSelectAgentDataOption([
        { label: selectAgentData, value: selectAgentData },
      ]);
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const formik = useFormik({
    initialValues: {
      commissionCode: "",
      desc: "",
      product: "",
      selectCover: "",
      maxRate: "",
      selectAgent: "",
      effectiveFrom: "",
      effectiveTo: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      setStep(1);
    },
  });

  console.log(formik.values.id, "idd");
  useEffect(() => {
    setFormikValues();
  }, [getCommissionEdit]);
  // const handleSubmit = (values) => {
  //     toastRef.current.showToast();
  //     setTimeout(() => {
  //         navigate("/master/generals/commission");
  //     }, 2000);
  // };
  const handleGoBack = () => {
    navigate("/master/generals/commission");
  };
  // const formik = useFormik({
  //     initialValues: {
  //         commissionCode: "",
  //         desc: "",
  //         // pettycashname: "",
  //         product: "",
  //         selectCover: "",
  //         maxRate: "",
  //         selectAgent: "",
  //         effectiveFrom: "",
  //         effectiveTo: ""

  //     },
  //     validate: customValidation,

  //     onSubmit: (values) => {
  //         handleSubmit(values);
  //         setStep(1);
  //     },
  // });
  const handlePolicy = () => {
    setVisible(true);
  };
  const [products, setProducts] = useState(data);
  const [showEditPopup, setShowEditPopup] = useState(false);
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
  const handleApproval = () => {
    setStep(2);
  };

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
        <div style={{ width: "40%" }} className="table__selector">
          <span style={{ color: "var(--text-color)", userSelect: "none" }}>
            Row count :{" "}
          </span>
          <Dropdown
            value={options.value}
            className="pagedropdown_container"
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </div>
      );
    },
  };
  const handleNavigateView = () => {};
  const handleEditNavigate = (rowData) => {
    setVisiblePopup(true);
    dispatch(getEditCommissionPopup(rowData));
    setShowEditPopup(true);
  };

  const renderEditButton = (rowData) => {
    return (
      <div className="centercontent">
        <div onClick={() => handleEditNavigate(rowData)}>
          <SvgEditIcon />
        </div>
      </div>
    );
  };

  return (
    <div className="grid edit__commission__add__container">
      <CustomToast ref={toastRef} message="updated Commission" />

      <div className="col-12 ">
        <div className="add__sub__title">
          <div onClick={handleGoBack} className="mr-2 mt-1">
            <ArrowLeftIcon />
          </div>
          Edit Commissions
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
        <div className="grid  p-2 m-1">
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
              value={formik.values.commissionCode}
              onChange={(e) =>
                formik.setFieldValue("commissionCode", e.target.value)
              }
            />
            {formik.touched.commissionCode && formik.errors.commissionCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.commissionCode}
              </div>
            )}
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
              value={formik.values.desc}
              onChange={(e) => formik.setFieldValue("desc", e.target.value)}
            />
            {formik.touched.desc && formik.errors.desc && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.desc}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              // disabled={step === 0 ? false : true}
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
              value={formik.values.product}
              onChange={(e) => formik.setFieldValue("product", e.target.value)}
              options={productOptionData}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.product && formik.errors.product && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.product}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              disabled={step === 0 ? false : true}
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
              value={formik.values.selectCover}
              onChange={(e) =>
                formik.setFieldValue("selectCover", e.target.value)
              }
              options={selectedCoverOption}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.selectCover && formik.errors.selectCover && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.selectCover}
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
              value={formik.values.maxRate}
              onChange={(e) => formik.setFieldValue("maxRate", e.target.value)}
            />
            {formik.touched.maxRate && formik.errors.maxRate && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.maxRate}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper
                label="Effective From"
                textSize={"16px"}
                textColor={"#000"}
                textWeight={"300"}
                classNames="label__sub__add"
              >
                <Calendar
                  // value={date}
                  // onChange={(e) => setDate(e.value)}
                  value={
                    formik.values.effectiveFrom
                      ? new Date(formik.values.effectiveFrom)
                      : null
                  }
                  onChange={(e) => {
                    formik.handleChange("effectiveFrom")(
                      e.value.toISOString().split("T")[0]
                    );
                  }}
                  dateFormat="yy-mm-dd"
                  showIcon
                  className="calender_field_claim"
                />
                <div className="calender_icon_claim">
                  <SvgDatePicker />
                </div>
              </LabelWrapper>
            </div>
            {formik.touched.effectiveFrom && formik.errors.effectiveFrom && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.effectiveFrom}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <div class="calender_container_claim p-0">
              <LabelWrapper
                label="Effective To"
                textSize={"16px"}
                textColor={"#000"}
                textWeight={"300"}
                classNames="label__sub__add"
              >
                <Calendar
                  value={
                    formik.values.effectiveTo
                      ? new Date(formik.values.effectiveTo)
                      : null
                  }
                  onChange={(e) => {
                    formik.handleChange("effectiveTo")(
                      e.value.toISOString().split("T")[0]
                    );
                  }}
                  dateFormat="yy-mm-dd"
                  showIcon
                  className="calender_field_claim"
                />
                <div className="calender_icon_claim">
                  <SvgDatePicker />
                </div>
              </LabelWrapper>
            </div>
            {formik.touched.effectiveTo && formik.errors.effectiveTo && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.effectiveTo}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
            <DropDowns
              // disabled={step === 0 ? false : true}
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
              value={formik.values.selectAgent}
              onChange={(e) =>
                formik.setFieldValue("selectAgent", e.target.value)
              }
              options={selectAgentDataOption}
              optionLabel="value"
              placeholder={"Select"}
            />

            {formik.touched.selectAgent && formik.errors.selectAgent && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.selectAgent}
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
            />
          </div>
        </div>
      </Card>
      <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal"></div>
      <div className=" bottom__view p-2 m-1">
        <div className="  input__view__reversal p-2">
          <div className="add__level__text">
            Add Level Wise Commission Sharing
          </div>
          <div className="col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture ">
            <div className="add__icon__view__petty" onClick={handlePolicy}>
              <div className="add__icon__petty">
                <SvgAdd color={"#fff"} />
              </div>
              <div className="add__text__petty">Add</div>
            </div>
          </div>
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
              className="fieldvalue_container"
            ></Column>
            <Column
              field="commissionCode"
              header="Commission Code"
              className="fieldvalue_container"
              // style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}
            ></Column>
            <Column
              field="sharingRate"
              header="Share Rate"
              className="fieldvalue_container"
            ></Column>
            <Column
              field="quantity"
              header="Action"
              body={renderEditButton}
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="fieldvalue_container"
            ></Column>
          </DataTable>
        </div>
      </div>
      <div className="col-12">
        <EditCommissionPopup
          // visiblePopup={visiblePopup}
          // setVisiblePopup={setVisiblePopup}
          showEditPopup={showEditPopup}
          setShowEditPopup={setShowEditPopup}
        />
      </div>

      <div className="col-12 btn__view__Add">
        <Button
          label="Update"
          className="save__add__btn"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};
export default EditCommission;
