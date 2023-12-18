
export const menuList = [
    {
        name: 'Accounts',
            submenu: [
            {
                id:1,
                name: 'Receipts',
                path: '/Receipts',
            },
            {
                id:2,
                name: 'Payment Voucher',
                path: '/paymentvoucher',
            },
            {
                id:3,
                name: 'Petty Cash',
                path: '/pettycashmanagement',
            },
            {
                id:4,
                name: 'Journal Voucher',
                path: '/journalvoucher',
            },
            {
                id:5,
                name: 'Correction Journal Voucher',
                path: '/correctionjv',
            },
            {
                id:6,
                name: 'Reversal Journal Voucher',
                path: '/reversaljv',
            }
        ]
    },
    {
        name: 'Master',
        submenu: [
            {
                id: 1,
                name: 'Generals',
            },
            {
                id: 2,
                name: 'Finance',
                submenu: [
                    {
                        id: 1,
                        name: 'Company',
                        path: '/companymaster',
                    },
                    {
                        id: 2,
                        name: 'Branch',
                        path: '/bankmaster',
                    },
                    {
                        id: 3,
                        name: 'Department', 
                        path: '/departmentmaster', 
                    },
                    {
                        id: 4,
                        name: 'Transaction code', 
                        path: '/transactioncodemaster',
                    },
                    {
                        id: 5,
                        name: 'Currency', 
                        path: '/currencymaster',
                    },
                    {
                        id: 6,
                        name: 'Exchange Rate', 
                        path: 'exchangeratemaster',
                    },
                    {
                        id: 7,
                        name: 'Bank', 
                        path: '/bankmaster',
                    },
                    {
                        id: 8,
                        name: 'Bank Account', 
                        path: '/bankaccountmaster',
                    },
                    {
                        id: 9,
                        name: 'Bank Cheque', 
                        path: '/bankchequemaster',
                    },
                    {
                        id: 10,
                        name: 'Account Category', 
                        path: '/accountcategorymaster',
                    },
                    {
                        id: 11,
                        name: 'Main Account', 
                        path: '/mainaccountmaster',
                    },
                    {
                        id: 12,
                        name: 'Sub Account', 
                        path: '/subaccountmaster',
                    },
                    {
                        id: 13,
                        name: 'Taxation', 
                        path: '/taxationmaster',
                    },
                    {
                        id: 14,
                        name: 'Petty cash', 
                        path: '/pettycashmaster',
                    },
                ]
            }
        ]
    },
    {
        name: 'Reports',
        // icons: <SvgReportsIcon/>,
        submenu: []
    }
]