export const menuList = [
  
  
  {
    name: "Master",
    submenu: [
      {
        id: 1,
        name: "Generals",
        submenu: [
          {
            id: 1,
            name: "Organization",
            path: "master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Company",
                path: "master/generals/organization/companymaster",
              },
              {
                id: 2,
                name: "Branch",
                path: "master/generals/organization/branchmaster",
              },
            ],
          },
          {
            id: 2,
            name: "Insurance Management",
            path: "master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Insurance Company",
                path: "master/generals/insurancemanagement/insurancecompany",
              },
              {
                id: 2,
                name: "Line of Business",
                path: "master/generals/insurancemanagement/lineofbusiness",
              },
              {
                id: 3,
                name: "Product",
                path: "master/generals/insurancemanagement/productmaster",
              },
              {
                id: 4,
                name: "Policy Type",
                path: "master/generals/insurancemanagement/policytype",
              },
              {
                id: 5,
                name: "Cover",
                path: "master/generals/insurancemanagement/cover",
              },
              {
                id: 6,
                name: "Signatories",
                path: "master/generals/insurancemanagement/signatories",
              },
              {
                id: 7,
                name: "Vehicle",
                path: "master/generals/insurancemanagement/vehicle",
              },
            ],
          },
          {
            id: 3,
            name: "Location",
            path: "master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Country",
                path: "master/generals/location/country",
              },
              {
                id: 2,
                name: "State",
                path: "master/generals/location/state",
              },
              {
                id: 3,
                name: "City Master",
                path: "master/generals/location/city",
              },
            ],
          },
          {
            id: 4,
            name: "Commission",
            path: "master/generals/commission",
          },
          {
            id: 5,
            name: "Employee Management",
            path: "master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "Hierarchy",
                path: "master/generals/employeemanagement/hierarchy",
              },
              {
                id: 2,
                name: "Designation",
                path: "master/generals/employeemanagement/designation",
              },
              {
                id: 3,
                name: "Employee",
                path: "master/generals/employeemanagement/employee",
              },
            ],
          },
          {
            id: 6,
            name: "User Management",
            path: "master/generals/organization",
            submenu: [
              {
                id: 1,
                name: "User",
                path: "master/generals/usermanagement/user",
              },
              {
                id: 2,
                name: "Role",
                path: "master/generals/usermanagement/role",
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
            path: "master/finance/transactioncode",
          },
          {
            id: 2,
            name: "Currency",
            path: "master/finance/currency",
          },
          {
            id: 3,
            name: "Exchange Rate",
            path: "master/finance/exchangerate",
          },
          {
            id: 4,
            name: "Bank",
            path: "master/finance/bank",
          },
          {
            id: 5,
            name: "Account Category",
            path: "master/finance/accountcategory",
          },
          {
            id: 6,
            name: "Main Account",
            path: "master/finance/mainaccount",
          },
          {
            id: 7,
            name: "Sub Account",
            path: "master/finance/subaccount",
          },
          {
            id: 8,
            name: "Taxation",
            path: "master/finance/taxation",
          },
          {
            id: 9,
            name: "Petty cash",
            path: "master/finance/pettycash",
          },
        ],
      },
    ],
  },
  {
    name: "Broker",
    // icons: <SvgReportsIcon/>,
    submenu: [
      {
        name: "Home",
        path: "/agent/home",
      },
      {
        name: "Leads",
        path: "/agent/leadlisting",
      },
      {
        name: "Clients",
        path: "/agent/clientlisting",
      },
      {
        name: "Open Items",
        path: "/agent/openitems",
      },
      {
        name: "Payments",
        path: "/agent/payments",
      },
    ],
  },
  {
    name: "Accounts",
    submenu: [
      {
        id: 1,
        name: "Receipts",
        path: "/accounts/receipts/policyreceipts",
      },
      {
        id: 2,
        name: "Payment Voucher",
        path: "accounts/paymentvoucher",
      },
      {
        id: 3,
        name: "Petty Cash",
        submenu: [
          {
            id: 1,
            name: "Initiate",
            path: "accounts/pettycash/pettycashcodeinitiate",
          },
          {
            id: 2,
            name: "Request",
            path: "accounts/pettycash/request",
          },
          {
            id: 3,
            name: "Disbursement",
            path: "accounts/pettycash/disbursement",
          },
          {
            id: 4,
            name: "Receipts",
            path: "accounts/pettycash/receipts",
          },
          {
            id: 5,
            name: "Replenish",
            path: "accounts/pettycash/replenish",
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
    // icons: <SvgReportsIcon/>,
    submenu: [
      {
        id: 1,
        name: "Operational Reports",
        path: "/reports/operationalreports",
      },
    ],
  },
  
];
