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
import { getQuotependingSearchDataMiddleWare } from "../quotePendingCard/store/quotePendingMiddleware";
import { Avatar } from "primereact/avatar";

const QuotePendingCard = () => {
  const [search, setSearch] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");
  const [displayDialog, setDisplayDialog] = useState("");
  const [disableOption, setdisableOption] = useState("");
  const dispatch = useDispatch("");
  const menu = useRef(null);

  const { quotependingtabledata, quotependingSearchList, loading } =
    useSelector(({ agentQuotependingMainReducers }) => {
      console.log(agentQuotependingMainReducers, "find quote");
      return {
        loading: agentQuotependingMainReducers?.loading,
        quotependingtabledata:
          agentQuotependingMainReducers?.quotependingtabledata,
        quotependingSearchList:
          agentQuotependingMainReducers?.quotependingSearchList,
      };
    });
  // const [globalFilter, setGlobalFilter] = useState("policy Number");
  const policy = [
    { name: "Name", code: "Name" },
    { name: "Policy Number", code: "policy Number" },
  ];

  const handleMenuToggle = (event, menuRef, rowData) => {
    navigate(`/agent/convertpolicy/customerinfo/edit/${123}`);
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
        getQuotependingSearchDataMiddleWare({
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
      LeadId: "012345",
      QuoteId: "012345",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "127332",
    },
    {
      Name: "Jane Smith",
      LeadId: "167890",
      QuoteId: "012345",
      Category: "Company",
      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "1272721",
    },
    {
      Name: "Bob Johnson",
      LeadId: "254321",
      QuoteId: "2024 JAN 10",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "1270002",
    },
    {
      Name: "Alice Williams",
      LeadId: "398765",
      QuoteId: "2024 JAN 05",
      Category: "Company",
      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "120002",
    },
    {
      Name: "Mike Davis",
      LeadId: "423456",
      QuoteId: "2024 JAN 18",
      Category: "Company",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "111172",
    },
    {
      Name: "Sara Miller",
      LeadId: "578901",
      QuoteId: "2024 JAN 01",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "12000",
    },
    {
      Name: "Chris Brown",
      LeadId: "9987634",
      QuoteId: "2024 JAN 12",
      Category: "Company",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "1221112",
    },
    {
      Name: "Emily Taylor",
      LeadId: "012345",
      QuoteId: "2024 JAN 28",
      Category: "Individual",
      PolicyType: "Motor",
      Date: "01 JAN 2024",
      Actions: "12002",
    },
    {
      Name: "David Wilson",
      LeadId: "53628782",
      QuoteId: "2024-08-03",
      Category: "Individual",
      PolicyType: "Travel",
      Date: "01 JAN 2024",
      Actions: "12233",
    },
    {
      Name: "Grace Anderson",
      LeadId: "287654",
      QuoteId: "2024-07-20",
      Category: "Company",
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

  const handleSvg = (type, index) => {
    const colors = [
      "#D4635D",
      "#67D07A",
      "#D4635D",
      "#874EFF",
      "#EDC63B",
      "#A36EFF",
      "#5DCB67",
      "#6366F1",
      "#D8BFD8",
      "#FFA07A",
    ];

    const backgroundColor =
      colors[parseInt(index) % colors.length] || "#CCCCCC";
    console.log(parseInt(index) % colors.length, "find");

    return (
      <Avatar
        label={type.charAt(0)}
        size="xlarge"
        shape="circle"
        style={{ backgroundColor: backgroundColor, color: "#fff" }}
      />
    );
  };

  const renderName = (rowData) => {
    return (
      <div className="name__box__container">
        <div>{handleSvg(rowData.Name, rowData.id)}</div>
        <div className="name__text">{rowData.Name}</div>
      </div>
    );
  };
  const renderLeadId = (rowData) => {
    return (
      <div className="policy__number__container">
        <div>
          <div className="policy__number__text">{rowData.LeadId}</div>
        </div>
      </div>
    );
  };

  const renderQuoteId = (rowData) => {
    return (
      <div className="Category__data__container">
        <div className="Category__data__text">{rowData.QuoteId}</div>
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
            value={search ? quotependingSearchList : quotependingtabledata}
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
              body={renderLeadId}
              header="Lead Id"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderQuoteId}
              header="Quote ID"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderCategory}
              header="Category"
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

export default QuotePendingCard;
