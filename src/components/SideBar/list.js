
export const menuList = [
    {
        name: 'Accounts',
            submenu: [
            {
                id:1,
                name: 'Receipts',
                path: '/policyreceipts',
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
                        path: 'master/finance/company',
                    },
                    {
                        id: 2,
                        name: 'Branch',
                        path: 'master/finance/bank',
                    },
                    {
                        id: 3,
                        name: 'Department', 
                        path: 'master/finance/department', 
                    },
                    {
                        id: 4,
                        name: 'Transaction code', 
                        path: 'master/finance/transactioncode',
                    },
                    {
                        id: 5,
                        name: 'Currency', 
                        path: 'master/finance/currency',
                    },
                    {
                        id: 6,
                        name: 'Exchange Rate', 
                        path: 'master/finance/exchangerate',
                    },
                    {
                        id: 7,
                        name: 'Bank', 
                        path: 'master/finance/bank',
                    },
                    {
                        id: 8,
                        name: 'Bank Account', 
                        path: 'master/finance/bankaccount',
                    },
                    {
                        id: 9,
                        name: 'Bank Cheque', 
                        path: 'master/finance/bankcheque',
                    },
                    {
                        id: 10,
                        name: 'Account Category', 
                        path: '/master/finance/accountcate',
                    },
                    {
                        id: 11,
                        name: 'Main Account', 
                        path: 'master/finance/mainaccount',
                    },
                    {
                        id: 12,
                        name: 'Sub Account', 
                        path: 'master/finance/subaccount',
                    },
                    {
                        id: 13,
                        name: 'Taxation', 
                        path: 'master/finance/taxation',
                    },
                    {
                        id: 14,
                        name: 'Petty cash', 
                        path: 'master/finance/pettycash',
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