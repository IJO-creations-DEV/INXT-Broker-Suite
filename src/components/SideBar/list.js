import SvgAgentClientIcon from "../../assets/agentIcon/SvgAgentClientIcon";
import SvgAgentHomeIcon from "../../assets/agentIcon/SvgAgentHomeIcon";
import SvgAgentItemsIcon from "../../assets/agentIcon/SvgAgentItemsIcon";
import SvgAgentLeadIcon from "../../assets/agentIcon/SvgAgentLeadIcon";
import SvgAgentPaymentIcon from "../../assets/agentIcon/SvgAgentPaymentIcon";
import SvgClient from "../../assets/agentIcon/SvgClient";
import SvgLead from "../../assets/agentIcon/SvgLead";
import SvgPaymentIcon from "../../assets/agentIcon/SvgPaymentIcon";
import SvgPolicyIcon from "../../assets/agentIcon/SvgPolicyIcon";
import SvgQuotationIcon from "../../assets/agentIcon/SvgQuotationIcon";
import SvgAccountIcon from "../../assets/icons/SvgAccountIcon";
import SvgMassterIcon from "../../assets/icons/SvgMassterIcon";
import SvgReportsIcon from "../../assets/icons/SvgReportsIcon";
import { useParams } from "react-router-dom";

export const menuList = [
  {
    name: "Master",
    icon: <SvgMassterIcon />,
    submenu: [
      {
        id: 1,
        name: "Generals",
        submenu: [
          {
            id: 1,
            name: "Organization",
            path: "/master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Company",
                path: "/master/generals/organization/companymaster",
                includes: [
                  "/master/generals/organization/companymaster",
                  "/master/generals/organization/companymaster/add/",
                  "/master/generals/organization/companymaster/edit/",
                  "/master/generals/organization/companymaster/view/",
                ],
              },

              {
                id: 2,
                name: "Branch",
                path: "/master/generals/organization/branchmaster",
                includes: [
                  "/master/generals/organization/branchmaster",
                  "/master/generals/organization/branchmaster/add/",
                  "/master/generals/organization/branchmaster/edit/",
                  "/master/generals/organization/branchmaster/view/",
                ],
              },
            ],
          },
          {
            id: 2,
            name: "Insurance Management",
            path: "/master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Insurance Company",
                path: "/master/generals/insurancemanagement/insurancecompany",
                includes: [
                  "/master/generals/insurancemanagement/insurancecompany",
                  "/master/generals/insurancemanagement/insurancecompany/add/",
                  "/master/generals/insurancemanagement/insurancecompany/edit/",
                  "/master/generals/insurancemanagement/insurancecompany/view/",
                ],
              },
              {
                id: 2,
                name: "Line of Business",
                path: "/master/generals/insurancemanagement/lineofbusiness",
                includes: [
                  "/master/generals/insurancemanagement/lineofbusiness",
                  "/master/generals/insurancemanagement/lineofbusiness/add/",
                  "/master/generals/insurancemanagement/lineofbusiness/edit/",
                  "/master/generals/insurancemanagement/lineofbusiness/view/",
                ],
              },
              {
                id: 3,
                name: "Product",
                path: "/master/generals/insurancemanagement/productmaster",
                includes: [
                  "/master/generals/insurancemanagement/productmaster",
                  "/master/generals/insurancemanagement/productmaster/add/",
                  "/master/generals/insurancemanagement/productmaster/edit/",
                  "/master/generals/insurancemanagement/productmaster/view/",
                ],
              },
              // {
              //   id: 4,
              //   name: "Policy Type",
              //   path: "/master/generals/insurancemanagement/policytype",
              // },
              {
                id: 5,
                name: "Cover",
                path: "/master/generals/insurancemanagement/cover",
                includes: [
                  "/master/generals/insurancemanagement/cover",
                  "/master/generals/insurancemanagement/cover/add/",
                  "/master/generals/insurancemanagement/cover/view/",
                  "/master/generals/insurancemanagement/cover/edit/",
                ],
              },
              {
                id: 6,
                name: "Signatories",
                path: "/master/generals/insurancemanagement/signatories",
                includes: [
                  "/master/generals/insurancemanagement/signatories",
                  "/master/generals/insurancemanagement/signatories/add/",
                  "/master/generals/insurancemanagement/signatories/edit/",
                  "/master/generals/insurancemanagement/signatories/view/",
                ],
              },
              {
                id: 7,
                name: "Vehicle",
                path: "/master/generals/insurancemanagement/vehicle",
                includes: [
                  "/master/generals/insurancemanagement/vehicle",
                  "/master/generals/insurancemanagement/vehicle/add/",
                  "/master/generals/insurancemanagement/vehicle/edit/",
                  "/master/generals/insurancemanagement/vehicle/view/",
                ],
              },
            ],
          },
          {
            id: 3,
            name: "Location",
            path: "/master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Country",
                path: "/master/generals/location/country",
                includes: [
                  "/master/generals/location/country",
                  "/master/generals/location/country/add",
                  "/master/generals/location/country/edit",
                  "/master/generals/location/country/view",
                ],
              },
              {
                id: 2,
                name: "State",
                path: "/master/generals/location/state",
                includes: [
                  "/master/generals/location/state",
                  "/master/generals/location/state/add",
                  "/master/generals/location/state/edit",
                  "/master/generals/location/state/view",
                ],
              },
              {
                id: 3,
                name: "City Master",
                path: "/master/generals/location/city",
                includes: [
                  "/master/generals/location/city",
                  "/master/generals/location/city/add",
                  "/master/generals/location/city/edit",
                  "/master/generals/location/city/view",
                ],
              },
            ],
          },
          {
            id: 4,
            name: "Commission",
            path: "/master/generals/commission",
            includes: [
              "/master/generals/commission",
              "/master/generals/commission/addcommission",
              "/master/generals/commission/editcommission",
              "/master/generals/commission/viewcommission/",
            ],
          },
          {
            id: 5,
            name: "Employee Management",
            path: "/master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Hierarchy",
                path: "/master/generals/employeemanagement/hierarchy",
                includes: [
                  "/master/generals/employeemanagement/hierarchy",
                  "/master/generals/employeemanagement/hierarchy/add",
                  "/master/generals/employeemanagement/hierarchy/edit/",
                  "/master/generals/employeemanagement/hierarchy/view/",
                ],
              },
              {
                id: 2,
                name: "Designation",
                path: "/master/generals/employeemanagement/designation",
                includes: [
                  "/master/generals/employeemanagement/designation",
                  "/master/generals/employeemanagement/designation/add/",
                  "/master/generals/employeemanagement/designation/edit/",
                  "/master/generals/employeemanagement/designation/view/",
                ],
              },
              {
                id: 3,
                name: "Employee",
                path: "/master/generals/employeemanagement/employee",
                includes: [
                  "/master/generals/employeemanagement/employee",
                  "/master/generals/employeemanagement/employee/add/",
                  "/master/generals/employeemanagement/employee/edit/",
                  "/master/generals/employeemanagement/employee/view/",
                ],
              },
            ],
          },
          {
            id: 6,
            name: "User Management",
            path: "/master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "User",
                path: "/master/generals/usermanagement/user",
                includes: [
                  "/master/generals/usermanagement/user",
                  "/master/generals/usermanagement/user/add",
                  "/master/generals/usermanagement/user/edit/",
                  "/master/generals/usermanagement/user/view/",
                ],
              },
              {
                id: 2,
                name: "Role",
                path: "/master/generals/usermanagement/role",
                includes: [
                  "/master/generals/usermanagement/role",
                  "/master/generals/usermanagement/role/add/",
                  "/master/generals/usermanagement/role/edit/",
                  "/master/generals/usermanagement/role/view/",
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Finance",
        submenu: [
          {
            id: 1,
            name: "Transaction code",
            path: "/master/finance/transactioncode",
            includes: [
              "/master/finance/transactioncode",
              "/master/finance/transactioncode/addtransactioncode",
              "/master/finance/transactioncode/transactioncodeedit",
              "/master/finance/transactioncode/transactioncodedetails",
            ],
          },
          {
            id: 2,
            name: "Currency",
            path: "/master/finance/currency",
            includes: [
              "/master/finance/currency",
              "/master/finance/currency/addcurrency",
              "/master/finance/currency/editcurrency",
              "/master/finance/currency/viewcurrency",
            ],
          },
          {
            id: 3,
            name: "Exchange Rate",
            path: "/master/finance/exchangerate",
            includes: [
              "/master/finance/exchangerate",
              "/master/finance/exchangerate/addexchange",
              "/master/finance/exchangerate/saveandeditexchange",
              "/master/finance/exchangerate/viewexchange",
            ],
          },
          {
            id: 4,
            name: "Bank",
            path: "/master/finance/bank",
            includes: [
              "/master/finance/bank",
              "/master/finance/bank/addbankmaster",
              "/master/finance/bank/accountdataview",
              "/master/finance/bank/accountdataview/addaccountdetail",
              "/master/finance/bank/accountdataview/viewaccountdetail",
              "/master/finance/bank/accountdataview/editaccountdetail",
            ],
          },
          {
            id: 5,
            name: "Account Category",
            path: "/master/finance/accountcategory",
            includes: ["/master/finance/accountcategory"],
          },
          {
            id: 6,
            name: "Main Account",
            path: "/master/finance/mainaccount",
            includes: [
              "/master/finance/mainaccount",
              "/master/finance/mainaccount/addmainaccount",
              "/master/finance/mainaccount/editmainaccount",
              "/master/finance/mainaccount/viewmainaccount",
            ],
          },
          {
            id: 7,
            name: "Sub Account",
            path: "/master/finance/subaccount",
            includes: [
              "/master/finance/subaccount",
              "/master/finance/subaccount/subaccountedit",
              "/master/finance/subaccount/subaccountdetails",
            ],
          },
          {
            id: 8,
            name: "Taxation",
            path: "/master/finance/taxation",
            includes: [
              "/master/finance/taxation",
              "/master/finance/taxation/addtaxation",
              "/master/finance/taxation/taxationedit",
              "/master/finance/taxation/taxationdetails",
            ],
          },
          {
            id: 9,
            name: "Petty cash",
            path: "/master/finance/pettycash",
            includes: [
              "/master/finance/pettycash",
              "/master/finance/pettycash/addpettycash",
              "/master/finance/pettycash/editpettycash/",
              "/master/finance/pettycash/pettycashdetail/",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Operations",
    icon: <SvgReportsIcon />,
    submenu: [
      {
        name: "Home",
        icon: <SvgAgentHomeIcon color="#9DA4AE" />,
        path: "/",
        includes: [
          "/",
          "/agent/notification",
          "/agent/viewprofile",
          "/agent/openitems",
          "/agent/openitems/upcomingevents",
        ],
      },
      {
        name: "Leads/Prospects",
        icon: <SvgAgentLeadIcon color="#9DA4AE" />,
        path: "/agent/leadlisting",
        includes: [
          "/agent/leadlisting",
          "/agent/createlead",
          "/createquote/policydetails/createquote/",
          "/createquote/coveragedetails/coveragecreate/",
          "/createquote/accessories/accessoriescreate/",
          "/agent/createquote/ordersummary",
          "/agent/quotedetailview",
          "/agent/convertpolicy/customerinfo/view/",
          "/agent/convertpolicy/uploadvehiclephotos",
          "/agent/coveragedetailedview",
          "/agent/policyapproval",
          "/agent/uploadpolicy",
          "/agent/createquote/policydetails/createquote/",
          "/agent/createquote/coveragedetails/coveragecreate/",
          "/agent/leadedit",
          "/agent/createquote/accessories/accessoriescreate/",
          "/agent/quotelisting",
          "/agent/convertpolicy/customerinfo/edit/",
          "/agent/editquote/policydetails/quotedetails/",
          "/agent/quotedetailedit",
        ],
      },
      {
        name: "Clients",
        icon: <SvgAgentClientIcon color="#9DA4AE" />,
        path: "/agent/clientlisting",
        includes: [
          "/agent/clientlisting",
          "/agent/clientedit",
          "/agent/clientview/",
          "/agent/policydetailedview",
          "/agent/policydetailedview/accountview",
          "/agent/policydetailedviewonly",
          "/agent/claimrequest/claimdetails",
          "/agent/claimrequest/sendmail",
          "/agent/claimrequest/requestapproval/",
          "/agent/claimrequest/adjustersubmission",
          "/agent/claimrequest/settlementapproval",
          "/agent/claimrequest/settlementdetails/",
          "/agent/claimdetailedview/",
          "/agent/renewalquote/coveragedetails/coveragedetail/",
          "/agent/createquote/accessories/accessorirsdetails/",
          "/agent/createquote/ordersummaryquote",
          "/agent/endorsement/paymentconfirmation",
          "/agent/policy/paymentoptions",
          "/agent/endorsement/paymenterror/",
          "/agent/uploadendorsement",
          "/agent/endorsementdetailedview/123",
          "/agent/endorsement/paymentconfirmation",
          "/agent/endorsement/personaldetails",
          "/agent/uploadendorsement",
          "/agent/endorsementdetailedview/123",
          "/agent/endorsement/paymentconfirmation",
          "/agent/policy/paymentapproval",
          "/agent/renewal/waiting/",
          "/agent/renewalquote/accessories/accessorirsdetails/",
          "/agent/renewalquote/ordersummary",
          "/agent/endorsementdetailedview/",
          "/agent/endorsement/rejected/",
          "/agent/createquote/coveragedetails/coveragedetail/",
          "/agent/claimrejected",
          "/agent/claimdocumentupload",
          "/agent/endorsementdetailedviewonly/",
        ],
      },
      {
        name: "Quotation",
        icon: <SvgQuotationIcon color="#9DA4AE" />,
        path: "/agent/Quotation",
        includes: ["/agent/Quotation"],
      },
      {
        name: "Policy",
        icon: <SvgPolicyIcon color="#9DA4AE" />,
        path: "/agent/policy",
        includes: ["/agent/policy"],
      },
      {
        name: "Claims",
        icon: <SvgAgentItemsIcon color="#9DA4AE" />,
        path: "/agent/claim",
        includes: ["/agent/claim"],
      },
      {
        name: "Open Items",
        icon: <SvgAgentItemsIcon color="#9DA4AE" />,
        path: "/agent/openitemslistdata",
        includes: [
          "/agent/openitemslistdata",
          "/agent/openitemslistdata",
          "/agent/openitems/expiringpolicy",
          "/agent/openitems/quotepending",

          "/agent/openitems/renewalrequest",
        ],
      },
      {
        name: "Payments",
        icon: <SvgAgentPaymentIcon color="#9DA4AE" />,
        path: "/agent/payments",
        includes: ["/agent/payments"],
      },
      
     
      
    ],
  },
  {
    name: "Accounts",
    icon: <SvgAccountIcon />,
    submenu: [
      {
        id: 1,
        name: "Receipts",
        path: "/accounts/receipts",
        includes: [
          "/accounts/receipts/addreceipts",
          "/accounts/receipts/receiptdetailview",
          "/accounts/receipts/addreceiptedit",
          "/accounts/receipts/paymentdetails",
          "/accounts/receipts",
        ],
      },
      {
        id: 2,
        name: "Payment Voucher",
        path: "/accounts/paymentvoucher",
        includes: [
          "/accounts/paymentvoucher",
          "/accounts/paymentvoucher/createvoucher",
          "/accounts/paymentvoucher/detailview/",
          "/accounts/paymentvoucher/SpecificVoucher",
          "/accounts/paymentvoucher/bankdetailselection",
        ],
      },
      {
        id: 3,
        name: "Petty Cash",
        submenu: [
          {
            id: 1,
            name: "Initiate",
            path: "/accounts/pettycash/pettycashcodeinitiate",
            includes: [
              "/accounts/pettycash/pettycashcodeinitiate",
              "/accounts/pettycash/pettycashcodeinitiate/initiate",
              "/accounts/pettycash/PettyCashCodeDetails",
            ],
          },
          {
            id: 2,
            name: "Request",
            path: "/accounts/pettycash/pettycashrequest",
            includes: [
              "/accounts/pettycash/pettycashrequest",
              "/accounts/pettycash/addrequest/add/",
              "/accounts/pettycash/addrequesttable",
              "/accounts/pettycash/request",
              "/accounts/pettycash/editrequestform/edit/",
              "/accounts/pettycash/editrequestform/view/",
            ],
          },
          {
            id: 3,
            name: "Disbursement",
            path: "/accounts/pettycash/disbursement",
            includes: [
              "/accounts/pettycash/disbursement",
              "/accounts/pettycash/adddisbursement",
              "/accounts/pettycash/adddisbursementtable",
              "/accounts/pettycash/disbursementdetailview",
            ],
          },
          {
            id: 4,
            name: "Receipts",
            path: "/accounts/pettycash/receipts",
            includes: [
              "/accounts/pettycash/receipts",
              "/accounts/pettycash/addreceipts",
              "/accounts/pettycash/receiptlist",
              "/accounts/pettycash/addreceiptstable",
            ],
          },
          {
            id: 5,
            name: "Replenish",
            path: "/accounts/pettycash/replenish",
            includes: [
              "/accounts/pettycash/replenish",
              "/accounts/pettycash/addreplenish",
              "/accounts/pettycash/addreplenishtable",
              "/accounts/pettycash/replenishtdetailview",
            ],
          },
        ],
      },

      {
        id: 4,
        name: "Journal Voucher",
        path: "/accounts/journalvoucher",
        includes: [
          "/accounts/journalvoucher",
          "/accounts/journalvoucher/addjournalvoucture",
          "/accounts/journalvoucher/detailsjournalvocture/",
        ],
      },
      {
        id: 5,
        name: "Correction JV",
        path: "/accounts/correctionsjv/correctionsjvdetails",
        includes: ["/accounts/correctionsjv/correctionsjvdetails"],
      },
      {
        id: 6,
        name: "Reversal JV",
        path: "/accounts/reversaljv/reversaljvdetails",
        includes: ["/accounts/reversaljv/reversaljvdetails"],
      },
    ],
  },
  {
    name: "Reports",
    icon: <SvgReportsIcon />,
    submenu: [
      {
        id: 1,
        name: "Operational Reports",
        // path: "/reports/operationalreports",
        submenu: [
          {
            id: 1,
            name: "Production",
            path: "/reports/operationalreports/production",
            includes: ["/reports/operationalreports/production"],
          },
          {
            id: 2,
            name: "Claims",
            path: "/reports/operationalreports/claims",
            includes: ["/reports/operationalreports/claims"],
          },
          {
            id: 3,
            name: "Renewal",
            path: "/reports/operationalreports/renewal",
            includes: ["/reports/operationalreports/renewal"],
          },
          {
            id: 4,
            name: "Remittance",
            path: "/reports/operationalreports/remittance",
            includes: ["/reports/operationalreports/remittance"],
          },
          {
            id: 5,
            name: "Broker Commission",
            path: "/reports/operationalreports/brokercommision",
            includes: ["/reports/operationalreports/brokercommision"],
          },
        ],
      },
      {
        id: 2,
        name: "Financial Reports",
        // path: "/reports/operationalreports",
        submenu: [
          {
            id: 1,
            name: "SOA/Premium Receivable",
            path: "/reports/financialreports/soapremiumreceivable",
            includes: ["/reports/financialreports/soapremiumreceivable"],
          },
          {
            id: 2,
            name: "Collection Report",
            path: "/reports/financialreports/collectionreport",
            includes: ["/reports/financialreports/collectionreport"],
          },
          {
            id: 3,
            name: "Payables",
            path: "/reports/financialreports/Payables",
            includes: ["/reports/financialreports/Payables"],
          },
          {
            id: 4,
            name: "Journal",
            path: "/reports/financialreports/journal",
            includes: ["/reports/financialreports/journal"],
          },
          {
            id: 5,
            name: "Trail Balance",
            path: "/reports/financialreports/trailbalance",
            includes: ["/reports/financialreports/trailbalance"],
          },
        ],
      },
    ],
  },
];
