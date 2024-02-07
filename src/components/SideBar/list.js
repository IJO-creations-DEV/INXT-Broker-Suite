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
              },
              {
                id: 2,
                name: "Branch",
                path: "/master/generals/organization/branchmaster",
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
              },
              {
                id: 2,
                name: "Line of Business",
                path: "/master/generals/insurancemanagement/lineofbusiness",
              },
              {
                id: 3,
                name: "Product",
                path: "/master/generals/insurancemanagement/productmaster",
              },
              // {
              //   id: 4,
              //   name: "Policy Type",
              //   path: "master/generals/insurancemanagement/policytype",
              // },
              {
                id: 5,
                name: "Cover",
                path: "/master/generals/insurancemanagement/cover",
              },
              {
                id: 6,
                name: "Signatories",
                path: "/master/generals/insurancemanagement/signatories",
              },
              {
                id: 7,
                name: "Vehicle",
                path: "/master/generals/insurancemanagement/vehicle",
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
              },
              {
                id: 2,
                name: "State",
                path: "/master/generals/location/state",
              },
              {
                id: 3,
                name: "City Master",
                path: "/master/generals/location/city",
              },
            ],
          },
          {
            id: 4,
            name: "Commission",
            path: "/master/generals/commission",
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
              },
              {
                id: 2,
                name: "Designation",
                path: "/master/generals/employeemanagement/designation",
              },
              {
                id: 3,
                name: "Employee",
                path: "/master/generals/employeemanagement/employee",
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
              },
              {
                id: 2,
                name: "Role",
                path: "/master/generals/usermanagement/role",
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
          },
          {
            id: 2,
            name: "Currency",
            path: "/master/finance/currency",
          },
          {
            id: 3,
            name: "Exchange Rate",
            path: "/master/finance/exchangerate",
          },
          {
            id: 4,
            name: "Bank",
            path: "/master/finance/bank",
          },
          {
            id: 5,
            name: "Account Category",
            path: "/master/finance/accountcategory",
          },
          {
            id: 6,
            name: "Main Account",
            path: "/master/finance/mainaccount",
          },
          {
            id: 7,
            name: "Sub Account",
            path: "/master/finance/subaccount",
          },
          {
            id: 8,
            name: "Taxation",
            path: "/master/finance/taxation",
          },
          {
            id: 9,
            name: "Petty cash",
            path: "/master/finance/pettycash",
          },
        ],
      },
    ],
  },
  {
    name: "Broker",
    icon: <SvgReportsIcon/>,
    submenu: [
      {
        name: "Home",
        icon:<SvgAgentHomeIcon color="#9DA4AE"/>,
        path: "/",
      },
      {
        name: "Leads",
        icon:<SvgAgentLeadIcon color="#9DA4AE"/>,
        path: "/agent/leadlisting",
      },
      {
        name: "Clients",
        icon:<SvgAgentClientIcon color="#9DA4AE"/>,
        path: "/agent/clientlisting",
      },
      {
        name: "Open Items",
        icon:<SvgAgentItemsIcon color="#9DA4AE"/>,
        path: "/agent/openitemslistdata",
      },
      {
        name: "Payments",
        icon:<SvgAgentPaymentIcon color="#9DA4AE"/>,
        path: "/agent/payments",
      },
      {
        name: "Claim",
        icon:<SvgAgentItemsIcon color="#9DA4AE"/>,
        path: "/agent/claim",
      },
      {
        name: "Policy",
        icon:<SvgPolicyIcon color="#9DA4AE"/>,
        path: "/agent/policy",
      },
      {
        name: "Quotation",
        icon:<SvgQuotationIcon color="#9DA4AE"/>,
        path: "/agent/Quotation",
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
        path: "/accounts/receipts/policyreceipts",
      },
      {
        id: 2,
        name: "Payment Voucher",
        path: "/accounts/paymentvoucher",
      },
      {
        id: 3,
        name: "Petty Cash",
        submenu: [
          {
            id: 1,
            name: "Initiate",
            path: "/accounts/pettycash/pettycashcodeinitiate",
          },
          {
            id: 2,
            name: "Request",
            path: "/accounts/pettycash/pettycashrequest",
          },
          {
            id: 3,
            name: "Disbursement",
            path: "/accounts/pettycash/disbursement",
          },
          {
            id: 4,
            name: "Receipts",
            path: "/accounts/pettycash/receipts",
          },
          {
            id: 5,
            name: "Replenish",
            path: "/accounts/pettycash/replenish",
          },
        ],
      },

      {
        id: 4,
        name: "Journal Voucher",
        path: "/accounts/journalvoucher",
      },
      {
        id: 5,
        name: "Correction JV",
        path: "/accounts/correctionsjv/correctionsjvdetails",
      },
      {
        id: 6,
        name: "Reversal JV",
        path: "/accounts/reversaljv/reversaljvdetails",
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
            path: "/reports/operationalreports/production"
          },
          {
            id: 2,
            name: "Claims",
            path: "/reports/operationalreports/claims"
          }, {
            id: 3,
            name: "Renewal",
            path: "/reports/operationalreports/renewal"
          }, {
            id: 4,
            name: "Remittance",
            path: "/reports/operationalreports/remittance"
          }, {
            id: 5,
            name: "Broker Commission",
            path: "/reports/operationalreports/brokercommision"
          }
        ]
      },
      {
        id: 2,
        name: "Financial Reports",
        // path: "/reports/operationalreports",
        submenu: [
          {
            id: 1,
            name: "SOA/Premium Receivable",
            path: "/reports/Financialreports/soapremiumreceivable"
          },
          {
            id: 2,
            name: "Collection Report",
            path: "/reports/Financialreports/collectionreport"
          }, {
            id: 3,
            name: "Payables",
            path: "/reports/Financialreports/Payables"
          }, {
            id: 4,
            name: "Journal",
            path: "/reports/Financialreports/journal"
          }, {
            id: 5,
            name: "Trail Balance",
            path: "/reports/Financialreports/trailbalance"
          }
        ]
      },
    ],
  },

];
