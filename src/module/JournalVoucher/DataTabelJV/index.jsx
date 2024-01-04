import React, { useEffect, useState } from "react";
import "../DataTabelJV/index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./data";
import { Dropdown } from "primereact/dropdown";
import SvgTable from "../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../assets/icons/SvgEyeIcon";
import { useNavigate } from "react-router-dom";
const DataTabelJV = ({ handleEdit, newDataTable, journalVoucherList }) => {
    console.log(journalVoucherList, "journalVoucherList")
    const navigate = useNavigate()
    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleNavigate = (rowData) => {
        const serializedData = JSON.stringify(rowData);
        navigate(`/accounts/journalvoucher/detailsjournalvocture`, { state: { serializedData: serializedData } });
    };
    // const handleNavigate = () => {
    //     const serializedData = JSON.stringify(journalVoucherList);
    //     navigate('/accounts/journalvoucher/detailsjournalvocture', { state: { journalVoucherList: serializedData } });
    // }

    console.log(newDataTable, "find newDataTable");
    let newProduct;
    let updatedProductData;

    if (newDataTable.length > 0) {
        updatedProductData = [
            ...Productdata,
            (newProduct = {
                id: 11,
                mainAC: newDataTable[0].mainAccount,
                subAC: newDataTable[0].subAccount,
                Currency: newDataTable[0].currencyCode,
                foreignAmount: newDataTable[0].foreignAmount,
                localAmount: "500.00",
                Remarks: "New credit voucher",
                Entry: newDataTable[0].entryType,
            }),
        ];
    } else {
        updatedProductData = Productdata;
    }
    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };
    const isEmpty = updatedProductData.length === 0;
    const emptyTableIcon = (
        <div className="empty-table-icon">
            <SvgTable />
        </div>
    );

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
                <div
                    style={{ width: '40%' }}
                    className="table__selector">
                    <React.Fragment>
                        <span style={{ color: "var(--text-color)", userSelect: "none" }}>
                            Row count :{" "}
                        </span>
                        <Dropdown
                            value={options.value}
                            className="pagedropdown_container"
                            options={dropdownOptions}
                            onChange={options.onChange}
                        />
                    </React.Fragment>
                </div>
            );
        },
    };

    const renderEditButton = (rowData) => {
        return (
            <div className="centercontent" onClick={handleNavigate}>
                <SvgEyeIcon />

            </div>
        );
    };

    const header__style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 20
    };
    const body__style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 30
    };

    return (
        <div className="journal__table__container">
            <DataTable
                value={journalVoucherList}
                style={{ overflowY: 'auto', maxWidth: '100%' }}
                responsive={true}
                className='table__view__Journal__Voture'
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                onPage={onPageChange}
                onPageChange={onPageChange}
                emptyMessage={isEmpty ? emptyTableIcon : null}
                onRowClick={(event) => handleNavigate(event.data)}

            >
                <Column
                    field="tc"
                    header="Transaction Code"
                    className="fieldvalue_container"


                ></Column>
                <Column
                    field="tn"
                    header="Transaction Number"
                    className="fieldvalue_container"

                ></Column>

                <Column
                    field="date"
                    header="Date"
                    className="fieldvalue_container"

                ></Column>

                <Column
                    body={renderEditButton}
                    header="View"
                    className="fieldvalue_container"
                    headerStyle={header__style}
                    bodyStyle={body__style}

                ></Column>
            </DataTable>
        </div>
    );
};

export default DataTabelJV;
