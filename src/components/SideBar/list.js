export const menuList = [
  {
    name: "Accounts",
    submenu: [
      {
        id: 1,
        name: "Receipts",
        path: "/accounts/receipts",
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
        name: "Correction Journal Voucher",
        path: "/accounts/correctionsjv/correctionsjvdetails",
      },
      {
        id: 6,
        name: "Reversal Journal Voucher",
        path: "/accounts/reversaljv/reversaljvdetails",
      },
    ],
  },
  {
    name: "Master",
    submenu: [
      {
        id: 1,
        name: "Generals",
        submenu:[
            {
                id:1,
                name:"Organization",
                path:"master/generals/organization"
            },
            {
                id:2,
                name:"Commission",
                path:"master/generals/commission"
            }
        ]
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
    name: "Reports",
    // icons: <SvgReportsIcon/>,
    submenu: [],
  },
];
