import SvgAccountIcon from "../../assets/icons/SvgAccountIcon"
import SvgMassterIcon from "../../assets/icons/SvgMassterIcon"
import SvgReportsIcon from "../../assets/icons/SvgReportsIcon"
export const menuList = [
    {
        name: 'Accounts',
        icons: <SvgAccountIcon/>,
            submenu: [
            {
                name: 'Receipts',
                path: '/policyreceipts',
            },
            {
                name: 'Payment Voucher',
                path: '/paymentvoucher',
            },
            {
                name: 'Petty Cash',
                path: '/pettycashmanagement',
            },
            {
                name: 'Journal Voucher',
                path: '/journalvoucher',
            },
            {
                name: 'Correction Journal Voucher',
                path: '/correctionsjv',
            },
            {
                name: 'Reversal Journal Voucher',
                path: '/reversaljv',
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