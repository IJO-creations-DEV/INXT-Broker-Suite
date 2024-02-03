import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React, { useState, useRef, useEffect } from "react";
import TableDropdownField from "../../../component/tableDropDwonField";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SvgMotorTable from "../../../../assets/agentIcon/SvgMotorTable";
import SvgProfileC from "../../../../assets/agentIcon/SvgProfileC";
import SvgArrow from "../../../../assets/agentIcon/SvgArrow";
import SvgDownArrow from "../../../../assets/agentIcon/SvgDownArrow";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/icons/SvgDot";
import SvgDots from "../../../../assets/agentIcon/SvgDot";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { useSelector, useDispatch } from "react-redux";
import { getrenewalrequestSearchDataMiddleWare } from "../renewalRequestCard/store/renewalRequestMiddleware";

const RenewalRequestCard = () => {
  const [search, setSearch] = useState("");
  const [globalFilter, setGlobalFilter] = useState("Name");
  const [displayDialog, setDisplayDialog] = useState("");
  const [disableOption, setdisableOption] = useState("");
  const dispatch = useDispatch();
  const menu = useRef(null);

  const { renewalrequesttabledata, renewalrequestSearchList, loading } =
    useSelector(({ agentRenewalrequestMainReducers }) => {
      console.log(agentRenewalrequestMainReducers, "find main");
      return {
        loading: agentRenewalrequestMainReducers?.loading,
        renewalrequesttabledata:
          agentRenewalrequestMainReducers?.renewalrequesttabledata,
        renewalrequestSearchList:
          agentRenewalrequestMainReducers?.renewalrequestSearchList,
      };
    });

  // const [globalFilter, setGlobalFilter] = useState("policy Number");
  const policy = [
    { name: "Name", code: "Name" },
    { name: "Policy Number", code: "policy Number" },
  ];

  const handleMenuToggle = (event, menuRef, rowData) => {
    navigate("/agent/renewal/waiting/id");
  };
  const handleMenuClick = (menuItem) => {
    if (menuItem == "renewal") {
      navigate("/agent/createquote/coveragedetails");
    }
  };

  const renderActions = () => {
    return (
      <div className="action__container">
        {/* <Menu model={menuItems} popup ref={menu} breakpoint="767px" /> */}
        <div
          className="action__Svg"
          onClick={(event) => handleMenuToggle(event, menu)}
        >
          <SvgArrow />
        </div>
      </div>
      // <div className="btn__container__view__edit">
      //   <Menu model={menuItems} popup ref={menu} breakpoint="767px" />
      //   <Button
      //     icon={<SvgDot />}
      //     className="view__btn"
      //     onClick={(event) => handleMenuToggle(event, menu, rowData)}
      //   />
      // </div>
    );
    // navigate("/agent/createquote/coveragedetails");
  };

  const renderViewEditButton = (rowData) => {
    const menuItems = [
      {
        label: "Reminder",
      },

      {
        label: "Renewal",
        command: () => handleMenuClick("renewal"),
      },
    ];
    //  return (
    //   <div className="action__container">
    //   <Menu model={menuItems} popup ref={menu} breakpoint="767px" />
    //     <div
    //       className="action__Svg"
    //       onClick={(event) => handleMenuToggle(event, menu, rowData)}
    //     >
    //       <SvgArrow/>
    //     </div>
    //   </div>
    //   // <div className="btn__container__view__edit">
    //   //   <Menu model={menuItems} popup ref={menu} breakpoint="767px" />
    //   //   <Button
    //   //     icon={<SvgDot />}
    //   //     className="view__btn"
    //   //     onClick={(event) => handleMenuToggle(event, menu, rowData)}
    //   //   />
    //   // </div>
    // );
  };

  useEffect(() => {
    if (globalFilter && search) {
      dispatch(
        getrenewalrequestSearchDataMiddleWare({
          field: globalFilter,
          value: search,
        })
      );
    }
  }, [search]);
  const navigate = useNavigate();
  const TableData = [
    {
      Name: "John Doe",
      ClientId: "012345",
      PolicyNumber: "012345",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "127332",
    },
    {
      Name: "Jane Smith",
      ClientId: "167890",
      PolicyNumber: "012345",
      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "1272721",
    },
    {
      Name: "Bob Johnson",
      ClientId: "254321",
      PolicyNumber: "2024 JAN 10",

      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "1270002",
    },
    {
      Name: "Alice Williams",
      ClientId: "398765",
      PolicyNumber: "2024 JAN 05",

      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "120002",
    },
    {
      Name: "Mike Davis",
      ClientId: "423456",
      PolicyNumber: "2024 JAN 18",

      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "111172",
    },
    {
      Name: "Sara Miller",
      ClientId: "578901",
      PolicyNumber: "2024 JAN 01",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "12000",
    },
    {
      Name: "Chris Brown",
      ClientId: "9987634",
      PolicyNumber: "2024 JAN 12",

      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "1221112",
    },
    {
      Name: "Emily Taylor",
      ClientId: "012345",
      PolicyNumber: "2024 JAN 28",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "12002",
    },
    {
      Name: "David Wilson",
      ClientId: "53628782",
      PolicyNumber: "2024-08-03",
      Category: "Individual",
      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "12233",
    },
    {
      Name: "Grace Anderson",
      ClientId: "287654",
      PolicyNumber: "2024-07-20",

      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "127272",
    },
  ];

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  const renderName = (rowData) => {
    return (
      <div className="assured__container">
        <div>
          <SvgProfileC />
        </div>
        <div>
          <div className="Name__text">{rowData.Name}</div>
          <div className="Name__sub___text">Client ID :{rowData.Actions} </div>
        </div>
      </div>
    );
  };

  const renderClientId = (rowData) => {
    return (
      <div className="policy__number__container">
        <div>
          <div className="policy__number__text">{rowData.ClientId}</div>
        </div>
      </div>
    );
  };

  const renderPolicyNumber = (rowData) => {
    return (
      <div className="Category__data__container">
        <div className="Category__data__text">{rowData.PolicyNumber}</div>
      </div>
    );
  };

  const renderPolicyType = (rowData) => {
    return (
      <div className="days__count__container">
        <div className="days__count__text">{rowData.PolicyType}</div>
      </div>
    );
  };
  const renderDate = (rowData) => {
    return (
      <div className="days__count__container">
        <div className="days__count__text">{rowData.Date}</div>
      </div>
    );
  };
  const renderCategory = (rowData) => {
    return (
      <div className="days__count__container">
        <div className="days__count__text">{rowData.Category}</div>
      </div>
    );
  };
  // const renderAction = () => {
  //   return (
  //     <div className="action__container">
  //       <div
  //         className="action__Svg"
  //         onClick={() => {
  //           handlesubmit();
  //         }}
  //       >
  //         <SvgDots/>
  //       </div>
  //     </div>
  //   );
  // };

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
            <span
              className="table__selector__text"
              style={{ color: "var(--text-color)", userSelect: "none" }}
            >
              Rows per page:{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
              dropdownIcon={<SvgDownArrow />}
            />
          </React.Fragment>
        </div>
      );
    },
  };

  const handlesubmit = () => {
    // navigate("/agent/policydetailedviewonly");
  };

  return (
    <div className="expiring__policy__card__container mt-4">
      <Card>
        <div class="grid">
          <div class="col-12 md:col-9 lg:col-9">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search"
                style={{
                  width: "100%",
                  padding: "1rem 2.75rem",
                  borderRadius: "10px",
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <Dropdown
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.value)}
              options={policy}
              optionLabel="name"
              optionValue="code"
              placeholder="Search by"
              className="feat_searchby_container"
              dropdownIcon={<SvgDownArrow />}
            />
          </div>
        </div>
        <div className="table__container">
          <DataTable
            // value={TableData}
            value={search ? renewalrequestSearchList : renewalrequesttabledata}
            tableStyle={{ minWidth: "50rem" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            scrollable={true}
            scrollHeight="60vh"
          >
            <Column
              body={renderName}
              header="Name"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderClientId}
              header="Client Id"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderPolicyNumber}
              header="Policy No"
              headerStyle={headerStyle}
            ></Column>

            <Column
              body={renderPolicyType}
              header="Policy Type"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderDate}
              header="Date"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderActions}
              header="Actions"
              headerStyle={headerStyle}
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default RenewalRequestCard;
