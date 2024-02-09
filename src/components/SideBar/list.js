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
                includes: [
                  "master/generals/organization/companymaster/add/:id",
                  "master/generals/organization/companymaster/edit/:id",
                  "master/generals/organization/companymaster/view/:id"
                ]

              },

              {
                id: 2,
                name: "Branch",
                path: "/master/generals/organization/branchmaster",
                includes: [
                  'master/generals/organization/branchmaster/add/:id',
                  'master/generals/organization/branchmaster/edit/:id',
                  'master/generals/organization/branchmaster/view/:id'
                ]
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
                  "master/generals/insurancemanagement/insurancecompany/add/:id",
                  "master/generals/insurancemanagement/insurancecompany/edit/:id",
                  'master/generals/insurancemanagement/insurancecompany/view/:id'
                ]

              },
              {
                id: 2,
                name: "Line of Business",
                path: "/master/generals/insurancemanagement/lineofbusiness",
                includes: [
                  'master/generals/insurancemanagement/lineofbusiness/add/:id',
                  'master/generals/insurancemanagement/lineofbusiness/edit/:id',
                  'master/generals/insurancemanagement/lineofbusiness/view/:id'
                ]
              },
              {
                id: 3,
                name: "Product",
                path: "/master/generals/insurancemanagement/productmaster",
                includes: [
                  'master/generals/insurancemanagement/productmaster/add/:id',
                  'master/generals/insurancemanagement/productmaster/edit/:id',
                  'master/generals/insurancemanagement/productmaster/view/:id'
                ]
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
                includes: [
                  'master/generals/insurancemanagement/cover',
                  'master/generals/insurancemanagement/productmaster/add/:id',
                  'master/generals/insurancemanagement/productmaster/edit/:id',
                  'master/generals/insurancemanagement/productmaster/view/:id'
                ]
              },
              {
                id: 6,
                name: "Signatories",
                path: "/master/generals/insurancemanagement/signatories",
                includes: [
                  'master/generals/insurancemanagement/signatories/add/:id',
                  'master/generals/insurancemanagement/signatories/edit/:id',
                  'master/generals/insurancemanagement/signatories/view/:id'
                ]
              },
              {
                id: 7,
                name: "Vehicle",
                path: "/master/generals/insurancemanagement/vehicle",
                includes: [
                  ' master/generals/insurancemanagement/vehicle/add/:id',
                  'master/generals/insurancemanagement/vehicle/edit/:id',
                  'master/generals/insurancemanagement/vehicle/view/:id'
                ]
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
                  'master/generals/location/country/add',
                  'master/generals/location/country/edit',
                  'master/generals/location/country/view'
                ]
              },
              {
                id: 2,
                name: "State",
                path: "/master/generals/location/state",
                includes: [
                  'master/generals/location/state/add',
                  'master/generals/location/state/edit',
                  'master/generals/location/state/view',
                ]
              },
              {
                id: 3,
                name: "City Master",
                path: "/master/generals/location/city",
                includes: [
                  'master/generals/location/city/add',
                  'master/generals/location/city/edit',
                  'master/generals/location/city/view'
                ]

              },
            ],
          },
          {
            id: 4,
            name: "Commission",
            path: "/master/generals/commission",
            includes: [
              'master/generals/commission/addcommission',
              'master/generals/commission/editcommission',
              'master/generals/commission/viewcommission/:id'
            ]
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
                  'master/generals/employeemanagement/hierarchy/add',
                  'master/generals/employeemanagement/hierarchy/edit/:id',
                  'master/generals/employeemanagement/hierarchy/view/:id'
                ]
              },
              {
                id: 2,
                name: "Designation",
                path: "/master/generals/employeemanagement/designation",
                includes: [
                  'master/generals/employeemanagement/designation/add/:id',
                  'master/generals/employeemanagement/designation/edit/:id',
                  'master/generals/employeemanagement/designation/view/:id'
                ]
              },
              {
                id: 3,
                name: "Employee",
                path: "/master/generals/employeemanagement/employee",
                includes: [
                  'master/generals/employeemanagement/employee/add/:id',
                  'master/generals/employeemanagement/employee/edit/:id',
                  ' master/generals/employeemanagement/employee/view/:id'
                ]
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
                  'master/generals/usermanagement/user/add',
                  'master/generals/usermanagement/user/edit/:id',
                  'master/generals/usermanagement/user/view/:id'
                ]
              },
              {
                id: 2,
                name: "Role",
                path: "/master/generals/usermanagement/role",
                includes: [
                  'master/generals/usermanagement/role/add/:id',
                  'master/generals/usermanagement/role/edit/:id',
                  'master/generals/usermanagement/role/view/:id'
                ]
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
              'master/finance/transactioncode/addtransactioncode',
              'master/finance/transactioncode/transactioncodeedit',
              'master/finance/transactioncode/transactioncodedetails'
            ]
          },
          {
            id: 2,
            name: "Currency",
            path: "/master/finance/currency",
            includes: [
              'master/finance/currency/addcurrency',
              'master/finance/currency/editcurrency',
              'master/finance/currency/viewcurrency'
            ]
          },
          {
            id: 3,
            name: "Exchange Rate",
            path: "/master/finance/exchangerate",
            includes: [
              'master/finance/exchangerate/addexchange',
              'master/finance/exchangerate/saveandeditexchange',
              'master/finance/exchangerate/viewexchange'
            ]
          },
          {
            id: 4,
            name: "Bank",
            path: "/master/finance/bank",
            includes: [
              'master/finance/bank/addbankmaster',
              'master/finance/bank/accountdataview',
              'master/finance/bank/accountdataview/viewaccountdetail',
              'master/finance/bank/accountdataview/editaccountdetail'
            ]
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
            includes: [
              'master/finance/mainaccount/addmainaccount',
              'master/finance/mainaccount/editmainaccount',
              'master/finance/mainaccount/viewmainaccount'
            ]
          },
          {
            id: 7,
            name: "Sub Account",
            path: "/master/finance/subaccount",
            includes: [
              'master/finance/subaccount/subaccountedit',
              'master/finance/subaccount/subaccountdetails'
            ]
          },
          {
            id: 8,
            name: "Taxation",
            path: "/master/finance/taxation",
            includes: [
              'master/finance/taxation/addtaxation',
              'master/finance/taxation/taxationedit',
              'master/finance/taxation/taxationdetails'
            ]
          },
          {
            id: 9,
            name: "Petty cash",
            path: "/master/finance/pettycash",
            includes: [
              'master/finance/pettycash/addpettycash',
              'master/finance/pettycash/editpettycash/:id',
              'master/finance/pettycash/pettycashdetail/:id'
            ]
          },
        ],
      },
    ],
  },
  {
    name: "Broker",
    icon: <SvgReportsIcon />,
    submenu: [
      {
        name: "Home",
        icon: <SvgAgentHomeIcon color="#9DA4AE" />,
        path: "/",
      },
      {
        name: "Leads",
        icon: <SvgAgentLeadIcon color="#9DA4AE" />,
        path: "/agent/leadlisting",
        includes: [
          'agent/createlead',
          'createquote/policydetails/createquote/:id',
          'createquote/coveragedetails/coveragecreate/:id',
          'createquote/accessories/accessoriescreate/:id',
          'agent/createquote/ordersummary',
          'agent/quotedetailview',
          'agent/convertpolicy/customerinfo/view/:id',
          'agent/convertpolicy/uploadvehiclephotos',
          'agent/coveragedetailedview',
          'agent/policyapproval',
          'agent/uploadpolicy'
        ]
      },
      {
        name: "Clients",
        icon: <SvgAgentClientIcon color="#9DA4AE" />,
        path: "/agent/clientlisting",
        includes: [
          'agent/clientedit',
          'policy:agent/clientview/:id',
          'agent/policydetailedview',
          'agent/policydetailedviewonly',
          'agent/claimrequest/claimdetails',
          'agent/claimrequest/sendmail',
          'agent/claimrequest/requestapproval/:id',
          'agent/claimrequest/adjustersubmission',
          'agent/claimrequest/settlementapproval',
          ' agent/claimrequest/settlementdetails/:id',
          'agent/claimdetailedview/:id',
          'agent/renewalquote/coveragedetails/coveragedetail/:id',
          'agent/createquote/accessories/accessorirsdetails/:id',
          'agent/createquote/ordersummaryquote',
          'agent/quotedetailview',
          'agent/endorsement/paymentconfirmation',
          'agent/policy/paymentoptions',
          'agent/endorsement/paymenterror/:id',
          'agent/uploadendorsement',
          'agent/endorsementdetailedview/:id',
          'agent/endorsement/paymentconfirmation',
          'agent/endorsement/personaldetails',
          'agent/uploadendorsement',
          'agent/endorsementdetailedview/:id',
          'agent/endorsement/paymentconfirmation'
        ]
      },
      {
        name: "Open Items",
        icon: <SvgAgentItemsIcon color="#9DA4AE" />,
        path: "/agent/openitemslistdata",
        includes: [
          'agent/openitemslistdata',
          'agent/openitems/expiringpolicy',
          'agent/payments',
          'agent/policydetailedviewonly',
          'agent/policydetailedview',
          'agent/policy/paymentapproval',
          'agent/openitems/quotepending',
          'agent/convertpolicy/customerinfo/edit/:id',
          'agent/openitems/renewalrequest',
          'agent/renewal/waiting/:id'
        ]
      },
      {
        name: "Payments",
        icon: <SvgAgentPaymentIcon color="#9DA4AE" />,
        path: "/agent/payments",
      },
      {
        name: "Claim",
        icon: <SvgAgentItemsIcon color="#9DA4AE" />,
        path: "/agent/claim",
        includes: [
          'agent/claimrequest/requestapproval/:id',
          'agent/claimrequest/adjustersubmission',
          'agent/claimrequest/settlementapproval',
          'agent/claimrequest/settlementdetails/:id',
          'agent/claimdetailedview/:id'
        ]
      },
      {
        name: "Policy",
        icon: <SvgPolicyIcon color="#9DA4AE" />,
        path: "/agent/policy",
      },
      {
        name: "Quotation",
        icon: <SvgQuotationIcon color="#9DA4AE" />,
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
        includes: [
          'accounts/receipts/addreceipts',
          'accounts/receipts/receiptdetailview'

        ]
      },
      {
        id: 2,
        name: "Payment Voucher",
        path: "/accounts/paymentvoucher",
        includes: [
          'accounts/paymentvoucher/createvoucher',
          'accounts/paymentvoucher/detailview/:id'
        ]
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
              'accounts/pettycash/pettycashcodeinitiate/initiate',
              ' accounts/pettycash/PettyCashCodeDetails'
            ]
          },
          {
            id: 2,
            name: "Request",
            path: "/accounts/pettycash/pettycashrequest",
            includes: [
              'accounts/pettycash/addrequest/add/:id',
              'accounts/pettycash/addrequesttable',
              'accounts/pettycash/editrequestform/edit/:id',
              'accounts/pettycash/editrequestform/view/:id'
            ]
          },
          {
            id: 3,
            name: "Disbursement",
            path: "/accounts/pettycash/disbursement",
            includes: [
              'accounts/pettycash/adddisbursement',
              'accounts/pettycash/disbursementdetailview'
            ]
          },
          {
            id: 4,
            name: "Receipts",
            path: "/accounts/pettycash/receipts",
            includes: [
              'accounts/pettycash/addreceipts',
              'accounts/pettycash/receiptlist'
            ]
          },
          {
            id: 5,
            name: "Replenish",
            path: "/accounts/pettycash/replenish",
            includes: [
              'accounts/pettycash/addreplenish',
              'accounts/pettycash/replenishtdetailview'
            ]
          },
        ],
      },

      {
        id: 4,
        name: "Journal Voucher",
        path: "/accounts/journalvoucher",
        includes: [
          'accounts/journalvoucher/addjournalvoucture',
          'accounts/journalvoucher/detailsjournalvocture/:id'
        ]
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
