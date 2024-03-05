import React, { useState, useEffect, useRef, Suspense } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot";
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { data } from "./mock";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";
import SvgEye from "../../../assets/icons/SvgEye";
import { TieredMenu } from "primereact/tieredmenu";
import { useDispatch, useSelector } from "react-redux";
import SvgDropdownicon from "../../../assets/icons/SvgDropdownicon";
import InputField from "../../../components/InputField";
import { getReceiptsListBySearchMiddleware } from "../store/receiptsMiddleware";
import { Dialog } from "primereact/dialog";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../components/LabelWrapper";

const PolicyReceipts = () => {
  
  const [value, setValue] = useState('');
  const [visiblePopup, setVisiblePopup] = useState(false)
  
  // const [products, setProducts] = useState([]);
  // const [stylesLoaded, setStylesLoaded] = useState(false);

  // useEffect(() => {
  //   // Dynamically import your SCSS styles
  //   import('./index.scss').then(() => {
  //     setStylesLoaded(true);
  //   });
  // }, []);
  // useEffect(() => {
  //   setProducts(data);
  // }, []);
  const items = [
    {
      label: "Receipts",
      to: "/accounts/receipts",
    },
  ];
  const item1 = [
    { name: "101", code: "101" },
    { name: "102", code: "102" },
    { name: "103", code: "103" },
  ];
 
  const item2= [
    { name: "CC001", code: "CC001" },
    { name: "CC002", code: "CC002" },
    { name: "CC003", code: "CC003" },
  ];
 
  const item3 = [
    { name: "Trans011", code: "Trans011" },
    { name: "Trans012", code: "Trans012" },
    { name: "Trans013", code: "Trans013" },
  ];
 

  const item4 = [
    { name: "6784938272", code: "6784938272" },
    { name: "8967534256", code: "8967534256" },
    { name: "9856435678", code: "9856435678" },
  ];
  const initialValue = {
    receiptDate: new Date(),
   
  };
 const minDate = new Date();
 
//  let myCalendar = Calendar();
  minDate.setDate(minDate.getDate() + 1);
  const search = [
    { name: "Name", value: "name" },
    { name: "Customer Code", value: "customerCode" },
    { name: "Transaction Number", value: "transactionNumber" },
    { name: "Transaction Code", value: "transactionCode" },
  ];

  const { receiptsTableList, loading, total, receiptsSearchTable } =
    useSelector(({ receiptsTableReducers }) => {
      return {
        loading: receiptsTableReducers?.loading,
        receiptsTableList: receiptsTableReducers?.receiptsTableList,
        total: receiptsTableReducers,
        receiptsSearchTable: receiptsTableReducers?.receiptsSearchTable,
      };
    });
  console.log(receiptsTableList, "receiptsTableListreceiptsTableList");
  // console.log(total, "find receiptsTableList")
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
        <>
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
        </>
      );
    },
  };

  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: "1rem",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle1 = {
    width: "10%",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: "1rem",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle2 = {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle3 = {
    width: "8%",

    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    color: "#000",
    border: "none",
    textalign: "center",
  };

  const itemss = [
    { label: "Name" },
    { label: "Date" },
    { label: "Transaction Number" },
    { label: "Receipt Number" },
  ];
  const home = { label: "Accounts " };

  const navigate = useNavigate();
  
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState();
  const dispatch = useDispatch();
  const [searches, setSearch] = useState("");

  useEffect(() => {
    console.log(globalFilter, "as");
    if (globalFilter?.length > 0) {
      if (searches?.length > 0) {
        dispatch(
          getReceiptsListBySearchMiddleware({
            field: globalFilter,
            value: searches,
          })
        );
      }
    }
  }, [searches]);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // const onGlobalFilterChange = (event) => {
  //   setGlobalFilter(event.target.value);
  // };

  const handlePolicy = () => {
    navigate("/accounts/receipts/addreceipts");
  };
  const handleArrowClick = () => {
    navigate("/accounts/receipts/receiptdetailview");
  };
  const handleEditClick = () => {
    navigate("/accounts/receipts/otherreceiptsview");
  };

  const handleModal = (rowData) => {
    console.log("View clicked:", rowData);
    
    setVisiblePopup(true);
  };
 
  
  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    // onSubmit: handleSubmit,
  });
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    // {stylesLoaded &&
    <div className="overall__policyreceipts__container mt-1">
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Receipts</label>
          <BreadCrumb
            model={items}
            home={home}
            className="breadcrumbs_container"
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
        <div className="bulk__texts">
        <div className="filter_bulk_button_container">
          <div className="bulk_button_container" onClick={handleModal}>

            <p className="addtext">Bulk Print</p>
          </div>
        </div>
        <div className="filterbutton_container">
          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd className="addicon" />
            <p className="addtext">Receipt</p>
          </div>
        </div>
      </div>
      </div>

      <Card className="mt-3">
        <div className="header_search_container ">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: "0" }}>
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search by Customer Code"
                className="searchinput_left"
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>

          <div class="col-12 md:col-3 lg:col-2">
            {/* <TieredMenu model={itemss} popup ref={menu} breakpoint="67px" /> */}

            <Dropdown
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.value)}
              options={search}
              optionLabel="name"
              optionValue="value"
              placeholder="Search by"
              className="sorbyfilter_container"
              dropdownIcon={<SvgDropdownicon />}
            />
          </div>
        </div>
        <div className="listlable_textcontainer">
          <label className="listlable_text">Receipts history</label>
        </div>

        <div className="card">
          <DataTable
            value={searches ? receiptsSearchTable : receiptsTableList}
            tableStyle={{
              minWidth: "50rem",
              color: "#1C2536",
              maxHeight: "50vh",
              overflowy: "auto",
            }}
            scrollable={true}
            scrollHeight="40vh"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            className="datatable_container"
          >
            <Column
              sortable
              field="receiptNumber"
              header="Receipt Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="transactionCode"
              header="Transaction Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="transactionNumber"
              header="Transaction Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="name"
              header="Name"
              headerStyle={headerStyle1}
              className="fieldvalue_container"
              body={(rowData) => rowData.name?.toUpperCase()}
            ></Column>
            <Column
              sortable
              field="customerCode"
              header="Customer Code"
              headerStyle={headerStyle2}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="date"
              header="Date"
              headerStyle={headerStyle1}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="amount"
              header="Amount"
              headerStyle={headerStyle3}
              className="fieldvalue_container"
            ></Column>

            <Column
              // sortable
              body={() => <SvgEye onClick={() => handleArrowClick()} />}
              header="Action"
              headerStyle={headerStyle}
              className="fieldvalue_containers"
            ></Column>
          </DataTable>
        </div>
      </Card>
      <div className="col-12">
        <Dialog
          
          visible={visiblePopup}
          className="dialog_fields"
          onHide={() => {
            setVisiblePopup(false);
           
          }}
        >
          <div class="grid">
            
          
            <div class="sm-col-12  md:col-6 lg-col-6">

              <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Division Code From"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />

            </div>
            <div class="sm-col-12  md:col-6 lg-col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Division Code To"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="OR Number From"
                options={item2}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="OR Number To"
                options={item2}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Customer Code From"
                options={item3}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Customer Code To"
                options={item3}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Cashier ID From"
                options={item4}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
            <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Cashier ID To"
                options={item4}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
            {/* <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Date From"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              /> */}
               <LabelWrapper className="calenderlable__container">
              Date From
            </LabelWrapper> 
            
            <Calendar
              classNames="calender__container"
              showIcon
              value={formik.values.receiptDate}
              minDate={minDate}
              onChange={(e) => {
                formik.setFieldValue("receiptDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
             
            />
            
            
            </div>
            <div class="col-12 md:col-6 lg:col-6">
            {/* <DropDowns
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="dropdown__container"
                label="Date To"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              /> */}
                <LabelWrapper className="calenderlable__container">
              Date To
            </LabelWrapper> 
            
            <Calendar
              classNames="calender__container"
              showIcon
              value={formik.values.receiptDate}
              minDate={minDate}
              onChange={(e) => {
                formik.setFieldValue("receiptDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
             
            />
            </div>
          </div>

          <div className="update_btn">
           
            <div class="cursor-pointer" onClick={() => setVisiblePopup(false)}>
              <div className="update_btnlabel">Generate</div>
            </div>
          </div>
        </Dialog>{" "}
      </div>
    </div>
    // }
    // </Suspense>
  );
};

export default PolicyReceipts;
