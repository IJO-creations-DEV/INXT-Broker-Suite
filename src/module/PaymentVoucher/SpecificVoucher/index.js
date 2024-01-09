import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import SvgEdit from "../../../assets/icons/SvgEdit";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SvgDot from "../../../assets/icons/SvgDot";
import { Paginator } from "primereact/paginator";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import SvgBackicon from "../../../assets/icons/SvgBackicon";
import { Dropdown } from "primereact/dropdown";
import SvgEditicon from "../../../assets/icons/SvgEdit";
import SvgEditIcon from "../../../assets/icons/SvgEditicons";
import { useSelector, useDispatch } from "react-redux";
import {
  getpaymentCheckbookDetailsMiddleware,
  patchpaymentVocherInvoiceListMiddleware,
} from "../store/paymentVocherMiddleware";
import { useFormik } from "formik";
import CustomToast from "../../../components/Toast";

function SpecificVoucher() {
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [EditID, setEditID] = useState(null);

  const handlebankdetail = () => {
    const ids = selectedProducts?.map((item) => item.id);
    console.log(ids);
    dispatch(getpaymentCheckbookDetailsMiddleware(ids));
    Navigate("/accounts/paymentvoucher/bankdetailselection");
  };

  const renderViewButton = (rowData) => {
    return (
      <div onClick={() => handleEdit(rowData)}>
        <SvgEditIcon />
      </div>
    );
  };

  const { invoiceListData, loading } = useSelector(
    ({ paymentVoucherReducers }) => {
      return {
        loading: paymentVoucherReducers?.loading,
        invoiceListData: paymentVoucherReducers?.invoiceList,
      };
    }
  );
  useEffect(() => {
    if (EditID != null) {
      setFormikValues();
    }
  }, [EditID]);
  const setFormikValues = () => {
    console.log("find action");
    const targetInvoice = invoiceListData.find((item) => item.id === EditID);
    console.log(targetInvoice, "find data");
    const fcAmount = targetInvoice?.fcamount;
    const discount = targetInvoice?.discount;
    const vat = targetInvoice?.vat;
    const wht = targetInvoice?.wht;
    const updatedValues = {
      fcAmount: `${fcAmount}`,
      discount: `${discount}`,
      vat: `${vat}`,
      wht: `${wht}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const initialValues = {
    fcAmount: "",
    discount: "",
    vat: "",
    wht: "",
  };
  const handleSubmit = (values) => {
    setSelectedProducts([]);
    const valueWithId = {
      ...values,
      id: EditID,
    };
    dispatch(patchpaymentVocherInvoiceListMiddleware(valueWithId));
    toastRef.current.showToast();
    {
      setTimeout(() => {}, 3000);
    }
    setVisible(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  const handleEdit = (rowData) => {
    setEditID(rowData?.id);
    setVisible(true);
  };

  const items = [
    { label: "Payment Voucher", url: "/accounts/paymentvoucher" },
    { label: "Create Voucher", url: "/accounts/paymentvoucher/createvoucher" },
  ];
  const home = { label: "Accounts " };
  const handleNavigation = () => {
    Navigate("/paymentvoucher/voucherbankdetails");
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
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
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
      );
    },
  };

  const headerStyle = {
    width: "4rem",
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    // padding: 4,
    color: "#000",
    border: "none",
    margin: 20,
  };

  return (
    <div className="overall__specific__container">
      <NavBar />
      <CustomToast
        ref={toastRef}
        message="Invoice details updated successfully"
      />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>
        <label className="label_header">Create Voucher</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <label className="headlist_lable">Invoice List</label>

      <div className="tablegap_container">
        <DataTable
          value={invoiceListData}
          tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          scrollable={true}
          scrollHeight="40vh"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          selectionMode="checkbox"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "4rem" }}
          ></Column>
          <Column
            field="VoucherNumber"
            header="Payables"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="TransactionNumber"
            header="Outstanding"
            sortable
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="fcamount"
            header="FC Amount"
            style={{ width: "20rem" }}
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="VoucheDate"
            header="LC Amount"
            style={{ width: "20rem" }}
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="discount"
            header="Excess/Discounts"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="Amount"
            header="Bal O/s Amount"
            style={{ width: "20rem" }}
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="vat"
            header="VAT%"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="wht"
            header="WHT%"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="Amount"
            header="Total Amount"
            style={{ width: "20rem" }}
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>

          <Column
            body={renderViewButton}
            header="Action"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>

      <div className="next_container">
        <Button
          label="Next"
          className="submitbutton_container"
          onClick={() => handlebankdetail()}
          disabled={selectedProducts.length === 0}
        />
      </div>

      <Dialog
        header="Invoice Details"
        visible={visible}
        className="dialog_fields"
        onHide={() => setVisible(false)}
      >
        <div class="grid">
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              disabled={true}
              classNames="field__container"
              label="Policy"
              value="Motor"
            />
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              disabled={true}
              classNames="field__container"
              label="Outstanding"
              value="4000.00"
            />
          </div>
        </div>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="FC Amount"
              value={formik.values.fcAmount}
              onChange={formik.handleChange("fcAmount")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="Excess/Discounts"
              value={formik.values.discount}
              onChange={formik.handleChange("discount")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="VAT%"
              value={formik.values.vat}
              onChange={formik.handleChange("vat")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="WHT%"
              value={formik.values.wht}
              onChange={formik.handleChange("wht")}
            />
          </div>
        </div>
        <div className="update_btn">
          <Button
            label="Update"
            className="update_btnlabel"
            onClick={formik.handleSubmit}
            // onClick={() => setVisible(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}

export default SpecificVoucher;
