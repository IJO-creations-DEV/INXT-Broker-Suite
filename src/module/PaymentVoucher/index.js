import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../assets/icons/SvgDot";
import SvgFilters from "../../assets/icons/SvgFilters";
import SvgAdd from "../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Productdata from "./mock";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { TieredMenu } from "primereact/tieredmenu";
import SvgIconeye from "../../assets/icons/SvgIconeye";
import SvgDropdown from "../../assets/icons/SvgDropdown";
import SvgDropdownicon from "../../assets/icons/SvgDropdownicon";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentVocherListBySearchMiddleware } from "./store/paymentVocherMiddleware";

const Index = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { paymentVocherList, loading, paymentVocherSearchList } = useSelector(
    ({ paymentVoucherReducers }) => {
      return {
        loading: paymentVoucherReducers?.loading,
        paymentVocherList: paymentVoucherReducers?.paymentVocherList,
        paymentVocherSearchList:
          paymentVoucherReducers?.paymentVocherSearchList,
      };
    }
  );
  const handleView = (columnData) => {
    navigate(`/accounts/paymentvoucher/detailview/${columnData?.id}`);
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

  const menu = useRef(null);
  const menuitems = [
    {
      label: "Name",
    },
    {
      label: "Date",
    },
    {
      label: "Voucher Number",
    },
  ];

  const headerStyle = {
    width: "19%",
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: 6,
    paddingLeft: 6,
    color: "#000",
    border: "none",
  };

  const items = [
    {
      id: 1,
      label: "Payment Voucher",
      to: "/accounts/paymentvoucher",
    },
  ];
  const home = { label: "Accounts" };

  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("VoucherNumber");
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "VoucherNumber", code: "VoucherNumber" },
    { name: "TransactionNumber", code: "TransactionNumber" },
    { name: "CustomerCode", code: "CustomerCode" },
  ];

  useEffect(() => {
    console.log(globalFilter, "as");
    if (globalFilter?.length > 0) {
      if (search?.length > 0) {
        dispatch(
          getPaymentVocherListBySearchMiddleware({
            field: globalFilter,
            value: search,
          })
        );
      }
    }
  }, [search]);

  const onGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };

  const handlePolicy = () => {
    navigate("/accounts/paymentvoucher/createvoucher");
  };

  return (
    <div className="overall__paymentvoucher__container">
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Payment Voucher</label>
          <BreadCrumb
            model={items}
            home={home}
            className="breadcrumbs_container"
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
        <div className="filterbutton_container">
          {/* <SvgFilters/> */}

          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd />
            <p className="addtext">Create</p>
          </div>
        </div>
      </div>

      <Card

      //   className="overallcard_container"
      >
        {/* <div className="searchiput_container"> */}

        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: 0 }}>
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search customers"
                className="searchinput_left"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
          {/* </div> */}
          <div class="col-12 md:col-6 lg:col-2">
            {/* <TieredMenu model={menuitems} popup ref={menu} breakpoint="767px" /> */}

            <Dropdown
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.value)}
              options={cities}
              optionLabel="name"
              optionValue="code"
              placeholder="Search by"
              className="sorbyfilter_container"
              dropdownIcon={<SvgDropdownicon />}
            />

            {/* <Button
              label="Search by"
              outlined
              icon={<SvgDropdownicon />}
              className="sorbyfilter_container"
              onClick={(e) => menu.current.toggle(e)}
            /> */}
          </div>
        </div>
        <div className="headlist_lable">Payment voucher history</div>

        {/* </div> */}

        <div>
          <DataTable
            value={search ? paymentVocherSearchList : paymentVocherList}
            tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            scrollable={true}
            scrollHeight="40vh"
          >
            <Column
              field="VoucherNumber"
              header="Voucher Number"
              sortable
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="TransactionNumber"
              header="Transaction Number"
              sortable
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="CustomerCode"
              header="Customer Code"
              sortable
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="VoucheDate"
              header="Voucher Date"
              sortable
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            {/* <Column field="name" header="Action" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="Instrument Status" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column> */}
            {/* <Column field="action" header="Action" headerStyle={headerStyle} className='fieldvalue_container'></Column> */}
            <Column
              body={(columnData) => (
                <SvgIconeye onClick={() => handleView(columnData)} />
              )}
              header="Action"
              style={{ textAlign: "center" }}
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default Index;
