import React, { useEffect, useState } from "react";
import "../CommissionTabel/index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import { useNavigate } from "react-router-dom";
import data from "./data";
import SvgEditIcon from "../../../../assets/icons/SvgEditIcon";
import ToggleButton from "../../../../components/ToggleButton";

const CommissionTabel = ({ handleEdit, newDataTable ,commissionList}) => {
    const navigate = useNavigate()
    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleNavigateView = () => {
        navigate("/master/generals/commission/viewcommission")
    }
    const handleEditNavigate = () => {
        navigate("/master/generals/commission/editcommission")
    }
    console.log(newDataTable, "find newDataTable");
    let newProduct;
    let updatedProductData;

    if (newDataTable.length > 0) {
        updatedProductData = [
            ...data,
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
        updatedProductData = data;
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
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
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
            <div className="centercontent" >
                <div onClick={handleNavigateView}>
                    <SvgEyeIcon />
                </div>
                <div onClick={handleEditNavigate}>
                    <SvgEditIcon />
                </div>

            </div>
        );
    };
    const headerStyle = {
        fontSize: 16,
        fontFamily: "Inter var",
        fontWeight: 500,
        // padding: 6,
        color: "#000",
        border: "none",
      };
    const renderToggleButton = () => {
        return (
            <div>
                <ToggleButton />
            </div>
        );
    };


    return (
        <div className="petty__cash__table__container">
            <DataTable
                value={commissionList}
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
            

            >
                <Column
                    field="commissionCode"
                    header="Commission Code"
                    className="fieldvalue_container"
                    sortable

                ></Column>
                <Column
                    field="product"
                    header="Product"
                    className="fieldvalue_container"
                   sortable
                ></Column>

                <Column
                    field="selectCover"
                    header="Select Covers"
                    className="fieldvalue_container"
                  

                ></Column>
                <Column
                    field="effectiveFrom"
                    header="Effective From"
                    className="fieldvalue_container"


                ></Column>
                <Column
                   field="effectiveTo"
                    header="Effective To"
                    className="fieldvalue_container"


                ></Column>
               
                <Column
                    body={renderToggleButton}
                    field="status"
                    header="Status"
                    headerStyle={{ textAlign: 'left', ...headerStyle }}
                    className="fieldvalue_container"
                ></Column>
                <Column
                    body={renderEditButton}
                    header="Action"
                    className="fieldvalue_container"


                ></Column>
            </DataTable>
        </div>
    );
};

export default CommissionTabel;
