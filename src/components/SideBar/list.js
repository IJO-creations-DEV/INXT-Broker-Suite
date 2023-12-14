import SvgAccountIcon from "../../assets/icons/SvgAccountIcon"
import SvgMassterIcon from "../../assets/icons/SvgMassterIcon"
import SvgReportsIcon from "../../assets/icons/SvgReportsIcon"
export const menuList = [
    {
        name: 'Accounts',
        icons: <SvgAccountIcon/>,
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
                path: '/correctionjv',
            }
        ]
    },
    {
        name: 'Master',
        icons: <SvgMassterIcon/>,
        submenu: []
    },
    {
        name: 'Reports',
        icons: <SvgReportsIcon/>,
        submenu: []
    }
]