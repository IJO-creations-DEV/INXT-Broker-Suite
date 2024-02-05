import React, { useEffect, useState } from "react";
import "../DataTabelJV/index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./data";
import { Dropdown } from "primereact/dropdown";
import SvgTable from "../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../assets/icons/SvgEyeIcon";
import { useNavigate } from "react-router-dom";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
import { getJournalVoucherViewData } from "../store/journalVoucherMiddleware";
import { useDispatch } from "react-redux";


const DataTabelJV = ({ handleEdit, journalVoucherList }) => {
    console.log(journalVoucherList, "find a journalVoucherList")
    const navigate = useNavigate()


    const headerStyle = {
        // width: "19%",
        // backgroundColor: 'red',
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        padding: "1rem",
        
        color: "#000",
        border: "none",
        //     display:' flex',
        // justifycontent: 'center'
    };

    const headaction = {
        justifyContent: 'center',
        // textalign: center,
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        padding: "1rem",
        color: "#000",
        border: " none",
        display: "flex"
    }

    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const dispatch = useDispatch()
    const handleView = (rowData) => {
        console.log(rowData.id, "rowdata")
        dispatch(getJournalVoucherViewData(rowData))
        // const serializedData = JSON.stringify(rowData);
        navigate(`/accounts/journalvoucher/detailsjournalvocture/${rowData.id}`);
    };

    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };
    const isEmpty = journalVoucherList.length === 0;
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


    const header__style = {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 20
    };
    // const body__style = {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     paddingRight: 30
    // };

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
                // onRowClick={(event) => handleNavigate(event.data)}
                scrollable={true}
                scrollHeight="40vh"
            >
                <Column
                    field="transationCode"
                    header="Transaction Code"
                    className="fieldvalue_container"
                    headerStyle={headerStyle}

                ></Column>
                <Column
                    field='transactionNumber'
                    header="Transaction Number"
                    className="fieldvalue_container"
                    headerStyle={headerStyle}
                ></Column>

                <Column
                    field="date"
                    header="Date"
                    className="fieldvalue_container"
                    headerStyle={headerStyle}
                ></Column>
                <Column
                    field="transationDescription"
                    header="Date"
                    className="fieldvalue_container"
                    hidden
                    headerStyle={headerStyle}
                ></Column>

                <Column
                    // body={renderEditButton}

                    body={(columnData) => (

                        <SvgIconeye onClick={() => handleView(columnData)} />

                    )}
                    style={{ textAlign: 'center' }}
                    headerStyle={headaction}
                    header="View"
                    className="fieldvalue_container"
                // headerStyle={header__style}
                // bodyStyle={body__style}

                ></Column>
            </DataTable>
        </div>
    );
};

export default DataTabelJV;
