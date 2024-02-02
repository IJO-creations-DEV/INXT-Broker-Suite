import { InputText } from "primereact/inputtext";
// import TableDropdownField from "../../../../component/tableDropDwonField";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import SvgArrow from "../../../assets/icons/SvgArrow";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import "../../quotationModule/index.scss"
// import { useDispatch, useSelector } from "react-redux";
// import { getClaimTabelSearchList } from "./store/getClaimTabelDataMiddleWare";
import SvgMotorTable from "../../../assets/agentIcon/SvgMotorTable";



const LeadListingAllTable = () => {
//   const { claimListData, loading, claimSearchListData } = useSelector(
//     ({ claimTabelMainReducers }) => {
//       return {
//         loading: claimTabelMainReducers?.loading,
//         claimListData: claimTabelMainReducers?.claimListData,
//         claimSearchListData: claimTabelMainReducers?.claimSearchListData,
//       };
//     }
//   );
//   console.log(claimListData, "claimListData");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  
  const navigate = useNavigate();


  const TableData = [
    
    {
        id: "1",
        QuoteId: "QI001",
        LeadName: "Carson Darrin",
        PolicyType:"PC",
        GrossPremium:"4000.00",
        Date: "01 JAN 2024",
        Status: "Draft",
        Actions: <SvgArrow />,
      },
      {
        id: "2",
        QuoteId: "QI002",
        LeadName: "Carson Darrin",
        PolicyType:"CV",
        GrossPremium:"5000.00",
        Date: "01 JAN 2024",
        Status: "Completed",
        Actions: <SvgArrow />,
      },
      {
        id: "3",
        QuoteId: "QI003",
        LeadName: "Carson Darrin",
        PolicyType:"PC",
        GrossPremium:"9000.00",
        Date: "01 JAN 2024",
        
       
        Status: "Completed",
        Actions: <SvgArrow />,
      },
      {
        id: "4",
        QuoteId: "QI004",
        
        LeadName: "Carson Darrin",
        PolicyType:"CV",
        GrossPremium:"5000.00",
        Date: "01 JAN 2024",
        expiryDate:"01 JAN 2025",
        
        Status: "Draft",
        Actions: <SvgArrow />,
      },
     

];

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

  //   const template2 = {
  //     layout:
  //       "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
  //     RowsPerPageDropdown: (options) => {
  //       const dropdownOptions = [
  //         { label: 5, value: 5 },
  //         { label: 10, value: 10 },
  //         { label: 20, value: 20 },
  //         { label: 120, value: 120 },
  //       ];

  //     const renderViewEditButton = (rowData) => {

  //         return (
  //             <div className="btn__container__view__edit">
  //                 <div>
  //                     <Button
  //                         icon={<SvgArrow />}
  //                         className="view__btn"
  //                         // onClick={() => handleView(rowData)}
  //                     />
  //                 </div>

  //             </div>
  //         );
  //     };

  //     const renderclaimNumber = (rowData) => {
  //         return (
  //             <div className="name__box__container">
  //                 <div>{rowData.Svg}</div>
  //                 <div>
  //                     <div className="name__text">{rowData.claimNumber}</div>
  //                     {/* <div className="lead__id__text">Lead Id :{rowData.LeadID} </div> */}
  //                 </div>
  //             </div>
  //         )
  //     }

  //     const renderClientName = (rowData) => {
  //         return (
  //             <div className="category__text">
  //                 {rowData.ClientName}
  //             </div>
  //         )
  //     }

  //     const renderDate = (rowData) => {
  //         return (
  //             <div className="date__text">
  //                 {rowData.Date}
  //             </div>
  //         )
  //     }

  // const renderStatus = (rowData) => {
  //   return (
  //       // <div className="quote__text" style={{backgroundColor:'#FEF2E1',color:'#C1622A',borderRadius:"25px",height:'25px',alignItems:'center',justifyContent:'center',display:'flex',width:'100px'}}>
  //       //     {rowData.Status}
  //       // </div>
  //       <div
  //       className={
  //           rowData.Status === "Processing"
  //             ? "company__status__type__green"
  //             : rowData.Status === "Completed"
  //             ? "company__status__type__blue"
  //             : "client__view__type__red"
  //         }
  //         >
  //           {rowData.Status}
  //         </div>
  //   )
  // }

  //     // const handleView = () => {
  //     //     navigate("/agent/leadedit")
  //     // }

  //     const ViewheaderStyle = {

  //         textalign: "center",
  //         fontSize: 16,
  //         fontFamily: 'Poppins',
  //         fontWeight: 500,
  //         color: "#000",
  //         border: " none",
  //         // display: "grid",
  //         // alignItem: "center",
  //     };

  //     const headerStyle = {
  //         textalign: "center",
  //         fontSize: 16,
  //         fontFamily: 'Poppins',
  //         fontWeight: 500,
  //         color: "#000",
  //         border: " none",
  //     };

  //     const rendercheckedHeader = (value) => {
  //         return (
  //             selectedProducts.length === 0
  //                 ? value
  //                 : selectedProducts.length === 1
  //                     ? <div className="header__btn__container"><div className="header__delete__btn">Delete</div><div className="header__edit__btn">Edit</div></div>
  //                     : <div className="header__delete__btn">Delete</div>
  //         )
  //     }

  //     const renderUncheckedHeader = (value) =>{
  //         return(
  //             selectedProducts.length == 0 && value
  //         )
  //     }

  //     return (
  //         <div>
  //             <div class="grid">
  //                 <div class="col-12 md:col-9 lg:col-9">
  //                     <span className="p-input-icon-left" style={{width:'100%'}}>
  //                         <i className="pi pi-search" />
  //                         {/* <SvgSearch/> */}
  //                         <InputText placeholder="Search" style={{ width: "100%",padding: "1rem 2.75rem",borderRadius:"10px" }}/>
  //                     </span>
  //                 </div>
  //                 <div class="col-12 md:col-3 lg:col-3">
  //                 <Dropdown   optionLabel="name" className="feat_searchby_container"
  //                 placeholder="Search by"  dropdownIcon={<SvgDownArrow/>}/>
  //                 </div>
  //             </div>
  //             <div  className="lead__table__container">
  //                 <DataTable
  //                     value={TableData}
  //                     paginator
  //                     rows={5}
  //                     selectionMode={selectionMode}
  //                     selection={selectedProducts}
  //                     rowsPerPageOptions={[5, 10, 25, 50]}
  //                     currentPageReportTemplate="{first} - {last} of {totalRecords}"
  //                     paginatorTemplate={template2}
  //                     className="corrections__table__main"
  //                     onSelectionChange={(e) => setSelectedProducts(e.value)}
  //                     dataKey="id"
  //                     tableStyle={{ minWidth: '50rem' }}

  //  scrollable={true}
  //  scrollHeight="60vh"
  //                 >

  //                     <Column body={renderclaimNumber} header={
  //                         rendercheckedHeader("claimNumber")
  //                     } headerStyle={headerStyle}></Column>
  //                     <Column body={renderClientName} header={renderUncheckedHeader("ClientName")} headerStyle={headerStyle}></Column>
  //                     <Column body={renderDate} header={renderUncheckedHeader("Date")} headerStyle={headerStyle}></Column>
  //                     <Column body={renderStatus} header={renderUncheckedHeader("Status")} headerStyle={headerStyle}></Column>
  //                     <Column body={renderViewEditButton} header={renderUncheckedHeader("Actions")}   headerStyle={{ ...ViewheaderStyle, textAlign: 'center' }}></Column>
  //                 </DataTable>
  //             </div>
  //         </div>
  //       );
  //     },
  //   };

  const renderViewEditButton = (rowData) => {
    return (
      <div className="btn__container__view__edit">
        <div>
          <Button
            icon={<SvgArrow />}
            className="view__btn"
            onClick={() => handleView(rowData)}
          />
        </div>
      </div>
    );
  };

  const renderclaimNumber = (rowData) => {
    return (
      <div className="name__box__container">
        <div>
          <SvgMotorTable />
        </div>
        <div>
          <div className="name__text">{rowData.claimNumber}</div>
          {/* <div className="lead__id__text">Lead Id :{rowData.LeadID} </div> */}
        </div>
      </div>
    );
  };

  const renderQuoteId = (rowData) => {
    return <div className="category__text">{rowData.QuoteId}</div>;
  };
  const renderPolicyType = (rowData) => {
    console.log(rowData,"find rowData")
    return <div className="category__text">{rowData.PolicyType}</div>;
  };
  const renderLeadName = (rowData) => {
    return <div className="category__text">{rowData.LeadName}</div>;
  };

  const renderDate = (rowData) => {
    return <div className="date__text">{rowData.Date}</div>;
  };
  const renderGrossPremium = (rowData) => {
    return <div className="date__text">{rowData.GrossPremium}</div>;
  };

  const renderStatus = (rowData) => {
    return (
      // <div className="quote__text" style={{backgroundColor:'#FEF2E1',color:'#C1622A',borderRadius:"25px",height:'25px',alignItems:'center',justifyContent:'center',display:'flex',width:'100px'}}>
      //     {rowData.Status}
      // </div>
      <div
        className={
          rowData.Status === "Draft"
            ? "company__status__type__green"
            : "company__status__type__blue"
           
        }
      >
        {rowData.Status}
      </div>
    );
  };
  const [search, setSearch] = useState("");
//   const dispatch = useDispatch();
  // useEffect(() => {
  //   if (search?.length > 0) {
  //     dispatch(getClaimTabelSearchList(search))
  //   }
  // }, [search])

  const [globalFilter, setGlobalFilter] = useState("policy Number");
  const cities = [
    { name: "Policy Number", code: "policy Number" },
    { name: "ClientID", code: "ClientID" },
  ];

//   useEffect(() => {
//     if (globalFilter && search) {
//       dispatch(
//         getClaimTabelSearchList({
//           field: globalFilter,
//           value: search,
//         })
//       );
//     }
//   }, [search]);
  const handleView = (rowData) => {
    console.log(rowData, "find rowData");
    if (rowData?.Status === "Draft") {
      navigate("/agent/createquote/policydetails/createquote/12");
    } else if (rowData?.Status === "Completed") {
      navigate(`/agent/claimrequest/requestapproval/123`);
    }
   
  };

  const ViewheaderStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
    // display: "grid",
    // alignItem: "center",
  };

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  const rendercheckedHeader = (value) => {
    return selectedProducts.length === 0 ? (
      value
    ) : selectedProducts.length === 1 ? (
      <div className="header__btn__container">
        <div className="header__delete__btn">Delete</div>
        <div className="header__edit__btn">Edit</div>
      </div>
    ) : (
      <div className="header__delete__btn">Delete</div>
    );
  };

  const renderUncheckedHeader = (value) => {
    return selectedProducts.length == 0 && value;
  };

  return (
    <div>
      <div class="grid">
        <div class="col-12 md:col-9 lg:col-9">
          <span className="p-input-icon-left" style={{ width: "100%" }}>
            <i className="pi pi-search" />
            {/* <SvgSearch/> */}
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
            options={cities}
            optionLabel="name"
            optionValue="code"
            placeholder="Search by"
            className="feat_searchby_container"
            dropdownIcon={<SvgDownArrow />}
          />
        </div>
      </div>
      <div className="lead__table__container">
        <DataTable
        //   value={search ? claimSearchListData : claimListData}
        value={TableData}
          paginator
          rows={5}
          selectionMode={selectionMode}
          selection={selectedProducts}
          rowsPerPageOptions={[5, 10, 25, 50]}
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          className="corrections__table__main"
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
        >
           
          <Column
            body={renderQuoteId}
            header={rendercheckedHeader("Quote Id")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderLeadName}
            header={renderUncheckedHeader("Lead Name")}
            headerStyle={headerStyle}
          ></Column>
         
         
           <Column
            body={renderPolicyType}
            header={renderUncheckedHeader("Policy Type")}
            headerStyle={headerStyle}
          ></Column>
           <Column
            body={renderGrossPremium}
            header={renderUncheckedHeader("GrossPremium")}
            headerStyle={headerStyle}
          ></Column>
           <Column
            body={renderDate}
            header={renderUncheckedHeader("Date")}
            headerStyle={headerStyle}
          ></Column>
         
          <Column
            body={renderStatus}
            header={renderUncheckedHeader("Status")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderViewEditButton}
            header={renderUncheckedHeader("Actions")}
            headerStyle={{ ...ViewheaderStyle, textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default LeadListingAllTable;
