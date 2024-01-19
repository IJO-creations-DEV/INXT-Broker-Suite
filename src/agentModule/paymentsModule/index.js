import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import { TabPanel, TabView } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SvgFilters from "../../assets/icons/SvgFilters";
import { ClientListingData } from "../quoteModule/clientListing/mock";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { Menu } from "primereact/menu";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import PaymentCard from "./paymentCard";
import { Paginator } from "primereact/paginator";
import "./index.scss";
import TableDropdownField from "../component/tableDropDwonField";
import SvgGross from "../../assets/agentIcon/SvgGross";
import SvgCollectedPremium from "../../assets/agentIcon/SvgCollectedPremium";
import SvgCollected from "../../assets/agentIcon/SvgCollected";
import SvgReceivable from "../../assets/agentIcon/SvgReceivable";
import SvgCommission from "../../assets/agentIcon/SvgCommission";
import SvgReceivables from "../../assets/agentIcon/SvgReceivables";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentSearchDataMiddleWare } from "./store/paymentMiddleware";
import SvgDropdownicon from "../../assets/icons/SvgDropdownicon";

const Payments = () => {
  const { paymenttabledata, paymentSearchList, loading } = useSelector(
    ({ agentPaymentMainReducers }) => {
      return {
        loading: agentPaymentMainReducers?.loading,
        paymenttabledata: agentPaymentMainReducers?.paymenttabledata,
        paymentSearchList: agentPaymentMainReducers?.paymentSearchList,
      };
    }
  );
  console.log(paymenttabledata, "paymenttabledata");
  const [search, setSearch] = useState("");
  const menuRight = useRef(null);
  const navigate = useNavigate();
  const [endrosementModal, setEndrosementModal] = useState(false);

  const renderPaymentStatus = (rowData) => {
    console.log(rowData, "rowData");

    return <div>{rowData?.payment}</div>;
  };
  const handleMenuToggle = (event, menuRef) => {
    menuRef.current.toggle(event);
  };
  const menuItems = [
    {
      label: "View",
      command: () => handleMenuClick("view"),
      icon: "pi pi-refresh",
    },
    {
      label: "Claim",
      command: () => handleMenuClick("claim"),
      icon: "pi pi-refresh",
    },
    {
      label: "Renewal",
      command: () => handleMenuClick("renewal"),
      icon: "pi pi-refresh",
    },
    {
      label: "Endorsement",
      command: () => handleMenuClick("endrosement"),
      icon: "pi pi-refresh",
    },
  ];
  const headerStyle = {
    textAlign: "end",
  };
  // const template2 = {
  //   layout:
  //     "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
  //   RowsPerPageDropdown: (options) => {
  //     const dropdownOptions = [
  //       { label: 5, value: 5 },
  //       { label: 10, value: 10 },
  //       { label: 20, value: 20 },
  //       { label: 120, value: 120 },
  //     ];

  //     return (
  //       <div className="table__selector">
  //         <React.Fragment>
  //           <span style={{ color: "var(--text-color)", userSelect: "none" }}>
  //             Row count :{" "}
  //           </span>
  //           <Dropdown
  //             value={options.value}
  //             className="pagedropdown_container"
  //             options={dropdownOptions}
  //             onChange={options.onChange}
  //           />
  //         </React.Fragment>
  //       </div>
  //     );
  //   },
  // };
  const handleMenuClick = (menuItem) => {
    if (menuItem == "view") {
      navigate("/agent/claimrequest/claimdetails");
    }
    if (menuItem == "endrosement") {
      setEndrosementModal(true);
    }
    // Handle the menu item click here
    console.log(`${menuItem} clicked`);
    // You can use the menuItem information as needed (e.g., display a toast)
    // toast.current.show({ severity: 'info', summary: `${menuItem} Clicked`, detail: 'Item clicked' });
  };

  const renderEditButton = (rowData) => {
    return (
      <div className="card flex justify-content-center">
        <Menu
          model={menuItems}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />

        <Button
          icon="pi pi-align-right"
          className="mr-2"
          onClick={(event) => handleMenuToggle(event, menuRight)}
          aria-controls="popup_menu_right"
          aria-haspopup
        />
      </div>
      // <div className="action__icon">
      //   <Button
      //     icon={<SvgEditIcon />}
      //     onClick={() => handleEdit(rowData.id)}
      //     className="action__button"
      //   />
      // </div>
    );
  };
  const dispatch = useDispatch();
  const [globalFilter, setGlobalFilter] = useState("Name");
  const cities = [
    { name: "Name", code: "Name" },
    { name: "ClientID", code: "ClientID" },
    { name: "Gross Premium", code: "Gross Premium" },
  ];
  const [status, setStatus] = useState("PAID");

  useEffect(() => {
    if (globalFilter && search) {
      dispatch(
        getPaymentSearchDataMiddleWare({
          field: globalFilter,
          value: search,
          status1: status,
        })
      );
    }
  }, [search]);

  console.log(status, "status");

  const template2 = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink  NextPageLink ",
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
              Rows per page:{" "}
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
  return (
    <div>
      <div className="payment__dashboard__container">
        <div className="payment__heading">Payments</div>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <Card className="paymentcard_eachcontainer">
              <SvgGross />
              <div className="price__listing">₱ 174050</div>
              <div>Gross Premium</div>
            </Card>
          </div>

          <div class="col-12 md:col-6 lg:col-3">
            <Card className="paymentcard_eachcontainer">
              <SvgCollected />
              <div className="price__listing">₱ 8400</div>
              <div>Collected Premium</div>
            </Card>
          </div>

          <div class="col-12 md:col-6 lg:col-3">
            <Card className="paymentcard_eachcontainer">
              <SvgReceivables />
              <div className="price__listing">₱ 8400</div>
              <div>Receivables</div>
            </Card>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <Card className="paymentcard_eachcontainer">
              <div className="mt-3">
                <SvgCommission />
              </div>
              <div className="price__listing">₱ 13920</div>
              <div>Earned Commission</div>
            </Card>
          </div>
        </div>

        <Card className="paymentCard_container">
          <TabView>
            <TabPanel header="Paid">
              <div class="grid">
                <div class="col-12 md:col-9 lg:col-9">
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-search" />

                    <InputText
                      placeholder="Search"
                      style={{ width: "100%", borderRadius: "10px" }}
                      value={status && search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </span>
                </div>
                <div class="col-12 md:col-3 lg:col-3">
                  <Dropdown
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.value)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Search by"
                    className="sorbyfilter__style"
                    dropdownIcon={<SvgDropdownicon />}
                  />
                </div>
              </div>
              <div>
                <PaymentCard
                  items={cities}
                  dataSearch={search}
                  status={"PAID"}
                  setStatus={setStatus}
                />
                <div className="paginator__container">
                  <Paginator
                    first={0}
                    rows={10}
                    totalRecords={50}
                    template={template2}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel
              header="Pending"
              headerStyle={{ fontSize: "16px", fontWeight: "500" }}
            >
              <div class="grid">
                <div class="col-12 md:col-9 lg:col-9">
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-search" />
                    {/* <SvgSearch/> */}
                    <InputText
                      placeholder="Search"
                      style={{ width: "100%", borderRadius: "10px" }}
                      value={status.a && search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </span>
                </div>
                <div class="col-12 md:col-3 lg:col-3">
                  <Dropdown
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.value)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Search by"
                    className="sorbyfilter__style"
                    dropdownIcon={<SvgDropdownicon />}
                  />
                </div>
              </div>
              <div>
                <PaymentCard
                  dataSearch={search}
                  status={"PENDING"}
                  setStatus={setStatus}
                />
                <div className="paginator__container">
                  <Paginator
                    first={0}
                    rows={10}
                    totalRecords={50}
                    template={template2}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Reviewing">
              <div class="grid">
                <div class="col-12 md:col-9 lg:col-9">
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-search" />
                    {/* <SvgSearch/> */}
                    <InputText
                      placeholder="Search"
                      style={{ width: "100%", borderRadius: "10px" }}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </span>
                </div>
                {/* <div class="col-12 md:col-3 lg:col-3">
                  <TableDropdownField label="Search By" />
                </div> */}
                <div class="col-12 md:col-3 lg:col-3">
                  <Dropdown
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.value)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Search by"
                    className="sorbyfilter__style"
                    dropdownIcon={<SvgDropdownicon />}
                  />
                </div>
              </div>
              <div>
                <PaymentCard
                  dataSearch={search}
                  status="REVIEWING"
                  setStatus={setStatus}
                />
                <div className="paginator__container">
                  <Paginator
                    first={0}
                    rows={10}
                    totalRecords={50}
                    template={template2}
                  />
                </div>
              </div>
            </TabPanel>
          </TabView>
        </Card>
        <div></div>
      </div>
    </div>
  );
};

export default Payments;
